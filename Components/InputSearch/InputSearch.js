import { Button, TextInput, View, StyleSheet } from 'react-native'

const InputSearch = ({ textItem, setTextItem, setItemList }) => {
    const onHandleChangeText = (text) => setTextItem(text)

    const onHandlePressAddItem = () => {
        setItemList(currentItems => [...currentItems, { id: Date.now(), value: textItem }])
        setTextItem('')
    }

    return (
        <View style={styles.inputContainer} >
            <TextInput
                placeholder={'Escriba Aqui'}
                value={textItem}
                onChangeText={onHandleChangeText}
                style={styles.textInput}

            />
            <Button
                style={styles.button}
                title='+'
                onPress={onHandlePressAddItem}
                disabled={textItem.length < 1 ? true : false}

            />
        </View>
    )
}

export default InputSearch

const styles = StyleSheet.create({
    inputContainer: {
        width: '90%',
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textInput: {
        width: '80%',
        padding: 20,
        margin: 10,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 20
    }, button: {
        backgroundColor: 'red'
    }


})

