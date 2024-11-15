import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddTaskScreen from './screens/AddTaskScreen';
import TaskListScreen from './screens/TaskListScreen';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Agregar tarea" component={AddTaskScreen} />
        <Tab.Screen name="Ver tareas" component={TaskListScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
