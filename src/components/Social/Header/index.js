import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons';
const Header = (props) => {
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity>
                    <Ionicons name="camera-outline" size={36} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.heading}>
                    Instagram
                </Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Ionicons name="send-outline" size={36} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header
