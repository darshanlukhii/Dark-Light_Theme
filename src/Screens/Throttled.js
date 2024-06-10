import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

const Throttled = () => {
  const [requestCount, setRequestCount] = useState(0);
  const [throttledRequestCount, setThrottledRequestCount] = useState(0);

  let throttleTimer;
  const throttleDelay = 1000;

  const sendRequest = () => {
    setRequestCount(prevCount => prevCount + 1);
  };

  const throttledSendRequest = () => {
    clearTimeout(throttleTimer);

    throttleTimer = setTimeout(() => {
      setThrottledRequestCount(prevCount => prevCount + 1);
    }, throttleDelay);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Requests sent: <Text style={styles.value}>{requestCount}</Text></Text>
      <Text style={styles.label}>Throttled requests sent: <Text style={styles.value}>{throttledRequestCount}</Text></Text>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button title="Send Request" onPress={sendRequest} color="#007bff" />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Throttled Send Request" onPress={throttledSendRequest} color="#28a745" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  value: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#555',
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default Throttled;
