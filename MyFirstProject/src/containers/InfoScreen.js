import React, { useState } from 'react';
import { Text, TextInput, View, Button, StyleSheet } from 'react-native';


function InfoScreen({navigation}) {
	const [text, onChangeText] = React.useState("Useless Text");
 	 const [number, onChangeNumber] = React.useState(null);

	  const styles = StyleSheet.create({
		input: {
		  height: 40,
		  margin: 12,
		  borderWidth: 1,
		  padding: 10,
		},
	  });

	return (
	  <View style={{ 
		backgroundColor: '#D66851 ',
		flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<Text>Busca aquí a tus usuarios por edad</Text>
		<Text/>
		<Text>Edad</Text>
		<TextInput
        style={styles.input}
		onChangeText={x => onChangeNumber(x)}
        placeholder="aqui..."
        keyboardType="numeric"
      />
		<Button
        title="Buscar"
        onPress={() => navigation.navigate('Details', {edad: number})}
        color="red"
      />
	  </View>
	);


}
export default InfoScreen;