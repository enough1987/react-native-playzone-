import React from 'react';
import { Text, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './FeatureStyle';
import globalStyles from '../../global/globalStyle';

export default class Feature extends React.Component {
  render () {
    return (
        <View style={ styles.feature }>
            <Text style={ globalStyles.title }>Technologies</Text>
            <View style={ styles.item }>
                <View style={ styles.icon }>
                    <FontAwesome5
                      name="database"
                      color={ styles.colorBlue }
                      size={ 30 }
                    />
                </View>
                <View style={ styles.desc }>
                    <Text style={ styles.descTitle }>GraphQL</Text>
                    <Text style={ styles.descContent }>
A query language for APIs and a runtime for fulfilling those queries with your existing data.
                    </Text>
                </View>
            </View>
            <View style={ styles.item }>
                <View style={ styles.icon }>
                    <FontAwesome5
                      name="chart-bar"
                      color={ styles.colorBlue }
                      size={ 30 }
                    />
                </View>
                <View style={ styles.desc }>
                    <Text style={ styles.descTitle }>D3 and charts</Text>
                    <Text style={ styles.descContent }>Something about D3 and charts</Text>
                </View>
            </View>
            <View style={ styles.item }>
                <View style={ styles.icon }>
                    <FontAwesome5
                      name="react"
                      color={ styles.colorBlue }
                      size={ 30 }
                    />
                </View>
                <View style={ styles.desc }>
                    <Text style={ styles.descTitle }>React</Text>
                    <Text style={ styles.descContent }>Redux React-router-dom Redux-form</Text>
                </View>
            </View>
            <View style={ styles.item }>
                <View style={ styles.icon }>
                    <FontAwesome5
                      name="server"
                      color={ styles.colorBlue }
                      size={ 30 }
                    />
                </View>
                <View style={ styles.desc }>
                    <Text style={ styles.descTitle }>.NET Core solution</Text>
                    <Text style={ styles.descContent }>Something about .NET Core solution</Text>
                </View>
            </View>
            <View style={ styles.item }>
                <View style={ styles.icon }>
                    <FontAwesome5
                      name="server"
                      color={ styles.colorBlue }
                      size={ 25 }
                    />
                </View>
                <View style={ styles.desc }>
                    <Text style={ styles.descTitle }>Microservices</Text>
                    <Text style={ styles.descContent }>
An architectural style that structures an application as a collection of services.
                    </Text>
                </View>
            </View>
            <View style={ styles.item }>
                <View style={ styles.icon }>
                    <FontAwesome5
                      name="server"
                      color={ styles.colorBlue }
                      size={ 30 }
                    />
                </View>
                <View style={ styles.desc }>
                    <Text style={ styles.descTitle }>Kafka</Text>
                    <Text style={ styles.descContent }>A distributed streaming platform.</Text>
                </View>
            </View>
        </View>
    );
  }
}
