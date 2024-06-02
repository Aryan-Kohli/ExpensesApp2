import * as React from "react";
import { StyleSheet, View, Text,TouchableOpacity,ScrollView,SafeAreaView } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Members = ({route,navigation}) => {
  const {event} = route.params;
  return (
    <SafeAreaView style={styles.members}>
      <View></View>
      <View style={styles.membersChild} />
      <TouchableOpacity onPress={()=>{navigation.navigate("Event1",{event:event})}}>
          <View style={styles.membersItem} >
      <Image
        style={styles.membersInner}
        contentFit="cover"
        source={require("../assets/arrow-21.png")}
        />
        </View>
      </TouchableOpacity>
      
      <Text style={[styles.eventName, styles.take1501Typo]}>{event.name}</Text>
      <ScrollView style={{marginTop:125, marginBottom:40}}>
      {event.members.length>0 && event.members.map((member, index) => {
        console.log(member);
        return (
          <View key={index} style={{backgroundColor:Color.colorSteelblue_100, marginHorizontal:10, borderRadius:10,
          marginVertical:10, paddingHorizontal:10,paddingVertical:10, height:110}}>
            
            <Text style={styles.name}>{member.name}</Text>
            <Text style={styles.give}>GIVE: {member.debit.toFixed(2)} /-</Text>
            <Text style={styles.take}>TAKE: {member.credit.toFixed(2)} /-</Text>
          </View>
        );
      })}
      {event.members.length==0 && <Text style={{textAlign:"center", marginTop:50,fontSize:50, color:Color.colorSteelblue_100, fontFamily:FontFamily.interSemiBold, fontWeight:"600"
    }}>
        Add members to the event ,
        No members are added yet
        </Text>}
      </ScrollView>
      {/* 
      <Image
        style={[styles.membersChild1, styles.membersChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Image
        style={[styles.membersChild2, styles.membersChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <View style={[styles.rectangleView, styles.membersChildLayout]} />
      <View style={[styles.membersChild3, styles.membersChildLayout]} />
      <View style={[styles.membersChild4, styles.membersChildLayout]} />
      <Text style={[styles.aryanKohli, styles.yashikaTypo]}>Aryan Kohli</Text>
      <Text style={[styles.aayushSharma, styles.yashikaTypo]}>
        Aayush Sharma
      </Text>
      <Text style={[styles.yashika, styles.yashikaTypo]}>Yashika</Text>
      <Text style={[styles.give100, styles.give100Typo]}>GIVE:100/-</Text>
      <Text style={[styles.take150, styles.give100Typo]}>TAKE:150/-</Text>
      <Text style={[styles.take1501, styles.take1501Typo]}>TAKE:150/-</Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  name:
    {color: Color.colorWhite,
    textAlign: "left",
    left:20,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: FontSize.size_17xl,
    
  },
  give:{ left: 20,
    textAlign: "left",
    color: Color.colorMistyrose_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: 20,
    position: "absolute",
    top:60,
    // maxWidth:130,
    },
    take:{ left: 180,
    textAlign: "left",
    color: Color.colorMistyrose_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: 20,
    position: "absolute",
    top:60, 
    },



  take1501Typo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "800",
    fontStyle: "italic",
    fontSize: FontSize.size_17xl,
    position: "absolute",
  },
  membersChildLayout1: {
    height: 157,
    width: 336,
    borderRadius: Border.br_11xl,
    // position: "absolute",
  },
  membersChildLayout: {
    height: 58,
    width: 233,
    borderRadius: Border.br_11xl,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  yashikaTypo: {
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: FontSize.size_17xl,
    position: "absolute",
  },
  give100Typo: {
    left: 91,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: FontSize.size_17xl,
    position: "absolute",
  },
  membersChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorLightblue,
    width: 360,
    position: "absolute",
    height: 800,
  },
  membersItem: {
    top: 35,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorSalmon,
    width: 85,
    height: 64,
    left: 19,
    position: "absolute",
  },
  eventName: {
    top: 40,
    left: 113,
  },
  membersInner: {
    top: 20,
    left: 15,
    width: 45,
    height: 25,
    position: "absolute",
  },
  rectangleIcon: {
    top: 10,
    left: 19,
  },
  membersChild1: {
    top: 290,
    left: 19,
  },
  membersChild2: {
    top: 459,
    left: 24,
  },
  rectangleView: {
    top: 12,
    left: 10,
    height: 58,
    width: 233,
  },
  membersChild3: {
    top: 377,
    left: 70,
    height: 58,
    width: 233,
  },
  membersChild4: {
    top: 544,
    left: 75,
  },
  aryanKohli: {
    top: 142,
    left: 75,
  },
  aayushSharma: {
    top: 325,
    left: 62,
  },
  yashika: {
    top: 494,
    left: 81,
  },
  give100: {
    top: 205,
  },
  take150: {
    top: 385,
  },
  take1501: {
    top: 554,
    left: 92,
  },
  members: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
    backgroundColor: Color.colorWhite,
  },
});

export default Members;
