import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginScreen from './screens/LoginScreen'
import EmployeeScreen from './screens/EmployeeScreen'
import EmployeeCreateScreen from './screens/EmployeeCreateScreen'
import EmployeeEditScreen from './screens/EmployeeEditScreen'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="authFlow">
          <Scene key="login" component={LoginScreen} title="Please Login" />
        </Scene>
        <Scene key="mainFlow">
          <Scene
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            key="employeeList"
            component={EmployeeScreen}
            title="Employees"
            initial
          />
          <Scene key="employeeCreate" component={EmployeeCreateScreen} title="Manage Employee" />
          <Scene key="employeeEdit" component={EmployeeEditScreen} title="Edit Employee" />
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent;