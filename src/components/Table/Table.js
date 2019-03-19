import React from 'react';
import { ScrollView } from 'react-native';

import Header from './Header';
import List from './List';
import data from './data';

export default class Table extends React.Component {
  render () {
    const items = data.items.map(item => ({
      name: item.name,
      forks: item.forks,
      stars: item.stargazers_count,
      size: item.size,
      language: item.language,
      desc: item.description ? `${item.description.slice(0, 10)}...` : null
    }));
    const headers = [
      { label: 'name' },
      { label: 'forks' },
      { label: 'stars' },
      { label: 'size' },
      { label: 'language' },
      { label: 'desc' }
    ];

    console.log(' ---- ', items);

    return (
        <ScrollView style={ { } }>
            <Header items={ headers } />
            <List items={ items } />
        </ScrollView>
    );
  }
}
