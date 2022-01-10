import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import ChooseAccount from '../../components/ChooseAccount'
import { styles } from '../LoginScreen/styles';
import { commonCSS } from '../../common/commonCss';
import Icon from 'react-native-vector-icons/FontAwesome';
const index = () => {
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
                        <ChooseAccount />
                    </View>
                    <View style={[styles.horizontal, commonCSS.mt10, styles.footer]}>
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
                </View>
            </View>
        </SafeAreaView>
    )
}

export default index
