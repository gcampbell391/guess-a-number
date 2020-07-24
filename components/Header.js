import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


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
        backgroundColor: '#264653',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'white',
        fontSize: 50,
        paddingBottom: 20
    }
})

export default Header

