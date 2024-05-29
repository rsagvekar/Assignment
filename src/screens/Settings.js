import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ToggleSwitch from 'toggle-switch-react-native';

import {currentDrawerTab, currentTab} from '../redux/Actions/CommonActions';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const Settings = () => {
  const user = useSelector(state => state?.user?.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [toggle, setToggle] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{paddingHorizontal: 20}}>
        <View>
          <TouchableOpacity
            onPress={() => {
              dispatch(currentTab('home'));
              dispatch(currentDrawerTab('home'));
              navigation.goBack();
            }}
            style={{
              // position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 36,
              marginTop: 20,
              // marginLeft: 20,
              // top: 10,
              // left: 10,
              height: 48,
              width: 48,
              borderWidth: 2,
              borderColor: '#6C63FF',
              backgroundColor: '#6C63FF',
            }}>
            <Image
              source={require('../assets/back.png')}
              style={{height: 30, width: 30}}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            marginTop: 12,
            fontWeight: '600',
            fontSize: 28,
            color: '#6C63FF',
          }}>
          Settings
        </Text>
        <View style={{marginTop: 12}}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 20,
              color: '#6C63FF',
            }}>
            General
          </Text>
          <View
            style={{
              // height: 80,
              borderRadius: 12,
              borderWidth: 1,
              fontSize: 18,
              padding: 12,
              color: '#6C63FF',
              borderColor: '#6C63FF',
              // alignItems: 'center',
              // justifyContent: 'center',
              backgroundColor: '#fff',
              // flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../assets/thumbsup.png')}
                style={{height: 36, width: 36}}
              />
              <Text style={{fontSize: 20, fontWeight: '600', marginLeft: 8}}>
                Leave Feedback
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../assets/star.png')}
                style={{height: 36, width: 36}}
              />
              <Text style={{fontSize: 20, fontWeight: '600', marginLeft: 8}}>
                Rate us!
              </Text>
            </TouchableOpacity>
          </View>

          <Text
            style={{
              marginTop: 12,
              fontWeight: '600',
              fontSize: 20,
              color: '#6C63FF',
            }}>
            Notifications
          </Text>
          <View style={styles.notificationToggle}>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <ToggleSwitch
                isOn={toggle}
                onColor="#6C63FF"
                offColor="#787878"
                // label="Example label"
                labelStyle={{color: 'black', fontWeight: '900'}}
                size="small"
                onToggle={isOn => setToggle(isOn)}
              />
              <Text style={{fontSize: 20, fontWeight: '600', marginLeft: 8}}>
                Turn {toggle ? 'off' : 'on'} notifications
              </Text>
            </TouchableOpacity>
          </View>

          <Text
            style={{
              marginTop: 12,
              fontWeight: '600',
              fontSize: 20,
              color: '#6C63FF',
            }}>
            Theme
          </Text>
          <View
            style={{
              // height: 80,
              borderRadius: 12,
              borderWidth: 1,
              fontSize: 18,
              padding: 12,
              color: '#6C63FF',
              borderColor: '#6C63FF',
              // alignItems: 'center',
              // justifyContent: 'center',
              backgroundColor: '#fff',
              // flexDirection: 'row',
            }}>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <ToggleSwitch
                isOn={darkTheme}
                onColor="#6C63FF"
                offColor="#787878"
                // label="Example label"
                labelStyle={{color: 'black', fontWeight: '900'}}
                size="small"
                onToggle={isOn => setDarkTheme(isOn)}
              />
              <Text style={{fontSize: 20, fontWeight: '600', marginLeft: 8}}>
                Turn {darkTheme ? 'off' : 'on'} dark theme
              </Text>
            </TouchableOpacity>
          </View>

          <Text
            style={{
              marginTop: 12,
              fontWeight: '600',
              fontSize: 20,
              color: '#6C63FF',
            }}>
            Legal
          </Text>
          <View style={styles.themeToggle}>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../assets/doc1.png')}
                style={{height: 36, width: 36}}
              />
              <Text style={{fontSize: 20, fontWeight: '600', marginLeft: 8}}>
                Data Privacy Terms
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 12,
              }}>
              <Image
                source={require('../assets/doc2.png')}
                style={{height: 36, width: 36}}
              />
              <Text style={{fontSize: 20, fontWeight: '600', marginLeft: 8}}>
                Terms and Conditions
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {/* <Text>Email: {user ? user?.email : 'No user logged in'}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notificationToggle: {
    // height: 80,
    borderRadius: 12,
    borderWidth: 1,
    fontSize: 18,
    padding: 12,
    color: '#6C63FF',
    borderColor: '#6C63FF',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#fff',
    // flexDirection: 'row',
  },
  themeToggle: {
    // height: 80,
    borderRadius: 12,
    borderWidth: 1,
    fontSize: 18,
    padding: 12,
    color: '#6C63FF',
    borderColor: '#6C63FF',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#fff',
    // flexDirection: 'row',
  },
});

export default Settings;
