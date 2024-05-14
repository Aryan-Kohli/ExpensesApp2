import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity,SafeAreaView } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Event1 = ({route ,navigation}) => {
  const { event } = route.params;
  return (
    <SafeAreaView style={[styles.event, styles.eventLayout1]}>
      <View style={[styles.eventChild, styles.eventLayout1]} />
      <TouchableOpacity onPress={()=>{navigation.navigate("Modal1",{event:event})}}>

      <View style={[styles.eventItem, styles.eventLayout]} >
        <Text style={[styles.addNewMember, styles.addTypo]}>
        + Add new member
      </Text>
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={()=>{navigation.navigate("Members",{event:event})}}> */}

      <TouchableOpacity onPress={()=>{navigation.navigate("Members",{event:event})}} style={[styles.eventInner, styles.eventLayout]} >
         <Text style={[styles.seeAllMembers, styles.addTypo]}>
        See all members
      </Text>
        </TouchableOpacity>
      {/* </TouchableOpacity> */}
      {/* <TouchableOpacity onPress={()=>{navigation.navigate("AddTransactions",{event:event})}}> */}

      <TouchableOpacity  onPress={()=>{navigation.navigate("AddTransactions",{event:event})}} style={[styles.rectangleView, styles.eventLayout]} >
         <Text style={[styles.addTansaction, styles.addTypo]}>Add Transactions</Text>
      </TouchableOpacity>
      {/* </TouchableOpacity> */}

      {/* <TouchableOpacity onPress={()=>{navigation.navigate("Transactions",{event:event})}}> */}
      <TouchableOpacity  onPress={()=>{navigation.navigate("Transactions",{event:event})}} style={styles.frameView}>
        <View style={[styles.frameChild, styles.eventLayout]} >
           <Text style={[styles.seeAllTransaction, styles.addTypo]}>
        See all transactions
      </Text>
          </View>
      </TouchableOpacity>
      {/* </TouchableOpacity > */}
        
      <Text style={styles.eventName}>{event.name}</Text>

      <TouchableOpacity onPress={()=>{navigation.navigate("EventPage")}} style={[styles.eventChild1, styles.eventPosition]}>
      <View  >
      <Image
        style={styles.arrowIcon}
        contentFit="cover"
        source={require("../assets/arrow-2.png")}
        />
        </View>
  </TouchableOpacity>
      
      
     
     
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  eventLayout1: {
    height: 750,
    backgroundColor: Color.colorLightblue,
  },
  eventLayout: {
    height: 71,
    width: 321,
    borderRadius: Border.br_6xl,
  },
  eventPosition: {
    left: 14,
    top:40,
    position: "absolute",
  },
  addTypo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    position: "absolute",
  },
  eventChild: {
    top: 0,
    left: 0,
    width: 360,
    position: "absolute",
  },
  eventItem: {
    top: 158,
    backgroundColor: Color.colorDarkslategray_100,
    width: 321,
    borderRadius: Border.br_6xl,
    left: 14,
    position: "absolute",
  },
  eventInner: {
    top: 264,
    backgroundColor: "#3a96c8",
    width: 321,
    borderRadius: Border.br_6xl,
    left: 14,
    position: "absolute",
  },
  rectangleView: {
    top: 370,
    backgroundColor: Color.colorDarkslategray_100,
    width: 321,
    borderRadius: Border.br_6xl,
    left: 14,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: "#40a5dc",
    width: 321,
    borderRadius: Border.br_6xl,
  },
  frameView: {
    top: 466,
    left: 4,
    padding: 10,
    position: "absolute",
  },
  eventName: {
    top: 45,
    left: 114,
    fontSize: FontSize.size_17xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "800",
    fontStyle: "italic",
    position: "absolute",
  },
  eventChild1: {
    top: 31,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorSalmon,
    width: 85,
    height: 64,
  },
  arrowIcon: {
    top: 20,
    left: 15,
    width: 45,
    height: 25,
    position: "absolute",
  },
  addNewMember: {
    top: 12,
    left: 24,
    position:"relative"
  },
  seeAllMembers: {
    top: 12,
    left: 45,
  },
  addTansaction: {
    top: 10,
    left: "14%",
  },
  seeAllTransaction: {
    top: 10,
    left: 29,
  },
  event: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },
});

export default Event1;
