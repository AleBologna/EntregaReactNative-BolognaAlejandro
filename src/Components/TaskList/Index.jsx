import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import RenderItemTask from './RenderItemTask'

const TaskList = ({list,onPressTask}) => {
  return (
    <View style={styles.view2}>
        <FlatList
        data = {list}
        keyExtractor={item => item.id}
        renderItem={({item}) => RenderItemTask({item,onPressTask})}
        />
    </View>
  )
}

export default TaskList

const styles = StyleSheet.create({
    view2:{
        height: '85%',
        width:'100%',
        backgroundColor:'#3F72AF',
        paddingVertical:20,
        alignItems:'center',
      },
      
})