import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
  SafeAreaView,
  ToastAndroid,
} from "react-native";

import COLORS from "../colors";
export default function InfoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          paddingTop: 0,
          paddingHorizontal: 10,
          backgroundColor: COLORS.white,
        }}
      >
        <Text style={styles.subHead}>Welcome to our money-splitting app! Never worry about uneven expenses during trips again. With our app, effortlessly split costs and track expenses among friends. Simplify your group finances and enjoy hassle-free adventures together</Text>
        <View style={{marginVertical:25,height:50}}></View>
        <Text style={styles.heads}>Made by :</Text>
        <Text style={styles.heads}>Aryan Kohli (Developer)</Text>
        <Text style={styles.heads}>& Yashika (Designer)</Text>
        <View style={{marginVertical:10,height:10}}></View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
  heads: {
    fontSize: 25,
    color: COLORS.mahroon,
    fontWeight: "700",
  },
  subHead: {
    fontSize: 25,
    color: COLORS.mahroon,
    fontWeight: "700",
  },
});
