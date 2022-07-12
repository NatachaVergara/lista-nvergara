
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import ModalDelete from '../ModalDelete';


const ItemList = ({ itemList, setItemList }) => {
    const [id, setId] = useState(null)
    const [nomTarea, setNomTarea] = useState('')
    const [modalVisible, setModalVisible] = useState(false);

    const onOpenModal = (dataId, nomTarea) => {
        setModalVisible(!modalVisible)
        setId(dataId)
        setNomTarea(nomTarea)
    }

    const onDelete = (id) => {
        setItemList(itemList.filter(i => i.id !== id))
        setModalVisible(!modalVisible)
    }

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
                        onPress={() => { }} style={styles.inputContainer}>
                        <Text
                            style={styles.textInput}>
                            {data.item.value}
                        </Text>
                        <Button
                            title={'Borrar'}
                            onPress={() => onOpenModal(data.item.id, data.item.value)}
                        />
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
        borderWidth: 2,
        borderStyle: 'solid',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    textInput: {
        color: 'red',
        width: 'auto',
    }
})