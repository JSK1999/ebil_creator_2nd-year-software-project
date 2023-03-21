import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Table = () => {
  const [rows, setRows] = useState([
    { id: 1, item: '0001  ', description: 'Sunlight', price: 8000, qty: 1 },
    { id: 2, item: 'Item 2', description: 'Description 2', price: 20, qty: 2 },
    { id: 3, item: 'Item 3', description: 'Description 3', price: 30, qty: 3 },
    { id: 4, item: 'Item 3', description: 'Description 3', price: 30, qty: 3 },
    { id: 5, item: 'Item 3', description: 'Description 3', price: 30, qty: 3 },
    { id: 6, item: 'Item 3', description: 'Description 3', price: 30, qty: 3 },
    { id: 7, item: 'Item 3', description: 'Description 3', price: 30, qty: 3 },
    { id: 8, item: 'Item 3', description: 'Description 3', price: 30, qty: 3 },
    { id: 9, item: 'Item 3', description: 'Description 3', price: 30, qty: 3 },
    { id: 10, item: 'Item 3', description: 'Description 3', price: 30, qty: 3 },
    { id: 11, item: 'Item 3', description: 'Description 3', price: 30, qty: 3 },
    { id: 12, item: 'Item 3', description: 'Description 3', price: 30, qty: 3 },
    { id: 13, item: 'Item 3', description: 'Description 3', price: 30, qty: 3 },
    { id: 14, item: 'Item 3', description: 'Description 3', price: 30, qty: 3 },
    { id: 15, item: 'Item 3', description: 'Description 3', price: 30, qty: 3 },
    // Add more rows here
  ]);

  const handleQtyChange = (id, value) => {
    const newRows = rows.map(row => {
      if (row.id === id) {
        return { ...row, qty: value };
      } else {
        return row;
      }
    });
    setRows(newRows);
  };

  const handleDeleteRow = (id) => {
    const newRows = rows.filter(row => row.id !== id);
    setRows(newRows);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold', flex: 1 }}>Item</Text>
        <Text style={{ fontWeight: 'bold', flex: 2 }}>Description</Text>
        <Text style={{ fontWeight: 'bold', flex: 1 }}>Price</Text>
        <Text style={{ fontWeight: 'bold', flex: 1 }}>Qty</Text>
        <Text style={{ fontWeight: 'bold', flex: 1 }}>Amount</Text>
        <Text style={{ fontWeight: 'bold', flex: 1 }}></Text>
      </View>
      {rows.map(row => (
        <View key={row.id} style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
          <TextInput style={{ flex: 1 }} value={row.item} />
          <TextInput style={{ flex: 2 }} value={row.description} />
          <TextInput style={{ flex: 1 }} value={row.price.toString()} />
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
            <TouchableOpacity onPress={() => handleQtyChange(row.id, row.qty - 1)}>
              <Ionicons name="remove-circle-outline" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ marginHorizontal: 10 }}>{row.qty}</Text>
            <TouchableOpacity onPress={() => handleQtyChange(row.id, row.qty + 1)}>
              <Ionicons name="add-circle-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <TextInput style={{ flex: 1 }} value={(row.price * row.qty).toString()} />
          <TouchableOpacity onPress={() => handleDeleteRow(row.id)}>
            <Ionicons name="trash-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default Table;