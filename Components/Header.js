import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (

    <Text style={styles.titulo}>Lista de tareas</Text>
  
  )
}

export default Header

const styles = StyleSheet.create({
    titulo: {
        width: 'auto',
        margin: 20,
        padding: 20,
        textAlign: 'center',
        fontSize:20
     

}})