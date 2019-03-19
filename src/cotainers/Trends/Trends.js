import React, { Component } from 'react';
import {
  LineChart, YAxis, XAxis, Grid
} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import PropTypes from 'prop-types';

import Header from '../../components/Header/Header';

export default class Trends extends Component {
  render () {
    const data1 = [50, 55, 65, 95, 99, 120, 140];
    const data2 = [60, 62, 65, 75, 79, 87, 95];
    const years = [2013, 2014, 2015, 2016, 2017, 2018];

    return (
        <SafeAreaView style={ { flex: 1, backgroundColor: '#fff', padding: 5 } }>
            <Header navigation={ this.props.navigation } />
            <View style={ { height: 400, flexDirection: 'row-reverse' } }>
                <YAxis
                  data={ data1 }
                  formatLabel={ value => `${value}` }
                  contentInset={ { top: 20, bottom: 20 } }
                  svg={ {
                    fill: 'grey',
                    fontSize: 10
                  } }
                  numberOfTicks={ 6 }
                />
                <LineChart
                  style={ { flex: 1, marginLeft: 16, marginRight: 10 } }
                  data={ data1 }
                  gridMin={ 0 }
                  contentInset={ { top: 20, bottom: 20 } }
                  svg={ { stroke: 'red' } }
                  curve={ shape.curveNatural }
                >
                    <Grid />
                </LineChart>
                <LineChart
                  style={ StyleSheet.absoluteFill }
                  data={ data2 }
                  gridMin={ 0 }
                  contentInset={ { top: 20, bottom: 20 } }
                  svg={ { stroke: 'blue' } }
                  curve={ shape.curveNatural }
                />
            </View>
            <XAxis
              data={ data1 }
              formatLabel={ (value, index) => years[index] }
              contentInset={ { left: 30, right: 10 } }
              svg={ { fontSize: 10, fill: 'black' } }
            />
        </SafeAreaView>
    );
  }
}

Trends.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};
