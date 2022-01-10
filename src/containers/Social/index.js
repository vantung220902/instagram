import React from 'react'
import { View, StyleSheet } from 'react-native'
import Header from '../../components/Social/Header'
import ListStories from '../../components/Social/ListStories'
const Social = () => {
    return (
        <View style={styles.container}>
            <Header />
            <ListStories/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    }
})
export default Social
