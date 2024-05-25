import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';

const width = Dimensions.get('screen').width;
const Homescreen = () => {
  const data = useSelector(state => state.CommonReducer);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/a.png')}
        style={{width: width - 20, height: width - 20}}
      />
      <Text style={styles.welcome}>Welcome to assignment</Text>
      <Text style={styles.welcome}>Click on News to read todays news</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
  },
});

export default Homescreen;
