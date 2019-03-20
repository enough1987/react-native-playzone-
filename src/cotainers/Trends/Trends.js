import React, { Component } from 'react';

import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PureChart from 'react-native-pure-chart';

import Header from '../../components/Header/Header';
import getTrends from '../../store/actions/trends';

export class Trends extends Component {
  constructor (props) {
    super(props);
    props.getTrends();
  }

  render () {
    console.log('TRENDS : ', this.props.languageTrends);
    const sampleData = [
      {
        seriesName: 'Javascript',
        data: [
          { x: '2014', y: 30 },
          { x: '2015', y: 60 },
          { x: '2016', y: 100 },
          { x: '2017', y: 190 },
          { x: '2018', y: 300 }
        ],
        color: '#297AB1'
      },
      {
        seriesName: 'Java',
        data: [
          { x: '2014', y: 40 },
          { x: '2015', y: 50 },
          { x: '2016', y: 90 },
          { x: '2017', y: 130 },
          { x: '2018', y: 150 }
        ],
        color: 'yellow'
      }
    ];
    return (
        <View style={ { flex: 1 } }>
            <Header navigation={ this.props.navigation } />
            <PureChart
              height={ 400 }
              data={ sampleData }
              type="line"
            />
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
