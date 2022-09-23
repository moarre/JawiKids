import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View, ScrollView } from "react-native";
import ButtonSK from '../components/ButtonSK'

const SukuKata = () => {
  return (
    <><ScrollView>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.parent}>
          <ButtonSK text={"بو - كو\n buku"} />
          <ButtonSK text={"بو - لا\n bola"} />
        </View>
        <View style={styles.parent}>
          <ButtonSK text={"سا - ي\n saya"} />
          <ButtonSK text={"سو - كا\n suka"} />
        </View>
        <View style={styles.parent}>
          <ButtonSK text={"با - تو\n batu"} />
          <ButtonSK text={"رو - سا\n rusa"} />
        </View>
        <View style={styles.parent}>
          <ButtonSK text={"با - جو\n baju"} />
          <ButtonSK text={"اي - بو\n ibu"} />
        </View>
        <View style={styles.parent}>
          <ButtonSK text={"سي - كو\n siku"} />
          <ButtonSK text={"كو - دا\n kuda"} />
        </View>
      </SafeAreaView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#ffe6b3",
  },
  parent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default SukuKata;
