import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import globalStyles from '../styles'

export default function AddTaskScreen() {
  const [task, setTask] = useState('');
  const addTask = async () => {
    if (task.trim() === '') {
      Alert.alert('Error', 'La tarea no puede estar vacía');
      console.log("La tarea está vacía, no se agrega nada");
      return; 
    }
  
    try {
      console.log("Añadiendo tarea:", task);
      await addDoc(collection(db, 'tasks'), {
        name: task,
        createdAt: new Date(),
        complete: false,
      });
  
      Alert.alert('Éxito', 'Tarea añadida correctamente');
      console.log('Tarea añadida con éxito');
      
      setTask('');
    } catch (error) {
      console.error('Error al añadir tarea:', error);
      Alert.alert('Error', 'No se pudo añadir la tarea');
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Introduce tu tarea</Text>
      <TextInput
        style= {globalStyles.input}
        placeholder="Nueva tarea"
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity style={globalStyles.button} onPress={addTask}>
        <Text style={globalStyles.textButton}>Agregar tarea</Text>
      </TouchableOpacity>
    </View>
  );
}
