import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';
import {WebView} from 'react-native-webview';

const height = Dimensions.get('screen').height;
const NewsDetails = () => {
  const navigation = useNavigation();
  const routes = useRoute();
  const {data} = routes.params;
  return (
    <View style={{flex: 1, paddingTop: Platform.OS == 'ios' ? 50 : 0}}>
      <WebView source={{uri: data.url}} style={{flex: 1}} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default NewsDetails;
