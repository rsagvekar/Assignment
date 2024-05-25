import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import NewsAPI from 'newsapi';

import {theme as AppTheme} from '../constants/Theme';
import {_api_key, top_headlines} from '../api/Api';
import moment from 'moment';

const News = () => {
  const navigation = useNavigation();
  const [topHeadlines, setTopHeadlines] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('business');
  const [news, setNews] = useState([]);

  const categories = [
    {
      id: 2,
      title: 'Business',
      label: 'business',
    },
    {
      id: 6,
      title: 'General',
      label: 'general',
    },
    {
      id: 3,
      title: 'Health',
      label: 'health',
    },
    {
      id: 4,
      title: 'Sports',
      label: 'sports',
    },
    {
      id: 5,
      title: 'Technology',
      label: 'technology',
    },
  ];

  const getNews = title => {
    if (title == 'all') {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${_api_key}`;
      fetch(url) // api for the get request
        .then(response => response.json())
        .then(data => {
          setNews(data.articles);
        });
    } else {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${title}&apiKey=${_api_key}`;
      fetch(url) // api for the get request
        .then(response => response.json())
        .then(data => {
          setNews(data.articles);
        });
    }
  };

  useEffect(() => {
    fetch(top_headlines)
      .then(response => response.json())
      .then(data => {
        setTopHeadlines(data.articles);
      });
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${selectedCategory}&apiKey=${_api_key}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setNews(data.articles);
      });
  }, []);
  return (
    <View style={{backgroundColor: '#fff'}}>
      <ScrollView>
        <Text
          style={{
            marginLeft: 20,
            marginTop: 24,
            fontSize: 20,
            fontWeight: '800',
            color: AppTheme.light.TextColor,
          }}>
          Top Headlines
        </Text>
        <FlatList
          data={topHeadlines}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{marginTop: 12, marginHorizontal: 20}}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('NewsDetails', {data: item});
                }}
                style={{
                  marginRight: 12,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {item.urlToImage ? (
                  <Image
                    source={{uri: item.urlToImage}}
                    style={{
                      height: 60,
                      width: 60,
                      borderRadius: 60,
                      borderWidth: 1,
                    }}
                  />
                ) : (
                  <View
                    style={{
                      height: 60,
                      width: 60,
                      borderRadius: 60,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 0.5,
                    }}>
                    <Image
                      source={require('../assets/noImage.png')}
                      style={{height: 36, width: 36, borderRadius: 48}}
                    />
                  </View>
                )}
                <Text
                  numberOfLines={1}
                  style={{
                    width: 50,
                    marginTop: 8,
                    fontSize: 18,
                    fontWeight: '800',
                    color: AppTheme.light.TextColor,
                  }}>
                  {item.title ? item.title : item.content}
                </Text>
              </TouchableOpacity>
            );
          }}
        />

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 24,
            marginHorizontal: 20,
            paddingRight: 20,
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setSelectedCategory(item.title);
                  getNews(item.label);
                }}
                style={{
                  marginRight: 12,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 40,
                  paddingHorizontal: 20,
                  borderRadius: 20,
                  borderWidth: 1,
                  backgroundColor:
                    selectedCategory == item.title ? '#000' : '#fff',
                  // backgroundColor: 'red'
                }}>
                <Text
                  numberOfLines={1}
                  style={{
                    // width: 50,
                    // marginTop: 8,
                    fontSize: 18,
                    fontWeight: '800',
                    color:
                      selectedCategory == item.title
                        ? '#fff'
                        : AppTheme.light.TextColor,
                  }}>
                  {item.title ? item.title : item.content}
                </Text>
              </TouchableOpacity>
            );
          }}
        />

        <FlatList
          data={news}
          contentContainerStyle={{marginTop: 24, paddingHorizontal: 20}}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('NewsDetails', {data: item});
                }}
                style={{
                  height: 160,
                  marginBottom: 12,
                  borderRadius: 12,
                  elevation: 20,
                  backgroundColor: '#fff',
                  shadowColor: '#171717',
                  shadowOffset: {width: -2, height: 4},
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                  paddingLeft: 20,
                  alignItems: 'center',
                  flexDirection: 'row',
                  // backgroundColor: 'red',
                }}>
                <Image
                  source={{uri: item.urlToImage}}
                  style={{
                    height: 120,
                    width: 120,
                    borderRadius: 12,
                    color:
                      selectedCategory == item.title
                        ? '#fff'
                        : AppTheme.light.TextColor,
                  }}
                />
                <View
                  style={{
                    flex: 1,
                    height: '100%',
                    paddingHorizontal: 12,
                    justifyContent: 'flex-start',
                  }}>
                  <Text
                    numberOfLines={2}
                    style={{marginTop: 20, fontSize: 14, fontWeight: '800'}}>
                    {item.title}
                  </Text>
                  <Text
                    numberOfLines={2}
                    style={{marginTop: 4, fontSize: 14, fontWeight: '400'}}>
                    {item.content}
                  </Text>
                  <Text
                    style={{marginTop: 12, fontSize: 14, fontWeight: '400'}}>
                    {moment(item.publishedAt).startOf('hour').fromNow()}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default News;
