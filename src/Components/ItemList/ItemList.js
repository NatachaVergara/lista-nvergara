
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, TouchableOpacity, Button, View, Pressable } from 'react-native';

import ModalDelete from '../ModalDelete';


const ItemList = ({ itemList, setItemList }) => {
    const [id, setId] = useState(null)
    const [nomTarea, setNomTarea] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
    // const [done, setDone] = useState(false);

    const onOpenModal = (dataId, nomTarea) => {
        setModalVisible(!modalVisible)
        setId(dataId)
        setNomTarea(nomTarea)
    }

    const onDelete = (id) => {

        setItemList(itemList.filter(i => i.id !== id))
        setModalVisible(!modalVisible)
    }

    // const onDone = (id) => {
    //     setDone(!done)

    //     //Hecho: Ver como puedo modificar el estilo del texto a tachado cuando la tarea fue realizada 
    //     //Falta que se marquee solo el elemento seleccionado y no todos los elementos <-----
    // }

    return (

        <SafeAreaView>
            <ModalDelete
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                nomTarea={nomTarea}
                onDelete={() => onDelete(id)}
            />
            <FlatList
                data={itemList}
                renderItem={data => (
                    <TouchableOpacity
                        style={styles.inputContainer}>
                        <Text
                            style={
                                [
                                    styles.textInput,
                                    // done && styles.done
                                ]}>
                            {data.item.value}



                        </Text>
                        <View style={styles.buttons} >
                            <Pressable
                                style={styles.btnDelete}
                                onPress={() => onOpenModal(data.item.id, data.item.value)}>
                                <Text>🗑️</Text>
                            </Pressable >
                            {/* 

                            <Pressable
                                style={styles.btnDone}
                                onPress={() => onDone(data.item.id)}>
                                <Text style={styles.hecho}>✔️</Text>
                            </Pressable > */}

                        </View>


                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

export default ItemList


const styles = StyleSheet.create({
    inputContainer: {
        width: '90%',
        marginLeft: 10,
        marginRight: 5,
        marginTop: 20,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffff',
        borderRadius: 10

    },
    textInput: {
        width: 190,
        padding: 20
    },
    buttons: {
        width: 100,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',


    },
    done: {
        textDecorationLine: 'line-through',
        color: 'red'
    },
    btnDelete: {
        width: 'auto',
        padding: 13,
        borderRadius: 10,
        // backgroundColor: 'red'
    },
    btnDone: {
        width: 'auto',
        padding: 13,
        borderRadius: 10,
        // backgroundColor: 'blue'
    },
    hecho: {
        color: 'red'
    }
})