import React, { Component } from 'react';

import { View, Text, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PureChart from 'react-native-pure-chart';

import getTrends from '../../store/actions/trends';
import styles from './TrendsStyle';
import globalStyles from '../../global/globalStyle';
import colors from '../../global/colors';
import trendsPageActionTypes from '../../store/actions/actionTypes';

export class Trends extends Component {
  constructor (props) {
    super(props);
    props.getTrends();
  }

  getChartData = () => {
    const data = [];
    const languages = [];
    this.props.languageTrends.forEach((trend, index) => {
      languages.push({
        label: trend.language,
        color: colors.trands[index]
      });
      data.push({
        seriesName: trend.language,
        label: trend.language,
        data: trend.results
          .map(item => ({ x: item.date, y: item.total_Count }))
          .slice(Math.max(trend.results.length - 6, 1)),
        color: colors.trands[index]
      });
    });

    return {
      data,
      languages
    };
  }

   getChartBottomHeader = languages => languages.map((lang, index) => (
       <Text
         // eslint-disable-next-line react/no-array-index-key
         key={ index }
         style={ { color: lang.color, textShadowColor: lang.color } }
       >
           { ' ' }
           { lang.label }
           { ' ' }
       </Text>
   ))

   render () {
     const { data, languages } = this.getChartData();

     return (
         <View style={ globalStyles.pageContainer }>
             <Text style={ styles.title }>Trends</Text>
             {
               this.props.loading[trendsPageActionTypes.SEARCH_USERS]
                 ? (
                     <ActivityIndicator
                       style={ styles.loader }
                       size="large"
                       color={ colors.lightBlue }
                     />
                 ) : (
                     <PureChart
                       width="100%"
                       height={ 400 }
                       data={ data }
                       type="line"
                     />
                 )
             }
             <Text style={ styles.chartBottomHeader }>
                 {
                   this.getChartBottomHeader(languages)
                 }
             </Text>
         </View>
     );
   }
}

Trends.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  loading: PropTypes.object.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired,
  languageTrends: PropTypes.arrayOf(PropTypes.object)
    .isRequired,
  getTrends: PropTypes.func.isRequired

};

const mapStateToProps = state => ({
  loading: state.common.loading,
  languageTrends: state.trends.languageTrends
});

const mapDispatchToProps = dispatch => ({
  getTrends: () => dispatch(getTrends())
});

export default connect(mapStateToProps, mapDispatchToProps)(Trends);
