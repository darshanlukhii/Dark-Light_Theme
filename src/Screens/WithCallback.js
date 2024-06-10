import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const WithCallBack = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', selected: false },
    { id: 2, name: 'Item 2', selected: false },
    { id: 3, name: 'Item 3', selected: false },
  ]);

  // Define a callback function to toggle item selection
  const toggleItemSelection = useCallback(
    (itemId) => {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? { ...item, selected: !item.selected } : item
        )
      );
    },
    [] 
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {items.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => toggleItemSelection(item.id)}
          style={{
            padding: 10,
            marginBottom: 10,
            backgroundColor: item.selected ? 'lightblue' : 'white',
          }}
        >
          <Text>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default WithCallBack;
