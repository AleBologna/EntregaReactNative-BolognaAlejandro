import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const TopBar = ({input, setInput, onAddTask}) => {
  return (
    <View style={styles.view1}>
        <TextInput 
        placeholder="Agregar tarea" 
        placeholderTextColor="#DBE2EF"
        style={styles.input}
        value={input}
        onChangeText={setInput}
        />
        <TouchableOpacity 
        style={styles.btn}
        onPress={onAddTask}
        >
          <Text>AGREGAR</Text>
        </TouchableOpacity>
      </View>
  )
}

export default TopBar

const styles = StyleSheet.create({
    view1:{
        height: '15%',
        width:'100%',
        backgroundColor:'#112D4E',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-end',
        paddingBottom:10,
      },
      input:{
        width:150,
        borderBottomColor:'#3F72AF',
        borderBottomWidth:3,
        margin:10,
        color:'#fff',
      },
      btn:{
        width:100,
        height:30,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center', 
        backgroundColor:'#DBE2EF',
        paddingHorizontal:2,
        marginBottom:10,
      },

})