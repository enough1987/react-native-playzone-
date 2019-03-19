import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Feature extends React.Component {
  render () {
    return (
        <View style={ { flex: 1 } }>
            <Text>Technologies</Text>
            <View>
                <View>
                    <View>
                        <Text>ICON HERE</Text>
                    </View>
                    <View>
                        <Text>GraphQL</Text>
                        <Text>
A query language for APIs and a runtime for
                            fulfilling those queries with your existing data.

                        </Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Icon
                          name="ios-bug"
                          color="#ccc"
                          size={ 25 }
                        />
                    </View>
                    <View>
                        <Text>D3 and charts</Text>
                        <Text>Something about D3 and charts</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text />
                    </View>
                    <View>
                        <Text>React</Text>
                        <Text>Redux</Text>
                        <Text>React-router-dom</Text>
                        <Text>Redux-form</Text>
                    </View>
                </View>
            </View>
            <View>
                <View>
                    <View>
                        <Icon
                          name="ios-bug"
                          color="#ccc"
                          size={ 25 }
                        />
                    </View>
                    <View>
                        <Text>.NET Core solution</Text>
                        <Text>Something about .NET Core solution</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Icon
                          name="ios-bug"
                          color="#ccc"
                          size={ 25 }
                        />
                    </View>
                    <View>
                        <Text>Microservices</Text>
                        <Text>
An architectural style that structures an application
                            as a collection of services.

                        </Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Icon
                          name="ios-bug"
                          color="#ccc"
                          size={ 25 }
                        />
                    </View>
                    <View>
                        <Text>Kafka</Text>
                        <Text>A distributed streaming platform.</Text>
                    </View>
                </View>
            </View>
        </View>
    );
  }
}
