import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export default function TaskListScreen() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getDocs(collection(db, 'tasks'));
        const tasksArray = response.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTasks(tasksArray);
      } catch (error) {
        console.error('Error al obtener las tareas:', error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <View>
      <Text>Lista de Tareas</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}
