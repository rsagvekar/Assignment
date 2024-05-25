import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {
  currentDrawerTab,
  currentTab,
  showMoreModal,
} from '../redux/Actions/CommonActions';
import {StackActions, useNavigation} from '@react-navigation/native';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const DrawerModal = () => {
  
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const data = useSelector(state => state.CommonReducer);

  return (
    <Modal
      isVisible={data.showDrawer}
      animationIn={'slideInLeft'}
      animationOut={'slideOutLeft'}
      onBackdropPress={() => {
        dispatch(showMoreModal(false));
      }}
      onBackButtonPress={() => {
        dispatch(showMoreModal(false));
      }}>
      <View
        style={{
          flex: 1,
          marginLeft: -20,
          marginTop: -20,
          marginBottom: -20,
          width: width / 1.5,
          height: height,
          backgroundColor: '#fff',
        }}>
        <TouchableOpacity
          style={{alignItems: 'flex-end', margin: 8}}
          onPress={() => {
            dispatch(showMoreModal(false));
          }}>
          <Image
            source={require('../assets/cross.png')}
            style={{height: 48, width: 48}}
          />
        </TouchableOpacity>
        <View style={{marginHorizontal: 10}}>
          <Text numberOfLines={1} style={{fontSize: 24, fontWeight: '700'}}>
            Hello
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            dispatch(currentTab('home'));
            dispatch(currentDrawerTab('home'));
            if (!data.currentDrawerTab == 'home' && data.currentTab == 'home') {
              navigation.navigate('Dashboard');
            }
          }}
          style={{
            marginHorizontal: 10,
            marginTop: 24,
            height: 60,
            paddingHorizontal: 8,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor:
              data.currentDrawerTab == 'home' ? '#E5E3FF' : '#fff',
          }}>
          {data.currentDrawerTab == 'home' ? (
            <Image
              source={require('../assets/homeA.png')}
              style={{height: 36, width: 36}}
            />
          ) : (
            <Image
              source={require('../assets/homeIA.png')}
              style={{height: 36, width: 36}}
            />
          )}
          <Text
            style={{
              fontSize: 20,
              marginLeft: 8,
              fontWeight: '700',
              color: data.currentDrawerTab == 'home' ? '#6C63FF' : '#787878',
            }}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch(currentDrawerTab('profile'));
            dispatch(showMoreModal(false));
            navigation.navigate('Profile');
          }}
          style={{
            marginHorizontal: 10,
            marginTop: 24,
            height: 60,
            paddingHorizontal: 8,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor:
              data.currentDrawerTab == 'profile' ? '#E5E3FF' : '#fff',
          }}>
          {data.currentDrawerTab == 'profile' ? (
            <Image
              source={require('../assets/userA.png')}
              style={{height: 36, width: 36}}
            />
          ) : (
            <Image
              source={require('../assets/userIA.png')}
              style={{height: 36, width: 36}}
            />
          )}
          <Text
            style={{
              fontSize: 20,
              marginLeft: 8,
              fontWeight: '700',
              color: data.currentDrawerTab == 'profile' ? '#6C63FF' : '#787878',
            }}>
            Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch(currentDrawerTab('settings'));
            dispatch(showMoreModal(false));
            navigation.navigate('Settings');
          }}
          style={{
            marginHorizontal: 10,
            marginTop: 24,
            height: 60,
            paddingHorizontal: 8,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor:
              data.currentDrawerTab == 'settings' ? '#E5E3FF' : '#fff',
          }}>
          {data.currentDrawerTab == 'settings' ? (
            <Image
              source={require('../assets/settingsA.png')}
              style={{height: 36, width: 36}}
            />
          ) : (
            <Image
              source={require('../assets/settingsIA.png')}
              style={{height: 36, width: 36}}
            />
          )}

          <Text
            style={{
              fontSize: 20,
              marginLeft: 8,
              fontWeight: '700',
              color:
                data.currentDrawerTab == 'settings' ? '#6C63FF' : '#787878',
            }}>
            Settings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch(currentDrawerTab('userList'));
            dispatch(showMoreModal(false));
            navigation.navigate('UserSignupList');
          }}
          style={{
            marginHorizontal: 10,
            marginTop: 24,
            height: 60,
            paddingHorizontal: 8,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor:
              data.currentDrawerTab == 'userList' ? '#E5E3FF' : '#fff',
          }}>
          {data.currentDrawerTab == 'userList' ? (
            <Image
              source={require('../assets/listA.png')}
              style={{height: 36, width: 36}}
            />
          ) : (
            <Image
              source={require('../assets/listIA.png')}
              style={{height: 36, width: 36}}
            />
          )}

          <Text
            style={{
              fontSize: 20,
              marginLeft: 8,
              fontWeight: '700',
              color:
                data.currentDrawerTab == 'userList' ? '#6C63FF' : '#787878',
            }}>
            User List
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch(showMoreModal(false));
            auth()
              .signOut()
              .then(function () {
                navigation.dispatch(StackActions.replace('Login'))
                // Sign-out successful.
              })
              .catch(function (error) {
                // An error happened
              });
          }}
          style={{
            marginHorizontal: 10,
            marginTop: 24,
            height: 60,
            paddingHorizontal: 8,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor:
              data.currentDrawerTab == 'userList' ? '#E5E3FF' : '#fff',
          }}>
          <Image
            source={require('../assets/logout.png')}
            style={{height: 36, width: 36}}
          />

          <Text
            style={{
              fontSize: 20,
              marginLeft: 8,
              fontWeight: '700',
              color:
                data.currentDrawerTab == 'userList' ? '#6C63FF' : '#787878',
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({});

export default DrawerModal;
