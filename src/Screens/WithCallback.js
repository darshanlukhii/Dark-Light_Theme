import React, { useState, useCallback } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const WithCallBack = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const handleButtonClick = useCallback(() => {
    console.log('11111');
    setCount(prevCount => prevCount + 1);
  }, []);

  const handleTextChange = useCallback(text => {
    console.log('2222');
    setText(text);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Button title="Increment Count" onPress={handleButtonClick} />
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={handleTextChange}
        placeholder="Type something..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default WithCallBack;
