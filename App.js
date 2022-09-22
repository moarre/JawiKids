import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Home from './pages/Home';
import HurufMain from './sections/HurufMain';

export default function App() {
  return (
    <ScrollView>
      <Home />
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
