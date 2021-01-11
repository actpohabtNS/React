import React, { useEffect } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import _ from 'lodash'
import { connect } from 'react-redux'
import { employeesFetch } from '../actions'
import ListItem from '../components/ListItem'

const EmployeeScreen = ({ employees, employeesFetch }) => {
  useEffect(() => {
    if (!employees.length) {
      employeesFetch();
    }
  }, [])

  return (
    <FlatList
      data={employees}
      keyExtractor={(item) => item.uid}
      renderItem={({ item }) => <ListItem employee={item} /> }
    />
  )
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }
  })

  return { employees }; 
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeScreen);