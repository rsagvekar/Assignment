import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';

const ContactFormScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  return (
    <View style={{marginHorizontal: 20}}>
      <Text
        style={{
          marginTop: 24,
          fontWeight: '600',
          fontSize: 30,
          color: '#6C63FF',
          textAlign: 'center',
        }}>
        Submit your enquiry
      </Text>

      <View style={{marginTop: 12}}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 20,
            color: '#6C63FF',
          }}>
          Name
        </Text>
        <TextInput
          value={name}
          keyboardType="email-address"
          style={{
            height: 50,
            borderRadius: 12,
            borderWidth: 2,
            paddingHorizontal: 12,
            fontSize: 18,
            color: '#6C63FF',
            borderColor: '#6C63FF',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
          }}
          onChangeText={text => {
            setName(text);
          }}
        />
      </View>
      <View>
        <Text
          style={{
            marginTop: 12,
            fontWeight: '600',
            fontSize: 20,
            color: '#6C63FF',
          }}>
          Email
        </Text>
        <TextInput
          value={email}
          keyboardType="email-address"
          style={{
            height: 50,
            borderRadius: 12,
            borderWidth: 2,
            paddingHorizontal: 12,
            fontSize: 18,
            color: '#6C63FF',
            borderColor: '#6C63FF',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
          }}
          onChangeText={text => {
            setEmail(text);
          }}
        />
      </View>
      <View>
        <Text
          style={{
            marginTop: 12,
            fontWeight: '600',
            fontSize: 20,
            color: '#6C63FF',
          }}>
          Message
        </Text>
        <TextInput
          value={message}
          keyboardType="email-address"
          style={{
            height: 50,
            borderRadius: 12,
            borderWidth: 2,
            paddingHorizontal: 12,
            fontSize: 18,
            color: '#6C63FF',
            borderColor: '#6C63FF',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
          }}
          onChangeText={text => {
            setMessage(text);
          }}
        />
      </View>

      <View style={{alignItems: 'center', marginTop: 36}}>
        <TouchableOpacity
          style={{
            height: 50,
            borderRadius: 24,
            width: '70%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#6C63FF',
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 20,
              color: '#fff',
              textAlign: 'center',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
  },
});

export default ContactFormScreen;
