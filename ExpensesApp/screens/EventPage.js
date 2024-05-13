import  React,{useState,useEffect} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  SafeAreaView,
  TextInput,
  ScrollView,
  ToastAndroid,
  BackHandler 
} from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
// import { TextInput } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import EventBox from "../Components/EventBox";
import AsyncStorage from "@react-native-async-storage/async-storage";
const EventPage = ({navigation}) => {
  const [newevent, setNewevent] = useState("");
  const [events, setEvents] = useState([]);
  const isFocused = useIsFocused();
   function SaveEvent() {
    // ToastAndroid.show("Event is Saved", ToastAndroid.SHORT);
    const pattern = /^(?!\s)(?!.*\s$).*/;
    if (pattern.test(newevent)) {
      if (newevent.length > 15) {
        ToastAndroid.show("Length can't be greater than 15", ToastAndroid.show);
        return;
      }
      if (newevent.length == 0) {
        ToastAndroid.show("Enter a valid Event name", ToastAndroid.show);
        return;
      }

      try {
        const obj = {
          name: newevent,
          transactions: [],
          totalCredit: 0,
          totalDebit: 0,
          balance: 0,
          members: [],
        };
        setEvents([...events, obj]);
        console.log(events);
        AsyncStorage.setItem("events", JSON.stringify([...events, obj]));
        setNewevent("");
      } catch (e) {
        console.log(e);
      }

      ToastAndroid.show(`Event is Saved`, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(
        "Event name cannot contain leading or trailing spaces",
        ToastAndroid.SHORT
      );
    }
  }
   useEffect(() => {
    const loadEvents = async () => {
      try {
        const allevents = await AsyncStorage.getItem("events");
        if (allevents) {
          const parsedEvents = JSON.parse(allevents);
          console.log("PARSED EVENTS", parsedEvents);
          setEvents(parsedEvents);
          setNewevent("");
        } else {
          console.log("IT IS NULL", allevents);
        }
      } catch (error) {
        console.error("Error loading events from AsyncStorage:", error);
      }
      // console.log("load vents called");
    };

    if (isFocused) loadEvents();
  }, [isFocused, navigation]);
  function deleteEvent(event) {
    console.log("EVENT", event);
    const filteredEvents = events.filter((e) => e !== event);
    setEvents(filteredEvents);
    AsyncStorage.setItem("events", JSON.stringify(filteredEvents));
  }
  function openEvent(event) {
    console.log("EVENT", event.name);
    navigation.navigate("Event1", { event: event });
  }
  return (
    <SafeAreaView style={styles.eventPage}>
      <View style={styles.eventPageChild} />
      
      {/* <Image
        style={styles.eventPageItem}
        contentFit="cover"
        source={require("../assets/rectangle-2.png")}
      /> */}
      <View style={styles.eventPageInner} />
      <TouchableOpacity onPress={()=>{navigation.navigate("InfoScreen")}}>

      <View style={[styles.rectangleView, styles.ellipseIconLayout]} >
              <Text style={[styles.info, styles.infoTypo]}>INFO</Text>

        </View>
      </TouchableOpacity>
      <View style={styles.eventPageChild1} />
      <TouchableOpacity onPress={SaveEvent}>
        <View>
      <Text style={[styles.save, styles.saveTypo]}>Save</Text>
          </View>
          </TouchableOpacity>
      <TextInput style={[styles.enterEventName, styles.infoTypo2]} placeholder="Enter Event Name"
      onChangeText={(text)=>setNewevent(text)}/>
      
      <Text style={[styles.createAnEvent, styles.eventPosition]}>
        Create an event
      </Text>
       <ScrollView style={{ marginBottom: 30, marginTop: 230 }}>
        {events && events.length > 0 &&
          events.map((event, index) => (
            <EventBox
              key={index}
              event={event}
              deleteEvent={() => deleteEvent(event)}
              openEvent={() => openEvent(event)}
            />
          ))}
      </ScrollView>
      
      {/* <View style={[styles.eventPageChild2, styles.eventPosition]} /> */}
      {/* <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      /> */}
      {/* <View style={[styles.eventPageChild3, styles.eventChildLayout]} /> */}
      {/* <View style={[styles.eventPageChild4, styles.eventChildLayout]} /> */}
      {/* <Text style={[styles.delete, styles.saveTypo]}>Delete</Text> */}
      {/* <Text style={[styles.open, styles.saveTypo]}>Open</Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ellipseIconLayout: {
    width: 77,
    position: "absolute",
  },
  saveTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  infoTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  infoTypo2: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    // position: "absolute",
  },
  eventPosition: {
    left: 13,
    position: "absolute",
  },
  eventChildLayout: {
    height: 35,
    width: 78,
    backgroundColor: Color.colorSalmon,
    position: "absolute",
  },
  eventPageChild: {
    top: -9,
    left: 0,
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    width: 360,
    height: 267,
    backgroundColor: Color.colorDarkslategray_100,
    position: "absolute",
  },
  eventPageItem: {
    top: 258,
    left: 2,
    width: 357,
    height: 542,
    position: "absolute",
  },
  eventPageInner: {
    marginLeft: -167,
    top: 129,
    left: "50%",
    borderRadius: Border.br_6xl,
    width: 340,
    height: 69,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  rectangleView: {
    top: 70,
    left: 271,
    backgroundColor: "#fea3a3",
    height: 46,
    borderRadius: Border.br_mini,
  },
  eventPageChild1: {
    top: 216,
    borderRadius: 10,
    width: 64,
    height: 34,
    backgroundColor: Color.colorSalmon,
    left: 261,
    position: "absolute",
  },
  save: {
    top: 219,
    left: 268,
    width: 82,
    height: 31,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  enterEventName: {
    top: 148,
    fontFamily: FontFamily.interRegular,
    color: "#ada9a9",
    left: 24,
    maxWidth: 312,
  },
  createAnEvent: {
    top: 71,
    fontSize: 35,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  info: {
    top: 10,
    left: 12,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    width: 68,
    height: 26,
    color: Color.colorBlack,
  },
  eventPageChild2: {
    top: 320,
    width: 332,
    height: 94,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorDarkslategray_100,
  },
  ellipseIcon: {
    top: 332,
    height: 68,
    left: 26,
  },
  eventPageChild3: {
    top: 361,
    left: 141,
    borderRadius: 4,
  },
  eventPageChild4: {
    top: 363,
    left: 254,
    borderRadius: 5,
  },
  delete: {
    top: 372,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
    left: 261,
  },
  open: {
    top: 367,
    left: 152,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  eventPage: {
    flex: 1,
    width: "100%",
    height: 750,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default EventPage;
