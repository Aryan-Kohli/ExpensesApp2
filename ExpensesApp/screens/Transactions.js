import * as React from "react";
import { StyleSheet, View, Text,SafeAreaView,TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Transactions = ({route,navigation}) => {
  const {event} = route.params;
  return (
    <SafeAreaView style={styles.transactions}>
      <View style={styles.transactionsChild} />
      <Text style={styles.eventName}>{event.name}</Text>
      <TouchableOpacity onPress={()=>{navigation.navigate("Event1",{event:event})}} >
      <View style={[styles.transactionsItem, styles.rectangleViewPosition]} />
      <Image
        style={styles.transactionsInner}
        contentFit="cover"
        source={require("../assets/arrow-22.png")}
      />
      </TouchableOpacity>
    {event.transactions.length === 0 && (
  <Text style={{ textAlign: "center", marginTop: 150, fontSize: 50, color: Color.colorSteelblue_100, fontFamily: FontFamily.interSemiBold, fontWeight: "600" }}>
    No transactions are added yet
  </Text>
)}
{event.transactions.length > 0 && (
  <View>
    <View style={[styles.rectangleView, styles.rectangleViewPosition2]} />
    <Text style={[styles.payer, styles.descPosition]}>Members</Text>
    <Text style={[styles.desc, styles.descTypo]}>Payer</Text>
    <Text style={[styles.amount, styles.textTypo]}>Amount</Text>
    <View style={{position:"relative", top:175}}>
    {event.transactions.map((transaction, index) => {
      return (
        <View style={{backgroundColor:Color.colorDarkslategray_100, marginVertical:12, paddingHorizontal:22, flexDirection:"row", alignItems:"center", paddingVertical:10}} key={index}>
          <Text style={{fontSize:18, color:Color.colorWhite , fontWeight:"700"}}>{transaction.payer}</Text>
          <Text style={{fontSize:18,  color:Color.colorWhite ,fontWeight:"700", position:"absolute", left:160}}>{transaction.members.length}</Text>
          <Text style={{fontSize:18, color:Color.colorWhite , fontWeight:"700", position:"absolute", left:260}}>{transaction.amount}</Text>
          </View>
      );
    })}
    </View>
  </View>
)}

      

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rectangleViewPosition: {
    left: 19,
    position: "absolute",
  },
  rectangleViewPosition2: {
    // left: 19,
    position: "absolute",
  },
  transactionsChildLayout: {
    width: 336,
    borderRadius: Border.br_11xl,
    left: 12,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  descPosition: {
    top: 125,
    fontStyle: "italic",
  },
  descTypo: {
    left: 29,
    color: Color.colorWhite,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  lunchTypo: {
    top: 363,
    color: Color.colorWhite,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  text2Typo: {
    top: 492,
    color: Color.colorWhite,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  transactionsChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorLightblue,
    width: 360,
    position: "absolute",
    height: 800,
  },
  transactionsItem: {
    top: 25,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorSalmon,
    width: 85,
    height: 64,
  },
  eventName: {
    top: 33,
    left: 113,
    fontSize: FontSize.size_17xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
    fontStyle: "italic",
    position: "absolute",
  },
  transactionsInner: {
    top: 48,
    width: 45,
    height: 25,
    left: 36,
    position: "absolute",
  },
  rectangleIcon: {
    top: 186,
    height: 114,
  },
  transactionsChild1: {
    top: 322,
    height: 115,
  },
  transactionsChild2: {
    top: 459,
    height: 120,
  },
  aayush: {
    top: 357,
    left: 140,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_5xl,
  },
  yashika: {
    top: 490,
    left: 140,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_5xl,
  },
  aryan: {
    left: 144,
    top: 229,
  },
  rectangleView: {
    top: 107,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorSteelblue_100,
    width: "100%",
    height: 70,
  },
  payer: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
    left: 120,
  },
  desc: {
    top: 125,
    fontStyle: "italic",
  },
  amount: {
    top: 125,
    left: 239,
    fontStyle: "italic",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_5xl,
  },
  beakfast: {
    top: 229,
  },
  lunch: {
    left: 36,
  },
  dinner: {
    left: 42,
  },
  text: {
    left: 251,
    top: 229,
  },
  text1: {
    left: 259,
  },
  text2: {
    left: 254,
  },
  transactions: {
    backgroundColor: "#d0efff",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default Transactions;
