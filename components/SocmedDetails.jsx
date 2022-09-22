import React from 'react';
import { View, Text, StyleSheet, Image, Linking, Pressable } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  title: { fontSize: 24, fontWeight: 'bold' },
  socmedRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 20,
  },
  socmedIcon: {
    width: 40,
    height: 40,
  },
  text: {
    marginLeft: 20,
    fontSize: 16,
  },
});

const SocmedBox = ({ source, text, link }) => {
  const openLink = () => Linking.openURL(link);
  return (
    <>
      <Pressable style={styles.socmedRow} onPress={openLink}>
        <Image style={styles.socmedIcon} source={source} />
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </>
  );
};

const SocmedDetails = ({ socmed }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Follow us on</Text>
      <View style={{ marginTop: 20 }}>
        {socmed.map((soc, index) => (
          <SocmedBox key={index} source={soc.source} text={soc.text} link={soc.link} />
        ))}
      </View>
    </View>
  );
};
export default SocmedDetails;
