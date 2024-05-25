import {StackActions, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Spinner from 'react-native-loading-spinner-overlay';
import {login, saveUserData, signUp} from '../redux/Actions/CommonActions';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const Login = () => {
  const navigation = useNavigation();
  const data = useSelector(state => state.CommonReducer);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [authType, setAuthType] = useState(0);
  const [isSecure, setIsSecure] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    const payload = {
      name: name,
      email: email,
      password: password,
    };
    await signUp(payload)
      .then(res => {
        if (res) {
          const user = auth().currentUser;
          dispatch(saveUserData(user));
          navigation.dispatch(StackActions.replace('Dashboard'));
        }
      })
      .catch(err => {});
  };

  const handleLogin = async () => {
    const payload = {
      email: email,
      password: password,
    };
    await login(payload)
      .then(res => {
        const user = auth().currentUser;
        dispatch(saveUserData(user));
        navigation.dispatch(StackActions.replace('Dashboard'));
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <Spinner visible={loading} textContent={'Loading...'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {authType == 0 ? (
          <>
            <View style={{}}>
              <Image
                source={require('../assets/login.png')}
                style={{width: width, height: width}}
                resizeMode="contain"
              />
            </View>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 36,
                color: '#000',
                textAlign: 'center',
              }}>
              Hello
            </Text>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 18,
                color: '#000',
                textAlign: 'center',
              }}>
              Welcome to the assignment app
            </Text>
            <View style={{alignItems: 'center', marginTop: 36}}>
              <TouchableOpacity
                onPress={() => {
                  setAuthType(1);
                }}
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
                  Login
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAuthType(2);
                  setName('');
                  setEmail('');
                  setPassword('');
                }}
                style={{
                  marginTop: 24,
                  height: 50,
                  borderRadius: 24,
                  borderWidth: 2,
                  borderColor: '#6C63FF',
                  width: '70%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#fff',
                }}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 20,
                    color: '#6C63FF',
                    textAlign: 'center',
                  }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </>
        ) : authType == 1 ? (
          <>
            <TouchableOpacity
              onPress={() => {
                setAuthType(0);
              }}
              style={{
                height: 36,
                width: 36,
                borderRadius: 24,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#6C63FF',
              }}>
              <Image
                source={require('../assets/back.png')}
                style={{height: 24, width: 24}}
              />
            </TouchableOpacity>
            <View style={{}}>
              <Image
                source={require('../assets/login1.png')}
                style={{width: width, height: width}}
                resizeMode="contain"
              />
            </View>

            <View>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 20,
                  color: '#6C63FF',
                }}>
                Username
              </Text>
              <TextInput
                value={email}
                keyboardType="email-address"
                style={{
                  // marginTop: 4,
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
                  fontWeight: '600',
                  fontSize: 20,
                  color: '#6C63FF',
                }}>
                Password
              </Text>
              <TextInput
                value={password}
                keyboardType="email-address"
                secureTextEntry={isSecure}
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
                  setPassword(text);
                }}
              />
            </View>

            <View style={{alignItems: 'center', marginTop: 36}}>
              <TouchableOpacity
                onPress={() => {
                  handleLogin();
                }}
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
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
            <TouchableOpacity
              onPress={() => {
                setAuthType(0);
              }}
              style={{
                height: 36,
                width: 36,
                borderRadius: 24,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#6C63FF',
              }}>
              <Image
                source={require('../assets/back.png')}
                style={{height: 24, width: 24}}
              />
            </TouchableOpacity>
            <View style={{}}>
              <Image
                source={require('../assets/signup.png')}
                style={{width: width, height: width}}
                resizeMode="contain"
              />
            </View>
            <View>
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
                Username
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
                Password
              </Text>
              <TextInput
                value={password}
                keyboardType="email-address"
                secureTextEntry={isSecure}
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
                  setPassword(text);
                }}
              />
            </View>

            <View style={{alignItems: 'center', marginTop: 36}}>
              <TouchableOpacity
                onPress={() => {
                  handleSignup();
                }}
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
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
  },
});

export default Login;
