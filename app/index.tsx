import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, FlatList, Modal, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'


const index = () => {
  const [inputVal, setInputVal] = useState('');
  const [list, setList] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [updateInput, setUpdateInput] = useState('');
  const [index, setIndex] = useState(0);



  // render addTodo function
  const addTodo = () => {
    console.log(inputVal);
    if(inputVal === ""){
      alert("Enter a value")      
    }else{
      list.push(inputVal)
      setList([...list])
      setInputVal ("")
    }
  }

// delete todo function
  const deleteBtn = (index: number) => {
    console.log(deleteBtn, index);
    list.splice(index, 1);
    setList([...list]);
  }

  //edit todo function
  const editBtn = (index: number) => {
    console.log(editBtn, index);
    list.splice(index , 1 , updateInput)
    setList([...list])
    setModalVisible(false)
  }



  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.todoTitle}>Todo App</Text>
      <TextInput
        style={styles.input}
        onChangeText={setInputVal}
        value={inputVal}
        placeholder='Enter Todo '
      />
      <TouchableOpacity style={styles.button} onPress={addTodo}>
        <Text>Click</Text>
      </TouchableOpacity>

{
  list.length > 0 ? <FlatList
  style={styles.flat}
  data={list}
  renderItem={({item, index}) =>{ 
  return  <View style={styles.item}>
  <Text style={styles.title}>{item}</Text>
  <View>
      <TouchableOpacity style={styles.ListBtn} onPress={() => {
              setIndex(index)
              setModalVisible(true)
            }}>
        <Text>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ListBtn} onPress={() => deleteBtn(index)}>
        <Text>Delete</Text>
      </TouchableOpacity>
  </View>
</View>
}
}
  keyExtractor={(item, index) => index.toString()}
/>: <Text style={styles.notFound}>No Todo...</Text>
}

<View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Update Todo!</Text>
              <TextInput
                style={styles.updateInput}
                onChangeText={setUpdateInput}
                value={updateInput}
              />
              <Pressable
                style={[styles.modalBtn, styles.buttonClose]}
                onPress={() => editBtn(index)}>
                <Text style={styles.textStyle}>Update Todo</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008b8b"
  },
todoTitle: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  input: {
    height: 40,
    marginHorizontal: 30,
    marginVertical : 20,
    borderWidth: 1,
    padding: 10,
    borderColor: '#add8e6',
    color: '#ffffff'
  },
  updateInput: {
    margin: 20,
    width: 200,
    borderWidth: 1,
    borderColor: '#add8e6',
    color: '#fffff',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#add8e6',
    padding: 10,
    marginHorizontal: 170,
    borderRadius: 25,
  },
  flat: {
    marginTop: 20,
  },
  item: {
    backgroundColor: '#5f9ea0',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 20,
  },
  title: {
    fontSize: 32,
    color: "#ffffff",
    fontWeight: 'bold',
    textAlign: "center"
  },
  notFound: {
    fontSize: 50,
    marginVertical: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ffffff',

  },
  ListBtn: {
    alignItems: 'center',
    backgroundColor: '#add8e6',
    padding: 10,
    margin: 5,
    borderRadius: 25,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalBtn: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})

export default index