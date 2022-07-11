
import { SafeAreaView, View, StyleSheet, Text, FlatList, TouchableOpacity, Button } from 'react-native';



const ItemList = ({ itemList, setItemList }) => {

    const onDelete = (id) => {
        setItemList(itemList.filter(i => i.id !== id))
    }

    return (
        <SafeAreaView>
            <FlatList
                data={itemList}
                renderItem={data => (
                    <TouchableOpacity
                        onPress={() => { }} style={styles.inputContainer}>

                        <Text style={styles.textInput}>  {data.item.value}


                        </Text>
                        <Button
                            title={'Borrar'}
                            onPress={() => onDelete(data.item.id)}
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
        width: '80%',
        marginLeft: 20,
        marginRight: 20,
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
        width: 'auto'

    }
})