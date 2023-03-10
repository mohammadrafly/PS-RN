import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Profile';
import Agenda from '../screens/Agenda';
import AddTask from '../screens/AddTask';
import Dashboard from '../screens/Dashboard';
import Promodoro from '../screens/Promodoro';

const Stack = createStackNavigator();

export default class AppStack extends Component {
  render() {   
    return (
      <NavigationContainer
      independent={true}
      >
        <Stack.Navigator
          initialRouteName="Dashboard"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#F5FBFF',
            },
            headerTintColor: '#2F394B',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerShown: true,
          }}>
          <Stack.Screen 
            name="Dashboard"
            component={Dashboard}
            options={{ title: 'PlanStation'}}
          />
          <Stack.Screen 
            name="Promodoro"
            component={Promodoro}
            options={{ title: 'Promodoro'}}
          />
          <Stack.Screen 
            name="AddTask" 
            component={AddTask} 
            options={{ title: 'Add Task' }}
          />       
          <Stack.Screen 
            name="Agenda" 
            component={Agenda} 
            options={
              {title: 'Agenda'}
            }
          />
          <Stack.Screen 
          name="Profile" 
          component={Profile} 
          options={
            { title: 'Profile' }
          }
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}