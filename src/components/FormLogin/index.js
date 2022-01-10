import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Field, reduxForm } from 'redux-form';
import { FORM_LOGIN } from '../../constants/form';
import { required, minValue5 } from '../../constants/validate';
import Icon from 'react-native-vector-icons/FontAwesome';

const renderField = ({ keyboardType, placeholder,
    meta: { touched, error, warning, asyncValidating },
    input: { onChange, ...resInput }, show }) => {
    return (
        <>
            <View style={{
                flexDirection: 'row', height: 50,
                alignItems: 'center', width: '100%'
            }}>
                <TextInput style={{
                    borderColor: 'steelblue', borderWidth: 1, height: 37, padding: 5, width: '100%'
                }} keyboardType={keyboardType} placeholder={placeholder}
                    onChangeText={onChange} {...resInput}
                    secureTextEntry={!show} />

            </View>
            {touched && ((error && <Text style={{ color: 'red' }}>{error}</Text>) || (
                warning && <Text style={{ color: 'yellow' }}>{warning}</Text>) ||
                asyncValidating && <Text style={{ color: 'orange' }}>Validating...</Text>)}
        </>
    )
}
const submit = values => {
    alert(`Validation success. Values =~${JSON.stringify(values)}`);
}
const LoginComponent = (props) => {
    const { handleSubmit, invalid, submitting } = props;
    const [show, setShow] = useState(false);
    return (
        <View style={{
            flex: 1, flexDirection: 'column', margin: 40,
            justifyContent: 'center',
        }}>
            <Field keyboardType="default" label="UserName"
                component={renderField} name="userName"
                placeholder="User Name"
               
                show={true}
            />
            <View style={{ position: 'relative' }}>
                <Field keyboardType="default" label="Password"
                    component={renderField} name="password"
                    show={show}
                    placeholder="Password" validate={[required, minValue5]}
                />
                <TouchableOpacity style={{
                    width: 24,
                    height: 24,
                    position: 'absolute',
                    right: 16,
                    top: 12,
                }}
                    onPress={() => {
                        setShow(prev => !prev);
                    }} >
                    <Icon
                        name={show ? 'eye'
                            : 'eye-slash'}
                        size={25} />
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginTop: 4,
                marginBottom: 10,

            }}>
                <View>
                    <Text style={{
                        color: 'blue',
                        fontSize: 14, width: '100%', textAlign: 'center',

                    }}>
                        Forgot Password ?
                    </Text>
                </View>

            </View>
            <TouchableOpacity onPress={handleSubmit(submit)}
                style={{
                    marginTop: 6, flexDirection: 'row',
                    height: 40, alignItems: 'center', justifyContent: 'center',
                    backgroundColor: !invalid ? '#3797ef' : '#9bcbf7'
                    , borderRadius: 6
                }}

                disabled={ submitting}>
                <Text style={{
                    color: 'white',
                    fontSize: 18, width: '100%',
                    textAlign: 'center'
                }}>
                    Login
                </Text>
            </TouchableOpacity>

        </View>
    )
}
const LoginForm = reduxForm({
    form: FORM_LOGIN,
})(LoginComponent);

export default LoginForm;
