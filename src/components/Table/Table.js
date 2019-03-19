import React from 'react';
import { ScrollView } from 'react-native';

import List from './List';
import data from './data';

export default class Table extends React.Component {
  render () {
    const items = data.items.map(item => ({
      name: item.name,
      forks: item.forks,
      stars: item.stargazers_count,
      size: item.size,
      url: item.html_url,
      language: item.language,
      desc: item.description,
      created: item.created_at,
      updated: item.updated_at
    }));

    console.log(' ---- ', items);

    return (
        <ScrollView style={ { } }>
            <List items={ items } />
        </ScrollView>
    );
  }
}
