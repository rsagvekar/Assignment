import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import DrawerModal from '../components/DrawerModal';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  currentDrawerTab,
  currentTab,
  showMoreModal,
} from '../redux/Actions/CommonActions';
import Homescreen from './Homescreen';
import ContactFormScreen from './ContactFormScreen';
import News from './News';

const DashboardScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const data = useSelector(state => state.CommonReducer);
  return (
    <View style={styles.container}>
      {/* Header Component */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            dispatch(showMoreModal(true));
          }}>
          <Image
            source={require('../assets/menu.png')}
            style={{height: 24, width: 24}}
          />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{flex: 1, backgroundColor: '#fff'}}>
        <View>
          {data.currentTab == 'home' ? (
            <Homescreen />
          ) : // <Text>Hello</Text>
          data.currentTab == 'news' ? (
            <News />
          ) : (
            <ContactFormScreen />
          )}
        </View>
      </ScrollView>
      {/* bottom tabs */}
      <View style={styles.bottomTabContainer}>
        <TouchableOpacity
          onPress={() => {
            dispatch(currentTab('home'));
            dispatch(currentDrawerTab('home'));
          }}
          style={{flex: 1, alignItems: 'center'}}>
          {data.currentTab == 'home' ? (
            <Image
              source={require('../assets/homeA.png')}
              style={{height: 48, width: 48}}
            />
          ) : (
            <Image
              source={require('../assets/homeIA.png')}
              style={{height: 36, width: 36}}
            />
          )}
          <Text
            style={[
              styles.TabText,
              {color: data.currentTab == 'home' ? '#6C63FF' : '#787878'},
            ]}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch(currentTab('news'));
          }}
          style={{flex: 1, alignItems: 'center'}}>
          {data.currentTab == 'news' ? (
            <Image
              source={require('../assets/newsA.png')}
              style={{height: 48, width: 48}}
            />
          ) : (
            <Image
              source={require('../assets/newsIA.png')}
              style={{height: 36, width: 36}}
            />
          )}
          <Text
            style={[
              styles.TabText,
              {color: data.currentTab == 'home' ? '#6C63FF' : '#787878'},
            ]}>
            News
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch(currentTab('contact'));
          }}
          style={{flex: 1, alignItems: 'center'}}>
          {data.currentTab == 'contact' ? (
            <Image
              source={require('../assets/contactA.png')}
              style={{height: 48, width: 48}}
            />
          ) : (
            <Image
              source={require('../assets/contactIA.png')}
              style={{height: 36, width: 36}}
            />
          )}
          <Text
            style={[
              styles.TabText,
              {color: data.currentTab == 'home' ? '#6C63FF' : '#787878'},
            ]}>
            Contact
          </Text>
        </TouchableOpacity>
      </View>
      <DrawerModal />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    paddingLeft: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#787878',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  bottomTabContainer: {
    height: 80,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    alignItems: 'center',
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  TabText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DashboardScreen;
