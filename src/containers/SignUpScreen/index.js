import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { styles } from '../LoginScreen/styles';
import { commonCSS } from '../../common/commonCss';
import SignUpForm from '../../components/FormRegister'
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignUpScreen = ({ navigation }) => {
    const [invalidEmail, setInvalidEmail] = useState('');
    const handleSubmit = (data) => {
        AsyncStorage.getItem('account_current').then((res) => {
            const account = JSON.parse(res);
            if (account.email === data.email) {
                setInvalidEmail(`email ${account.email} is already in use`);
            } else {
                AsyncStorage.setItem('account_current', JSON.stringify(data));
            }
        }).catch((err) => {
            console.error(err);
        })
    }
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.app}>
                <TouchableOpacity style={{ marginLeft: 10 }}
                    onPress={() => {
                        navigation.goBack();
                    }}>
                    <Icon name="chevron-left" size={40} color="black" />
                </TouchableOpacity>
                <View style={styles.items} >
                    <Text style={{ ...styles.heading, marginBottom: 60 }}>
                        Instagram
                    </Text>
                    <View>
                        <SignUpForm handleSignUp={handleSubmit} />
                       
                    </View>
                    <View style={{ marginTop: 40 }}>
                        <Icon.Button name="facebook"
                            backgroundColor="transparent" color="#3797ef">
                            <Text style={{
                                color: '#3797ef',
                                fontSize: 18,
                            }}>
                                Login in with Facebook
                            </Text>
                        </Icon.Button>
                        <Text style={{ marginTop: 10, color: 'red' }}>
                            {invalidEmail}
                        </Text>
                    </View>
                    <View style={[styles.horizontal, commonCSS.mt10]}>
                        <View style={styles.line}>

                        </View>
                        <View >
                            <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10 }}>
                                OR
                            </Text>
                        </View>
                        <View style={styles.line}>

                        </View>
                    </View>
                    <View style={{ ...styles.horizontal, marginTop: 10, marginBottom: 10 }}>
                        <Text>
                            You have had an account.
                        </Text>
                        <TouchableOpacity style={commonCSS.ml6}
                            onPress={() => {
                                navigation.navigate('Login');
                            }}>
                            <Text style={styles.text}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.horizontal, styles.footer, commonCSS.mt10]}>
                        <Text>
                            Instagram OT Facebook
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default SignUpScreen
