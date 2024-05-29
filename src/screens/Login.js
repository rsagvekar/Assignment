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
import {
  loading,
  login,
  saveUserData,
  signUp,
} from '../redux/Actions/CommonActions';

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

  const handleSignup = async () => {
    dispatch(loading(true));
    const payload = {
      name: name,
      email: email,
      password: password,
    };
    await signUp(payload)
      .then(res => {
        if (res.user.uid) {
          const user = auth().currentUser;
          dispatch(saveUserData(user));
          navigation.dispatch(StackActions.replace('Dashboard'));
          dispatch(loading(false));
        }
      })
      .catch(err => {
        console.log(err);
        dispatch(loading(false));
      });
  };

  const handleLogin = async () => {
    dispatch(loading(true));
    const payload = {
      email: email,
      password: password,
    };
    await login(payload)
      .then(res => {
        console.log(res);
        if (res.user.uid) {
          const user = auth().currentUser;
          dispatch(saveUserData(user));
          navigation.dispatch(StackActions.replace('Dashboard'));
          dispatch(loading(false));
        }
      })
      .catch(err => {
        console.log(err);
        dispatch(loading(false));
      });
  };

  return (
    <View style={styles.container}>
      <Spinner visible={data.loading} textContent={'Loading...'} />
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
              style={styles.helloText}>
              Hello
            </Text>
            <Text
              style={styles.welcomeText}>
              Welcome to the assignment app
            </Text>
            <View style={{alignItems: 'center', marginTop: 36}}>
              <TouchableOpacity
                onPress={() => {
                  setAuthType(1);
                }}
                style={styles.loginTouchable}>
                <Text
                  style={styles.loginText}>
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
                style={styles.signUpTouchable}>
                <Text
                  style={styles.signUpText}>
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
              style={styles.backTouchable}>
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
                style={styles.usernameText}>
                Username
              </Text>
              <TextInput
                value={email}
                keyboardType="email-address"
                style={styles.usernameTextInput}
                onChangeText={text => {
                  setEmail(text);
                }}
              />
            </View>
            <View>
              <Text
                style={styles.passwordText}>
                Password
              </Text>
              <TextInput
                value={password}
                keyboardType="email-address"
                secureTextEntry={isSecure}
                style={styles.passwordTextInput}
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
                style={styles.loginTouchable1}>
                <Text
                  style={styles.loginText1}>
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
              style={styles.backTouchable}>
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
                style={styles.nameText}>
                Name
              </Text>
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
              <Text
                style={styles.usernameText1}>
                Username
              </Text>
              <TextInput
                value={email}
                keyboardType="email-address"
                style={styles.usernameTextInput1}
                onChangeText={text => {
                  setEmail(text);
                }}
              />
            </View>
            <View>
              <Text
                style={styles.passwordText1}>
                Password
              </Text>
              <TextInput
                value={password}
                keyboardType="email-address"
                secureTextEntry={isSecure}
                style={styles.passwordTextInput1}
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
                style={styles.signUpTouchable1}>
                <Text
                  style={styles.signupbuttonText}>
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
  helloText: {
    fontWeight: '700',
    fontSize: 36,
    color: '#000',
    textAlign: 'center',
  },
  welcomeText: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
  },
  loginTouchable: {
    height: 50,
    borderRadius: 24,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6C63FF',
  },
  loginText: {
    fontWeight: '600',
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  signUpTouchable: {
    marginTop: 24,
    height: 50,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#6C63FF',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  signUpText: {
    fontWeight: '600',
    fontSize: 20,
    color: '#6C63FF',
    textAlign: 'center',
  },
  backTouchable: {
    height: 36,
    width: 36,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6C63FF',
  },
  usernameText: {
    fontWeight: '600',
    fontSize: 20,
    color: '#6C63FF',
  },
  usernameTextInput: {
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
  },
  passwordText: {
    fontWeight: '600',
    fontSize: 20,
    color: '#6C63FF',
  },
  passwordTextInput: {
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
  loginTouchable1: {
    height: 50,
    borderRadius: 24,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6C63FF',
  },
  loginText1: {
    fontWeight: '600',
    fontSize: 20,
    color: '#fff',
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
  usernameText1: {
    marginTop: 12,
    fontWeight: '600',
    fontSize: 20,
    color: '#6C63FF',
  },
  usernameTextInput1: {
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
  passwordText1: {
    marginTop: 12,
    fontWeight: '600',
    fontSize: 20,
    color: '#6C63FF',
  },
  passwordTextInput1: {
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
  signUpTouchable1: {
    height: 50,
    borderRadius: 24,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6C63FF',
  },
  signupbuttonText: {
    fontWeight: '600',
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },

});

export default Login;
