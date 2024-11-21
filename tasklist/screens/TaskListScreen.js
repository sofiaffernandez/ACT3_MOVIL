import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

export default function TaskListScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'tasks'), (snapshot) => {
      const tasksArray = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(tasksArray);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de tareas</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskName}>{item.name}</Text>
          </View>
        )}
      />

      {/* Stack Navigation */}
      <Ionicons 
        name="arrow-back" 
        size={30} 
        color="black" 
        onPress={() => navigation.navigate('Agregar tarea')} 
        style={styles.backIcon} 
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
    marginLeft: 30,
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
  backIcon: {
    marginTop: 12, 
    position: 'absolute', 
    top: 10, 
    left: 10, 
  },
});
