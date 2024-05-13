import * as React from "react";
import { StyleSheet, View, Text,TextInput,TouchableOpacity,ToastAndroid,BackHandler,SafeAreaView } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Modal1 = ({route,navigation}) => {
  const {event} =route.params;
  React.useEffect(() => {
    const backAction = () => {
      navigation.navigate('EventPage');
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove(); // Remove event listener on component unmount
  }, [navigation]);
  const [newMember, setNewMember] = React.useState("");
  async function saveMember(){
    const pattern = /^(?!\s)(?!.*\s$).*/;
      if (pattern.test(newMember)) {
      if (newMember.length > 15) {
        ToastAndroid.show("Length can't be greater than 15", ToastAndroid.show);
        return;
      }
      if (newMember.length == 0) {
        ToastAndroid.show("Enter a valid member name", ToastAndroid.show);
        return;
      }
     try {
    const eventsJson = await AsyncStorage.getItem('events');
    if (eventsJson !== null) {
      const events = JSON.parse(eventsJson);
      const eventToUpdate = events.find((e) => e.name === event.name);
      if (eventToUpdate) {
        eventToUpdate.members.push({name:newMember,credit:0,debit:0});
        await AsyncStorage.setItem('events', JSON.stringify(events));
        console.log('Member saved successfully.');
        navigation.navigate("EventPage");
      } else {
        console.log('Event not found.');
      }
    } else {
      console.log('No events found in AsyncStorage.');
    }
  } catch (error) {
    console.error('Error saving member:', error);
  }}
  else{
    ToastAndroid.show(
      "Member name cannot contain leading or trailing spaces",
      ToastAndroid.LONG
    );
  
  }
  }
  function cancel(){
    navigation.navigate("Event1",{event:event});
  }
  return (
    <SafeAreaView style={styles.modal}>
      <View style={[styles.modalChild, styles.childPosition]} />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <TouchableOpacity onPress={saveMember}>
        <View style={[styles.groupItem, styles.groupLayout]} >
          
        <Text style={[styles.save, styles.saveTypo]}>Save</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.enterName}>Enter Name</Text>
        <TouchableOpacity onPress={cancel}>
        <View style={[styles.groupInner, styles.groupLayout]} >
          <Text style={[styles.cancel, styles.saveTypo]}>Cancel</Text>
          </View>
          </TouchableOpacity>



        <View style={styles.rectangleView} />
         <TextInput style={[styles.enterEventName, styles.infoTypo2]} placeholder="Enter member name"
      onChangeText={(text)=>setNewMember(text)}/>
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    enterEventName: {
    top: 148,
    fontFamily: FontFamily.interRegular,
    color: "#ada9a9",
    left: 24,
    maxWidth: 280,
  },
  infoTypo2: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    // position: "absolute",
  },
  childPosition: {
    left: 0,
    top: 0,
  },
  groupChildLayout: {
    height: 353,
    width: 336,
    position: "absolute",
  },
  groupLayout: {
    height: 88,
    width: 128,
    backgroundColor: Color.colorSalmon,
    borderRadius: Border.br_21xl,
    top: 248,
    position: "absolute",
  },
  saveTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  modalChild: {
    backgroundColor: Color.colorLightblue,
    width: 360,
    position: "absolute",
    height: 800,
  },
  groupChild: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorDarkslategray_100,
    left: 0,
    top: 0,
  },
  groupItem: {
    left: 18,
  },
  enterName: {
    top: 73,
    left: 24,
    fontStyle: "italic",
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 216,
    height: 64,
    textAlign: "left",
    color: Color.colorWhite,
    // color: Color.colorBlack,
    fontSize: FontSize.size_17xl,
    position: "absolute",
  },
  save: {
    top: 20,
    left: 22,
    fontSize: 32,
    width: 100,
    height: 40,
  },
  groupInner: {
    left: 184,
  },
  rectangleView: {
    top: 126,
    left: 8,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    width: 316,
    height: 78,
    position: "absolute",
  },
  rectangleParent: {
    top: 214,
    left: 12,
  },
  cancel: {
    top: 20,
    left: 10,
    fontSize: 32,
    fontFamily: FontFamily.interBold,
    fontWeight: "600",
  },
  modal: {
    backgroundColor: "#f4fbff",
    flex:1,
    width: "100%",
    overflow: "hidden",
    // marginTop: 100,
    // height: 400,
  },
});

export default Modal1;
