import React, { Component } from 'react';

import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PureChart from 'react-native-pure-chart';

import getTrends from '../../store/actions/trends';
import styles from './TrendsStyle';

const colors = ['#56e2a3', '#c5f722', '#3f587f', '#f76e4c', '#cccc00'];

export class Trends extends Component {
  constructor (props) {
    super(props);
    props.getTrends();
  }

  render () {
    console.log('TRENDS : ', this.props.languageTrends);

    const data = [];
    const languages = [];
    this.props.languageTrends.forEach((trend, index) => {
      languages.push({
        label: trend.language,
        color: colors[index]
      });
      data.push({
        seriesName: trend.language,
        label: trend.language,
        data: trend.results
          .map(item => ({ x: item.date, y: item.total_Count }))
          .slice(Math.max(trend.results.length - 6, 1)),
        color: colors[index]
      });
    });

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Trends</Text>
            <PureChart
              width="100%"
              height={ 400 }
              data={ data }
              type="line"
            />
            <Text style={ { fontWeight: 'bold', textAlign: 'center' } }>
                {
                  languages.map((lang, index) => (
                      <Text
                        key={ index }
                        style={ { color: lang.color, textShadowColor: lang.color } }
                      >
                          { ' ' }
                          { lang.label }
                          { ' ' }
                      </Text>
                  ))
                }
            </Text>
        </View>
    );
  }
}

Trends.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired,
  languageTrends: PropTypes.arrayOf(PropTypes.object)
    .isRequired,
  getTrends: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  languageTrends: state.trends.languageTrends
});

const mapDispatchToProps = dispatch => ({
  getTrends: item => dispatch(getTrends())
});

export default connect(mapStateToProps, mapDispatchToProps)(Trends);
