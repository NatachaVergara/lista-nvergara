import React from 'react'
import { StyleSheet, View } from 'react-native'
import Header from '../Components/Header'
import ListContainer from '../Components/ListContainer'

const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <ListContainer />
        </View>
    )
}

export default Home


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        margin: 'auto',
        marginTop: '40%'
    }
});