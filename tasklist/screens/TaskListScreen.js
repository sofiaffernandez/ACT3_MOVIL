import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tareas</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  taskContainer: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#66BB6A',
    borderRadius: 5,
  },
  taskName: {
    fontSize: 18,
    color: 'white',
  },
});

