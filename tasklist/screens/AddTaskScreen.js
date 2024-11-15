import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';


export default function AddTaskScreen() {
  const [task, setTask] = useState('');

  const addTask = () => {
    console.log("añadir tarea")
    console.log(task)

  };

  return (
    <View>
      <Text>Introduce tu tarea</Text>
      <TextInput
        placeholder="Nueva tarea"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Agregar tarea" onPress={addTask} />
    </View>
  );
}
