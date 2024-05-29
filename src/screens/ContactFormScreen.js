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
      <Text style={styles.submitText}>Submit your enquiry</Text>

      <View style={{marginTop: 12}}>
        <Text style={styles.nameText}>Name</Text>
        <TextInput
          value={name}
          keyboardType="email-address"
          style={styles.nameTextInput}
          onChangeText={text => {
            setName(text);
          }}
        />
      </View>
      <View>
        <Text style={styles.emailText}>Email</Text>
        <TextInput
          value={email}
          keyboardType="email-address"
          style={styles.emailTextInput}
          onChangeText={text => {
            setEmail(text);
          }}
        />
      </View>
      <View>
        <Text style={styles.messageText}>Message</Text>
        <TextInput
          value={message}
          keyboardType="email-address"
          style={styles.messageTextInput}
          onChangeText={text => {
            setMessage(text);
          }}
        />
      </View>

      <View style={{alignItems: 'center', marginTop: 36}}>
        <TouchableOpacity style={styles.submitTouchable}>
          <Text style={styles.submitButtonText}>Submit</Text>
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
  submitText: {
    marginTop: 24,
    fontWeight: '600',
    fontSize: 30,
    color: '#6C63FF',
    textAlign: 'center',
  },
  nameText: {
    fontWeight: '600',
    fontSize: 20,
    color: '#6C63FF',
  },
  nameTextInput: {
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
  },
  emailText: {
    marginTop: 12,
    fontWeight: '600',
    fontSize: 20,
    color: '#6C63FF',
  },
  emailTextInput: {
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
  },
  messageText: {
    marginTop: 12,
    fontWeight: '600',
    fontSize: 20,
    color: '#6C63FF',
  },
  messageTextInput: {
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
  },
  submitTouchable: {
    height: 50,
    borderRadius: 24,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6C63FF',
  },
  submitButtonText: {
    fontWeight: '600',
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
});

export default ContactFormScreen;
