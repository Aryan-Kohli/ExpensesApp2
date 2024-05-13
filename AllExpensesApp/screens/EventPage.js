import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const EventPage = () => {
  return (
    <View style={styles.eventPage}>
      <View style={[styles.eventPageChild, styles.eventLayout]} />
      <Image
        style={[styles.eventPageItem, styles.eventLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-2.png")}
      />
      <View style={styles.eventPageInner} />
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.groupChild, styles.childLayout]} />
      </View>
      <View style={[styles.rectangleView, styles.childLayout]} />
      <View style={[styles.eventPageChild1, styles.childLayout]} />
      <View style={[styles.eventPageChild2, styles.childLayout]} />
      <View style={[styles.eventPageChild3, styles.childLayout]} />
      <Image
        style={[styles.ellipseIcon, styles.eventChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Image
        style={[styles.eventPageChild4, styles.eventChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Image
        style={[styles.eventPageChild5, styles.eventChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Image
        style={[styles.eventPageChild6, styles.eventChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <View style={[styles.eventPageChild7, styles.eventChildLayout]} />
      <View style={[styles.eventPageChild8, styles.eventChildLayout]} />
      <View style={[styles.eventPageChild9, styles.eventChildLayout]} />
      <View style={[styles.eventPageChild10, styles.eventChildLayout]} />
      <View style={[styles.eventPageChild11, styles.eventChildLayout]} />
      <View style={[styles.eventPageChild12, styles.eventChildLayout]} />
      <View style={[styles.eventPageChild13, styles.eventChildLayout]} />
      <View style={[styles.eventPageChild14, styles.eventChildLayout]} />
      <View style={styles.eventPageChild15} />
      <Text style={[styles.enterEventName, styles.eventFlexBox]}>
        Enter Event Name
      </Text>
      <Text style={[styles.open, styles.openTypo]}>Open</Text>
      <Text style={[styles.open1, styles.openTypo]}>Open</Text>
      <Text style={[styles.open2, styles.openTypo]}>Open</Text>
      <Text style={[styles.open3, styles.openTypo]}>Open</Text>
      <Text style={[styles.createAnEvent, styles.eventFlexBox]}>
        Create an event
      </Text>
      <Text style={[styles.delete, styles.deleteTypo1]}>Delete</Text>
      <Text style={[styles.delete1, styles.deleteTypo]}>Delete</Text>
      <Text style={[styles.delete2, styles.deleteTypo]}>Delete</Text>
      <Text style={[styles.delete3, styles.deleteTypo1]}>Delete</Text>
      <Text style={[styles.info, styles.eventFlexBox]}>INFO</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  eventLayout: {
    width: 360,
    position: "absolute",
  },
  groupViewLayout: {
    height: 74,
    width: 290,
  },
  childLayout: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  eventChildLayout1: {
    height: 57,
    width: 59,
    left: 47,
    position: "absolute",
  },
  eventChildLayout: {
    height: 25,
    backgroundColor: Color.colorDimgray_100,
    width: 57,
    left: 255,
    position: "absolute",
  },
  eventFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  openTypo: {
    fontSize: FontSize.size_lg,
    left: 261,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  deleteTypo1: {
    fontSize: FontSize.size_mid,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  deleteTypo: {
    left: 258,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  eventPageChild: {
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    backgroundColor: "#746e6e",
    height: 163,
    left: 0,
    top: 0,
  },
  eventPageItem: {
    top: 151,
    left: 2,
    height: 477,
  },
  eventPageInner: {
    marginLeft: -149,
    top: 81,
    left: "50%",
    borderRadius: 25,
    width: 296,
    height: 62,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  groupChild: {
    height: 74,
    width: 290,
    left: 0,
    top: 0,
  },
  groupView: {
    top: 180,
    left: 37,
    height: 74,
    width: 290,
    position: "absolute",
  },
  rectangleView: {
    top: 260,
    height: 74,
    width: 290,
    left: 37,
  },
  eventPageChild1: {
    top: 340,
    height: 74,
    width: 290,
    left: 37,
  },
  eventPageChild2: {
    top: 420,
    height: 74,
    width: 290,
    left: 37,
  },
  eventPageChild3: {
    top: 12,
    left: 277,
    width: 69,
    height: 44,
  },
  ellipseIcon: {
    top: 189,
  },
  eventPageChild4: {
    top: 269,
  },
  eventPageChild5: {
    top: 348,
  },
  eventPageChild6: {
    top: 428,
  },
  eventPageChild7: {
    top: 186,
  },
  eventPageChild8: {
    top: 221,
  },
  eventPageChild9: {
    top: 269,
  },
  eventPageChild10: {
    top: 301,
  },
  eventPageChild11: {
    top: 348,
  },
  eventPageChild12: {
    top: 384,
  },
  eventPageChild13: {
    top: 428,
  },
  eventPageChild14: {
    top: 463,
  },
  eventPageChild15: {
    top: 89,
    backgroundColor: "#222020",
    height: 45,
    width: 57,
    left: 255,
    position: "absolute",
  },
  enterEventName: {
    top: 100,
    color: "#ada9a9",
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    left: 47,
  },
  open: {
    color: "#e6e3e3",
    top: 428,
  },
  open1: {
    top: 185,
    color: "#eeecec",
  },
  open2: {
    color: "#e7e4e4",
    top: 269,
  },
  open3: {
    color: "#e8e7e7",
    top: 348,
  },
  createAnEvent: {
    top: 34,
    left: 31,
    fontSize: 26,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  delete: {
    top: 222,
    left: 257,
    color: "#f0eeee",
  },
  delete1: {
    color: "#e8e6e6",
    top: 301,
  },
  delete2: {
    top: 385,
    color: "#e6e5e5",
  },
  delete3: {
    top: 466,
    left: 256,
    color: "#e5e1e1",
  },
  info: {
    top: 23,
    left: 288,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: "#000",
    width: 49,
    height: 26,
    fontSize: FontSize.size_xl,
  },
  eventPage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default EventPage;
