import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import HeroArea from '../components/HeroArea';

const teks = [
  `مادو
  اين مادو
  اين مادو باڤ
  ڤاڬي-ڤاڬي باڤ مينوم مادو
  باڤ سوك مينوم مادو
  باڤ مينوم مادو ڬونا سودو`,
  `ڬورو
  اين ڬورو ساي
  ڬورو ساي برنام سيتي
  ڬورو ساي ساڠت باءيق هاتي
  ساي سوك ڬورو ساي`,
  `كوڤو-كوڤو
  اين اياله كوڤو-كوڤو
  سايڤ كوڤو-كوڤو ورنا-ورني
  كوڤو-كوڤو تربڠ تيڠڬي
  سيڠا سوك كوڤو-كوڤو`,
  `هاري اين هاري راي
  كلوارڬ ساي مڽمبوت هاري راي
  ساي دان ايه مماكاي باجو ملايو
  امق مماكاي باجو كوروڠ
  ساي مموهون معاف درڤد امق دان ايه`,
];

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
    height: '100%',
  },
  box: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 10,
    width: '80%',
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  text: { fontSize: 24, textAlign: 'right' },
});

const PetikanPendek = () => {
  return (
    <ScrollView>
      <HeroArea />
      <View style={styles.container}>
        {teks.map((t, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.text}>{t}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
export default PetikanPendek;
