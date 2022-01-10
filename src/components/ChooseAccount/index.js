import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles';
const ChooseAccount = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../Images/anh12.jpg')}
                style={styles.img} />
            <Text>jacob_w</Text>
            <TouchableOpacity
                style={{
                    marginTop: 6, flexDirection: 'row',
                    height: 40, alignItems: 'center', justifyContent: 'center',
                    backgroundColor: '#3797ef'
                    , borderRadius: 6,marginBottom:30
                }}>
                <Text style={{
                    color: 'white',
                    fontSize: 18, width: '100%',
                    textAlign: 'center'
                }}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.text}>
                    Switch accounts
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ChooseAccount
