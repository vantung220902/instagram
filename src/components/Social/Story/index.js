import React, { memo } from 'react'
import { Text, View, Image } from 'react-native'

const Story = ({ item }) => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.item}>
                    <Image source={{ url: item.uri }} resizeMode='contain' />
                </View>
            </View>
            <Text>
                {item.name}
            </Text>
        </>
    )
}

export default memo(Story)
