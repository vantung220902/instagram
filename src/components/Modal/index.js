import React, { useState } from 'react';
import { Text, Dimensions, StyleSheet, TextInput } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

const screenWidth = Dimensions.get('window').width;
export default function MyModal({ isOpen, onClose, onSubmit, item, onUpdate }) {
    const [newName, setName] = useState('');
    const [newDescription, setDescription] = useState('');
    const [newImage, setImage] = useState('');
    return (
        <Modal
            style={styles.modal}
            position='center' backdrop={true}
            isOpen={isOpen}
            onClosed={() => {
                onClose();
            }}>
            <Text style={styles.text}>

                New Post's Information
            </Text>
            <TextInput style={styles.input}
                placeholder="Enter new Post Title"
                onChangeText={(text) => {
                    setName(text)
                }}
                defaultValue={item ? item.name : newName}
            />
            <TextInput style={styles.input}
                placeholder="Enter new Post Body"
                onChangeText={(text) => {
                    setDescription(text)
                }}
                defaultValue={item ? item.description : newDescription}
            />
            <TextInput style={styles.input}
                placeholder="Enter new Img "
                onChangeText={(text) => {
                    setImage(text)
                }}
                defaultValue={item ? item.uri : newImage}
            />

            <Button style={styles.button}
                containerStyle={
                    styles.containerStyle
                }
                onPress={(event) => {
                    if (newName.length === 0
                        || newDescription.length === 0) {
                        alert('You must enter information for post')
                        return;
                    }
                    const newPost = {

                        name: newName !== '' ? newName : item.name,
                        description: newDescription,
                        uri: newImage !== '' ? `https://res.cloudinary.com/the-roap-trip/image/upload/${newImage}` : item.uri
                    }
                    onClose();
                    if (item) {
                        onUpdate(newPost, item.id);
                    } else {
                        onSubmit(newPost);
                    }
                    setName('');
                    setDescription('');
                }}>
                {item ? 'Update' : 'Save'}
            </Button>
        </Modal>
    )
}

const styles = StyleSheet.create({

    modal: {
        justifyContent: 'center',
        shadowRadius: 10,
        width: screenWidth - 80,
        height: 400,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40,
    },
    input: {
        height: 40,
        borderBottomColor: 'gray',
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10,
        borderBottomWidth: 1
    },
    button: {
        fontSize: 18,
        color: 'white',
    },
    containerStyle: {
        padding: 8,
        marginLeft: 70,
        marginRight: 70,
        height: 40,
        borderRadius: 6,
        backgroundColor: 'mediumseagreen'
    }
});
