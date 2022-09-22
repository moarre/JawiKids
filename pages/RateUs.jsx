import React from 'react';
import { View } from 'react-native';
import HeroArea from '../components/HeroArea';
import Navigation from '../components/Navigation';
import RateDetails from '../components/RateDetails';


const RateUs = () => {
  return (
    <View>
      <Navigation />
      <HeroArea />
      <RateDetails />
    </View>
  );
};
export default RateUs
