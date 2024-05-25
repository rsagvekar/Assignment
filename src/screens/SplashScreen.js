import {StackActions, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, View, Image, Text, ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth';
import { currentDrawerTab, currentTab, saveUserData } from '../redux/Actions/CommonActions';
import { useDispatch } from 'react-redux';

const SplashScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentTab('home'));
    dispatch(currentDrawerTab('home'));
    setTimeout(() => {
      const user = auth().currentUser;
      dispatch(saveUserData(user));
      auth().currentUser
      ? navigation.dispatch(StackActions.replace('Dashboard'))
      : navigation.dispatch(StackActions.replace('Login'))
    }, 3000);
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{}}>
        <Image
          source={require('../assets/a.png')}
          style={{height: 400, width: 400}}
        />
      </View>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SplashScreen;
