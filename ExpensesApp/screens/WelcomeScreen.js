import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text,TouchableOpacity,SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.welcomeScreen}>
      <Image
        style={[styles.welcomeScreenChild, styles.welcomeScreenChildPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <View style={[styles.rectangleParent, styles.groupItemPosition]}>
        <View style={styles.groupChild} />
        <Image
          style={[styles.groupItem, styles.groupItemPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <View style={styles.groupInner} />
        <View style={[styles.rectangleView, styles.groupChild1Layout]} />
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
      </View>
      <Image
        style={styles.welcomeScreenItem}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={styles.welcomeScreenInner}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-12.png")}
      />
      <LinearGradient
        style={[
          styles.rectangleLineargradient,
          styles.welcomeScreenChildPosition,
        ]}
        locations={[0.05, 0.32, 0.5, 0.77, 0.94, 0.98, 0.99]}
        colors={[
          "#194257",
          "#225976",
          "#266282",
          "#2f789f",
          "#368bb9",
          "#3a96c8",
          "#40a5dc",
        ]}
      />
      {/* <TouchableOpacity onPress={()=>{navigation.navigate("EventPage")}}> */}
        <TouchableOpacity onPress={()=>{navigation.navigate("EventPage")}}>
      <View style={styles.welcomeScreenChild1} />

      <Text style={styles.getStarted}>GET STARTED</Text>
       <Image
        style={styles.arrowIcon}
        contentFit="cover"
        source={require("../assets/arrow-1.png")}
        />
        </TouchableOpacity >
     
        {/* </TouchableOpacity> */}
      <Text style={[styles.welcomeToExpense, styles.allExpensesInClr]}>
        Welcome to Expense
      </Text>
      <Text style={[styles.allExpensesIn, styles.allExpensesInClr]}>
        All expenses in one place
      </Text>
      <Image
        style={styles.welcomeScreenChild2}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <View style={[styles.welcomeScreenChild3, styles.rectangleIconLayout]} />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  welcomeScreenChildPosition: {
    width: 365,
    left: -3,
    position: "absolute",
  },
  groupItemPosition: {
    left: 0,
    position: "absolute",
  },
  groupChild1Layout: {
    height: 15,
    backgroundColor: Color.colorDimgray,
    position: "absolute",
  },
  rectangleIconLayout: {
    borderRadius: Border.br_35xl,
    position: "absolute",
  },
  allExpensesInClr: {
    color: Color.colorMistyrose_100,
    textAlign: "left",
    position: "absolute",
  },
  welcomeScreenChild: {
    top: 180,
    height: 401,
  },
  groupChild: {
    top: 0,
    left: 52,
    backgroundColor: Color.colorLightblue,
    width: 268,
    height: 71,
    position: "absolute",
  },
  groupItem: {
    top: 35,
    width: 103,
    height: 95,
  },
  groupInner: {
    left: 66,
    backgroundColor: "#453f3f",
    width: 44,
    height: 36,
    top: 9,
    position: "absolute",
  },
  rectangleView: {
    left: 117,
    width: 142,
    top: 9,
  },
  groupChild1: {
    top: 32,
    left: 118,
    width: 88,
  },
  rectangleParent: {
    top: 315,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 320,
    height: 130,
  },
  welcomeScreenItem: {
    top: 226,
    left: 334,
    width: 22,
    height: 28,
    position: "absolute",
  },
  welcomeScreenInner: {
    top: 457,
    left: 49,
    width: 15,
    height: 14,
    position: "absolute",
  },
  ellipseIcon: {
    top: 451,
    left: 18,
    width: 10,
    height: 12,
    position: "absolute",
  },
  rectangleIcon: {
    top: -3,
    width: 365,
    height: 191,
    left: -3,
    borderRadius: Border.br_35xl,
  },
  rectangleLineargradient: {
    top: 480,
    borderTopLeftRadius: Border.br_31xl,
    borderTopRightRadius: Border.br_31xl,
    height: 350,
    backgroundColor: "transparent",
  },
  welcomeScreenChild1: {
    marginLeft: -109,
    top: 668,
    borderRadius: Border.br_xl,
    backgroundColor: "#292323",
    width: 226,
    height: 66,
    left: "50%",
    position: "absolute",
  },
  getStarted: {
    top: 685,
    left: 98,
    fontSize: 22,
    color: "#f2cdcd",
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "relative",
  },
  arrowIcon: {
    top: 693,
    left: 256,
    height:15,
    // maxHeight: "100%",
    width: 30,
    position: "absolute",
  },
  welcomeToExpense: {
    top: 508,
    left: 24,
    fontSize: FontSize.size_13xl,
    width: 374,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    color: Color.colorMistyrose_100,
  },
  allExpensesIn: {
    marginLeft: -152,
    top: 547,
    fontSize: FontSize.size_5xl,
    fontStyle: "italic",
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    left: "55%",
  },
  welcomeScreenChild2: {
    top: 585,
    left: 134,
    width: 93,
    height: 79,
    position: "absolute",
  },
  welcomeScreenChild3: {
    top: -14,
    left: 195,
    width: 243,
    height: 153,
  },
  groupIcon: {
    top: 140,
    left: 53,
    width: 286,
    height: 160,
    position: "absolute",
  },
  welcomeScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 700,
    overflow: "hidden",
    paddingBottom:100
  },
});

export default WelcomeScreen;
