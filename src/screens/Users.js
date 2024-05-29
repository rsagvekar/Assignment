import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {currentDrawerTab, currentTab} from '../redux/Actions/CommonActions';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const mockUserList = [
  {
    id: '1',
    name: 'Tony Stark',
    pfp: 'https://imgs.search.brave.com/56w5NLGNyLynrojUtS2Bx5J0Z06X-xUZOIBaDv6F-jA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzYxL2Zk/L2RlLzYxZmRkZWUz/YzhkNDE1MDE0OTRm/NmYzY2M5MGVkYWNl/LmpwZw',
    email: 'tony@avengers.com',
  },
  {
    id: '2',
    name: 'Steve Rogers',
    pfp: 'https://imgs.search.brave.com/GHFyJgg3RycL_HnHBOMuLJqhOh4w6PiaBMB_XseXsAY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wcm9k/LXJpcGN1dC1kZWxp/dmVyeS5kaXNuZXkt/cGx1cy5uZXQvdjEv/dmFyaWFudC9kaXNu/ZXkvQ0U1RURFRkQ1/NzFBMzlDQTgyOThG/NkUyRjUyQjQyNzFG/RUZGQzQzMUQwQ0RF/QkZEQUJFRjZCQTJC/NjMzRTQ2NS9zY2Fs/ZT93aWR0aD00NDAm/YXNwZWN0UmF0aW89/MS43OCZmb3JtYXQ9/d2VicA',
    email: 'steve@svengers.com',
  },
  {
    id: '3',
    name: 'Thor Odinson',
    pfp: 'https://imgs.search.brave.com/85DWqVtbQOv_G2WTLq45OkQb4BT3e8x5L9V5iXtAzhg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bWFydmVsLmNvbS9j/b250ZW50LzF4L3Ro/b3JyYWduYXJva19s/b2JfbWFzX2hsZl8w/MV8xLmpwZw',
    email: 'thor@avengers.com',
  },
  {
    id: '4',
    name: 'Natasha Romanoff',
    pfp: 'https://imgs.search.brave.com/OWwnpPZAHhVuThvDqXJZTV3kCcEYCC-0xirQ0CIuR9M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9vcGVyLmNvbS9p/bWcvZ2FsbGVyeS9u/ZXctYmxhY2std2lk/b3ctcGhvdG9zLWFy/ZS1leHRyZW1lbHkt/cmV2ZWFsaW5nL2lu/dHJvLTE2MDQ1MDkz/MjkuanBn',
    email: 'natasha@avengers.com',
  },
  {
    id: '5',
    name: 'Bruce Banner',
    pfp: 'https://imgs.search.brave.com/pL6gW4ZZ4VBrsRhfs9psndD-uQR99PqtLGM0HVqE4SY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzlkLzg2/L2M1LzlkODZjNWJl/NGM3ZjcwNGI1Yjgz/YzMwZWU5Yzc3MjM4/LmpwZw',
    email: 'bruce@svengers.com',
  },
  {
    id: '6',
    name: 'Clint Barton',
    pfp: 'https://imgs.search.brave.com/efdGH2F3UGmmvxwWDxm7isSJtW3tJKNkVCXA9iiQ8QU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQxLzVj/L2NkLzQxNWNjZGM2/MTNhMDlkNjU3Mjk3/NzgyMmExYjBkMDQ4/LmpwZw',
    email: 'clint@avengers.com',
  },
  {
    id: '7',
    name: 'Wanda Maximoff',
    pfp: 'https://imgs.search.brave.com/aAxgmG5jZMBk_FdWABz8Xf2FAkLs6LDOAma2sbztzz0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJkLzc3/L2Q5LzJkNzdkOWJk/NjQwNWE4NTc0ZWUx/MzhiOWZmMzY4MTA1/LmpwZw',
    email: 'wanda@avengers.com',
  },
  {
    id: '8',
    name: 'Dr Strange',
    pfp: 'https://imgs.search.brave.com/ySFclbnVCWuX1tSG5OGS1uj1imcKJgP4C4TL9rs2wSo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzU3LzEw/L2MwLzU3MTBjMDhj/NTY4MThhOTE5YjZj/ZTYzNDNmOWJiMTU4/LmpwZw',
    email: 'strange@svengers.com',
  },
  {
    id: '9',
    name: 'Nick Furry',
    pfp: 'https://imgs.search.brave.com/Cy-dxNyIW8CD8UHL_wBgWne_IxZpB9y6SyxPkWGsS1c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bWFydmVsLmNvbS9j/b250ZW50LzF4LzAx/Nm5mal9jb21fcXVv/X2Rza18wMV8wLmpw/Zw',
    email: 'nick@avengers.com',
  },
];

const Users = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => {
            dispatch(currentTab('home'));
            dispatch(currentDrawerTab('home'));
            navigation.goBack();
          }}
          style={styles.backButton}>
          <Image
            source={require('../assets/back.png')}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 24, fontWeight: '700', margin: 20}}>
          All Users
        </Text>
      </View>
      <FlatList
        data={mockUserList}
        keyExtractor={item => item.id}
        contentContainerStyle={{marginHorizontal: 20}}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.touchableCard}>
              <Image
                source={{uri: item.pfp}}
                style={{height: 60, width: 60, borderRadius: 30}}
              />
              <View style={{marginLeft: 12}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  {item.name}
                </Text>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  {item.email}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 36,
    marginTop: 20,
    marginLeft: 20,
    height: 48,
    width: 48,
    borderWidth: 2,
    borderColor: '#6C63FF',
    backgroundColor: '#6C63FF',
  },
  touchableCard: {
    borderWidth: 1,
    borderRadius: 12,
    margin: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
  },
});

export default Users;
