import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { styles } from './styles';
import { commonCSS } from '../../common/commonCss';
import LoginForm from '../../components/FormLogin'
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginScreen = ({ navigation }) => {
    AsyncStorage.getItem('account_current').then((item) => {
        if (item) {
            navigation.navigate('Social');
        }
    });
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.app}>
                <View style={{ marginLeft: 10 }}>
                    <Icon name="chevron-left" size={40} color="black" />
                </View>
                <View style={styles.items} >
                    <Text style={styles.heading}>
                        Instagram
                    </Text>
                    <View>
                        <LoginForm />
                    </View>
                    <View >
                        <Icon.Button name="facebook"
                            backgroundColor="transparent" color="#3797ef">
                            <Text style={{
                                color: '#3797ef',
                                fontSize: 18,
                            }}>
                                Login in with Facebook
                            </Text>
                        </Icon.Button>
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
                    <View style={[styles.horizontal, styles.mt40]}>
                        <Text>
                            Don't have an account ?
                        </Text>
                        <TouchableOpacity style={commonCSS.ml4}
                            onPress={() => {
                                navigation.navigate('SignUp');
                            }}>
                            <Text style={styles.text}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.horizontal, commonCSS.mt10, styles.footer]}>
                        <Text>
                            Instagram OT Facebook
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen
