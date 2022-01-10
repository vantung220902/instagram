import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Field, reduxForm } from 'redux-form';
import { FORM_REGISTER } from '../../constants/form';
import { required, minValue5, isValidEmail } from '../../constants/validate';
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

const SignUpComponent = (props) => {
    const { handleSubmit, submitting, invalid, handleSignUp } = props;
    const [show, setShow] = useState(false);
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState(undefined);
    const [isSubmit, setIsSubmit] = useState(false);
    const isPassword = (value) => {
        setPassword(value);
    }
    const handleText = (e) => {
        if (e !== password) setRePassword('Re password must be match with password')
        else {
            setRePassword(undefined)
            setIsSubmit(true)
        }
    }
    const submit = values => {
        handleSignUp(values);
    }
    return (
        <View style={{
            flex: 1, flexDirection: 'column', margin: 40,
            justifyContent: 'center',
        }}>
            <Field keyboardType="email-address"
                component={renderField} name="email"
                placeholder="Email"
                show={true}
                validate={[required, isValidEmail]}
            />
            <Field keyboardType="default"
                component={renderField} name="fullName"
                placeholder="Full Name"
                show={true}
                validate={[required]}
            />
            <View style={{ position: 'relative' }}>
                <Field keyboardType="default"
                    component={renderField} name="password"
                    show={show}
                    placeholder="Password"
                    onChange={isPassword}
                    validate={[required, minValue5]}
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
            <View style={{ position: 'relative' }}>
                <Field keyboardType="default"
                    component={renderField} name="re-password"
                    onChange={handleText}
                    show={show}
                    placeholder="Re Password"
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
            {rePassword && <Text style={{ color: 'red' }}>{rePassword}</Text>}
            <TouchableOpacity onPress={handleSubmit(submit)}
                style={{
                    marginTop: 6, flexDirection: 'row',
                    height: 40, alignItems: 'center', justifyContent: 'center',
                    backgroundColor: !invalid && isSubmit ? 'blue' : '#9bcbf7', borderRadius: 6
                }}
                disabled={!isSubmit && submitting}>
                <Text style={{
                    color: 'white',
                    fontSize: 18, width: '100%',
                    textAlign: 'center'
                }}>
                    Sign Up
                </Text>
            </TouchableOpacity>

        </View>
    )
}
const SignUpForm = reduxForm({
    form: FORM_REGISTER,
})(SignUpComponent);

export default SignUpForm;
