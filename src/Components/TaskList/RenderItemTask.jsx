import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'

const RenderItemTask = ({item, onPressTask}) =>{
    return(
    <Pressable onPress={() => onPressTask(item)}>
      <View style={item.completed? styles.taskComplete : styles.task}>
        <Text>{item.task}</Text>
      </View>
    </Pressable>
    )
  }

export default RenderItemTask

const styles = StyleSheet.create({  
  task:{
    width:200,
    backgroundColor:'#DBE2EF',
    padding:10,
    marginBottom:15,
    borderRadius:10,
  },
  taskComplete:{
    width:200,
    backgroundColor:'#54B435',
    padding:10,
    marginBottom:15,
    borderRadius:10,
  }
})