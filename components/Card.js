import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = (props) => {

    return (
        <View style={{ ...styles.card, ...props.style }}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        //shadow.. only works on ios
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: .26,
        //elevation only works on android
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 12
    }
})

export default Card