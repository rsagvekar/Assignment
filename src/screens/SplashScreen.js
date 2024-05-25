import {StackActions, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, View, Image, Text, ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
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
