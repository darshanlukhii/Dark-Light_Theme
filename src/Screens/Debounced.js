import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';

const Debounced = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');

  let debounceTimer;

  const handleSearch = value => {
    setSearchQuery(value);
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      setDebouncedSearchQuery(value);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={searchQuery}
        onChangeText={handleSearch}
        placeholder="Search..."
        placeholderTextColor="#888"
      />
      <View style={styles.resultsContainer}>
        <Text style={styles.label}>Search Query:</Text>
        <Text style={styles.value}>{searchQuery}</Text>
        <Text style={styles.label}>Debounced Value:</Text>
        <Text style={styles.value}>{debouncedSearchQuery}</Text>
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
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  resultsContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  label: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    color: '#555',
    fontSize: 18,
    marginBottom: 20,
  },
});

export default Debounced;
