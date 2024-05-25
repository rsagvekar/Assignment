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
import { currentDrawerTab, currentTab } from '../redux/Actions/CommonActions';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const Profile = () => {
  const data = useSelector(state => state.CommonReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Image
            source={{
              uri: 'https://imgs.search.brave.com/Wx0VI9RCCj-JluBKLhvIzlX-5NMByjDC-WUJilp2voQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/dGhlLXNjaWVudGlz/dC5jb20vYXNzZXRz/L2FydGljbGVOby82/NTc5My9oSW1nLzMx/NzExL2FydGlmaWNp/YWwtaW50ZWxsaWdl/bmNlLWFuYWx5c2lz/LW9mLWltYWdlcy1z/LnBuZw',
            }}
            style={{height: 200, width: width}}
          />
          <TouchableOpacity
          onPress={() => {
            dispatch(currentTab('home'));
            dispatch(currentDrawerTab('home'));
            navigation.goBack();
          }}
            style={{
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 36,
              top: 10,
              left: 10,
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
          <TouchableOpacity
            style={{
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 36,
              bottom: 90,
              right: 20,
              height: 36,
              width: 36,
              borderWidth: 2,
              borderColor: '#6C63FF',
              backgroundColor: '#fff',
            }}>
            <Image
              source={require('../assets/pencil.png')}
              style={{height: 24, width: 24}}
            />
          </TouchableOpacity>
          <Image
            source={{
              uri: 'https://imgs.search.brave.com/_efwvo4Es8zOj_umBbIg4JM3kuM0t_-zrYNZ4NqBf_M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvY29v/bC1wcm9maWxlLXBp/Y3R1cmUtZDd1bjd6/OHRyZjQxZXU5OC5q/cGc',
            }}
            style={{
              height: 120,
              width: 120,
              borderRadius: 100,
              marginTop: -50,
              alignSelf: 'center',
            }}
          />
        </View>
        <View style={{marginTop: 12, marginHorizontal: 20}}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 20,
              color: '#6C63FF',
            }}>
            Name
          </Text>
          <TextInput
            value={data?.user?.displayName}
            editable={false}
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
        <View style={{marginTop: 12, marginHorizontal: 20}}>
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
            value={data?.user?.email}
            editable={false}
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
        <View style={{marginTop: 12, marginHorizontal: 20}}>
          <Text
            style={{
              marginTop: 12,
              fontWeight: '600',
              fontSize: 20,
              color: '#6C63FF',
            }}>
            Job Title
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
        <View style={{marginTop: 12, marginHorizontal: 20}}>
          <Text
            style={{
              marginTop: 12,
              fontWeight: '600',
              fontSize: 20,
              color: '#6C63FF',
            }}>
            Company
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
      </ScrollView>
      {/* <Text>Email: {user ? user?.email : 'No user logged in'}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Profile;
