import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/colors'


const Header = (props) => {

    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 100,
        paddingTop: 36,
        backgroundColor: Colors.secondary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'white',
        fontSize: 36,
        paddingBottom: 20,
        fontFamily: 'monoton-regular'
    }
})

export default Header

