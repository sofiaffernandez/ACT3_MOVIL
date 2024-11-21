import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddTaskScreen from './screens/AddTaskScreen';
import TaskListScreen from './screens/TaskListScreen';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const Tab = createBottomTabNavigator();

const icons = {
  'Agregar tarea': 'format-list-bulleted-add',
  'Ver tareas': 'list',
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Icon name={icons[route.name]} size={size} color={color} />
          ),
          tabBarActiveTintColor: '#77a863',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Agregar tarea" component={AddTaskScreen} />
        <Tab.Screen name="Ver tareas" component={TaskListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
