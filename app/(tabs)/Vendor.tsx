import React from 'react';
import { View, Text, ScrollView, TextInput, Button, StyleSheet } from 'react-native';

export default function Vendor() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* 📊 Dashboard Section */}
      <Text style={styles.header}>Dashboard</Text>
      <View style={styles.box}>
        <Text>Welcome Vendor!</Text>
        <Text>Total Products: 5</Text>
        <Text>Pending Orders: 3</Text>
      </View>

      {/* 📦 Add Product Section */}
      <Text style={styles.header}>Add Product</Text>
      <View style={styles.box}>
        <TextInput placeholder="Product Name" style={styles.input} />
        <TextInput placeholder="Price" keyboardType="numeric" style={styles.input} />
        <TextInput placeholder="Description" multiline style={styles.input} />
        <Button title="Add Product" onPress={() => {}} />
      </View>

      {/* 👤 Account Section */}
      <Text style={styles.header}>Account Info</Text>
      <View style={styles.box}>
        <Text>Name: Vendor Name</Text>
        <Text>Email: vendor@example.com</Text>
        <Button title="Logout" onPress={() => {}} />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20
  },
  box: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 8,
    marginTop: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  }
});
