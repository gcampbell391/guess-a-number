import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/colors'

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text>Copyright © Gene Campbell III 2020</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: Colors.fourth,
        height: 30,
        alignItems: 'center',
        paddingTop: 5
    }
})

export default Footer