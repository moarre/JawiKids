import React from 'react';
import { View } from 'react-native';
import HeroArea from '../components/HeroArea';
import Navigation from '../components/Navigation';
import SocmedDetails from '../components/SocmedDetails';

const socmed = [
  {
    name: 'instagram',
    source: require('../assets/instagram-icon.png'),
    link: 'https://instagram.com',
    text: 'JawiKids',
  },
  {
    name: 'twitter',
    source: require('../assets/twitter-icon.png'),
    link: 'https://twitter.com',
    text: 'JawiKids',
  },
  {
    name: 'youtube',
    source: require('../assets/youtube-icon.png'),
    link: 'https://youtube.com',
    text: 'JawiKidsChannel',
  },
  {
    name: 'facebook',
    source: require('../assets/facebook-icon.png'),
    link: 'https://facebook.com',
    text: 'JawiKidsPage',
  },
];

const FollowUs = () => {
  return (
    <View>
      <Navigation />
      <HeroArea />
      <SocmedDetails socmed={socmed} />
    </View>
  );
};
export default FollowUs;
