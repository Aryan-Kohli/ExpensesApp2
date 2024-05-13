import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const AndroidLarge = () => {
  return (
    <View style={[styles.androidLarge1, styles.androidLarge1Bg]}>
      <View style={[styles.iphone14And15ProMax, styles.androidLarge1Bg]}>
        <Image
          style={styles.iphone14And15ProMaxChild}
          contentFit="cover"
          source={require("../assets/rectangle-111.png")}
        />
        <View style={styles.rectangleParent}>
          <View style={styles.groupChild} />
          <Image
            style={styles.groupItem}
            contentFit="cover"
            source={require("../assets/ellipse-22.png")}
          />
          <View style={styles.groupInner} />
          <View style={[styles.rectangleView, styles.groupChild1Layout]} />
          <View style={[styles.groupChild1, styles.groupChild1Layout]} />
        </View>
        <Image
          style={styles.iphone14And15ProMaxItem}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={styles.iphone14And15ProMaxInner}
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
          source={require("../assets/rectangle-121.png")}
        />
        <LinearGradient
          style={styles.rectangleLineargradient}
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
        <View style={styles.iphone14And15ProMaxChild1} />
        <Text style={styles.getStarted}>GET STARTED</Text>
        <Image
          style={styles.arrowIcon}
          contentFit="cover"
          source={require("../assets/arrow-1.png")}
        />
        <Text style={[styles.allExpensesIn, styles.allExpensesInClr]}>
          All expenses in one place
        </Text>
        <Image
          style={styles.iphone14And15ProMaxChild2}
          contentFit="cover"
          source={require("../assets/ellipse-71.png")}
        />
        <View
          style={[styles.iphone14And15ProMaxChild3, styles.rectangleIconLayout]}
        />
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group-11.png")}
        />
      </View>
      <Text style={[styles.welcomeToExpense, styles.allExpensesInClr]}>
        Welcome to Expense
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  androidLarge1Bg: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  groupChild1Layout: {
    height: 16,
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
  iphone14And15ProMaxChild: {
    top: 239,
    left: 7,
    width: 423,
    height: 368,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 49,
    backgroundColor: Color.colorLightblue,
    width: 254,
    height: 74,
    position: "absolute",
  },
  groupItem: {
    top: 37,
    left: 0,
    width: 98,
    height: 100,
    position: "absolute",
  },
  groupInner: {
    left: 62,
    backgroundColor: Color.colorDarkslategray,
    width: 42,
    height: 38,
    top: 10,
    position: "absolute",
  },
  rectangleView: {
    left: 111,
    width: 135,
    top: 10,
  },
  groupChild1: {
    top: 33,
    left: 112,
    width: 83,
  },
  rectangleParent: {
    top: 328,
    left: 59,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 303,
    height: 137,
    position: "absolute",
  },
  iphone14And15ProMaxItem: {
    top: 213,
    left: 356,
    width: 22,
    height: 28,
    position: "absolute",
  },
  iphone14And15ProMaxInner: {
    top: 496,
    left: 84,
    width: 15,
    height: 14,
    position: "absolute",
  },
  ellipseIcon: {
    top: 482,
    left: 54,
    width: 10,
    height: 12,
    position: "absolute",
  },
  rectangleIcon: {
    top: 44,
    left: 22,
    width: 373,
    height: 190,
  },
  rectangleLineargradient: {
    top: 582,
    left: 36,
    borderTopLeftRadius: Border.br_31xl,
    borderTopRightRadius: Border.br_31xl,
    width: 359,
    height: 279,
    backgroundColor: "transparent",
    position: "absolute",
  },
  iphone14And15ProMaxChild1: {
    marginLeft: -111,
    top: 758,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_100,
    width: 226,
    height: 79,
    left: "50%",
    position: "absolute",
  },
  getStarted: {
    top: 784,
    left: 122,
    fontSize: FontSize.size_3xl,
    color: Color.colorMistyrose_200,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  arrowIcon: {
    top: 798,
    left: 283,
    maxHeight: "100%",
    width: 30,
    position: "absolute",
  },
  allExpensesIn: {
    marginLeft: -161,
    top: 658,
    fontSize: FontSize.size_5xl,
    fontStyle: "italic",
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 297,
    left: "50%",
  },
  iphone14And15ProMaxChild2: {
    top: 687,
    left: 161,
    width: 87,
    height: 65,
    position: "absolute",
  },
  iphone14And15ProMaxChild3: {
    top: -14,
    left: 195,
    width: 243,
    height: 153,
  },
  groupIcon: {
    top: 183,
    left: 109,
    width: 262,
    height: 145,
    position: "absolute",
  },
  iphone14And15ProMax: {
    top: -44,
    left: -35,
    width: 430,
    height: 889,
    position: "absolute",
  },
  welcomeToExpense: {
    top: 574,
    left: 15,
    fontSize: 30,
    width: 407,
    height: 55,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    color: Color.colorMistyrose_100,
  },
  androidLarge1: {
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default AndroidLarge;
