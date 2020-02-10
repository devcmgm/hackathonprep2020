import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View,  } from 'react-native';
import Async from 'react-async';
import { Updates } from 'expo';
import Table from 'react-native-simple-table'


class MGM311 extends Component {
  render() {

    const columns = [
      {
        title: 'ID',
        dataIndex: 'request_id',
        width: 55
      },
      {
        title: 'Created',
        dataIndex: 'create_date',
        width: 45
      },
      {
        title: 'Issue Type',
        dataIndex: 'request_type',
        width: 90
      },   
      {
        title: 'Department',
        dataIndex: 'department',
        width: 75
      },
    ];
    return( 
      <View style={styles.container}>
        <Text style={styles.title}>react-native-simple-table</Text>
        <Table height={320} columnWidth={60} columns={columns} dataSource={this.props.myitems} />
      </View>
        
     );
  }
}

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        paddingTop: 20
      },
      android: {}
    }),
  },
  title: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center'
  }
});

export default MGM311;
