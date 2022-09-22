import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Home from './pages/Home';
import HurufMain from './sections/HurufMain';
import HurufChoice from './sections/HurufChoice';
import RateUs from './pages/RateUs'
import FollowUs from './pages/FollowUs';

export default function App() {
  return (
    <ScrollView>
      <HurufChoice />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
