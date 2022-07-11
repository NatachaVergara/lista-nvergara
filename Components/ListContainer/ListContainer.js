
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import InputSearch from '../InputSearch/InputSearch';
import ItemList from '../ItemList/ItemList';

const ListContainer = () => {
    const [textItem, setTextItem] = useState('')
    const [itemList, setItemList] = useState([])

    return (

        <View style={styles.container}>
            
            <InputSearch
                textItem={textItem}
                setTextItem={setTextItem}
                setItemList={setItemList}
            />

            <ItemList  itemList={itemList} setItemList={setItemList} />


        </View>
    )
}

export default ListContainer


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        margin: 'auto',
        marginTop: '40%'
    }
});