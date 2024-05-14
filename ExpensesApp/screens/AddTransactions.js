import  React,{useEffect,useState} from "react";
import { StyleSheet,ScrollView, View, Text,SafeAreaView , TouchableOpacity,BackHandler, TextInput, ToastAndroid} from "react-native";
import { Image } from "expo-image";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { ScrollView } from "react-native-gesture-handler";
const AddTransactions = ({route, navigation}) => {
  const {event}= route.params;
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
  const [newMember, setNewMember] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);
    const [selected, setSelected] = React.useState(event.members[0].name);
    const[Amount,setAmount]=useState("");
   function handleSavePerson(){
    // console.log(event.members);
    let flag=0;
    for(let i=0;i<event.members.length;i++){
      if(event.members[i].name==newMember){
        flag=1;
        break;
      }
    }
    if(flag===1){

      setSelectedMembers([...selectedMembers,newMember]);
      setNewMember("");
      ToastAndroid.show("Member added",ToastAndroid.SHORT);
    }
    else{
      ToastAndroid.show("Member not found",ToastAndroid.SHORT);
    }
  }
async function handleSaveTransactions() {
  if (selectedMembers.length === 0) {
    ToastAndroid.show("Please select members", ToastAndroid.SHORT);
    return;
  }

  const amount = parseFloat(Amount);
  if (isNaN(amount)) {
    ToastAndroid.show("Please enter a valid amount", ToastAndroid.SHORT);
    return;
  }

  const events = JSON.parse(await AsyncStorage.getItem("events"));
  const eventIndex = events.findIndex((e) => e.name === event.name);

  if (eventIndex === -1) {
    ToastAndroid.show("Event not found", ToastAndroid.SHORT);
    return;
  }

  const eventToUpdate = events[eventIndex];
  let totalAmount = amount;
  let amountPerPerson = totalAmount / (selectedMembers.length+1);
  console.log("per person amount is ", amountPerPerson);
  for (let i = 0; i < selectedMembers.length; i++) {
    const memberIndex = eventToUpdate.members.findIndex(
      (m) => m.name === selectedMembers[i]
    );
    if (memberIndex !== -1) {
      if(eventToUpdate.members[memberIndex].credit>0)
      {
        if(eventToUpdate.members[memberIndex].credit>=amountPerPerson){
        eventToUpdate.members[memberIndex].credit -= amountPerPerson;
        }
        else{
          eventToUpdate.members[memberIndex].debit += amountPerPerson-eventToUpdate.members[memberIndex].credit;
          eventToUpdate.members[memberIndex].credit=0;
        }
      }
      else{
        eventToUpdate.members[memberIndex].debit += amountPerPerson;
        eventToUpdate.members[memberIndex].credit=0;
      }
    }
  }

  for (let i = 0; i < eventToUpdate.members.length; i++) {
    if (eventToUpdate.members[i].name === selected) {
      if(eventToUpdate.members[i].debit>0)
      {
        if(eventToUpdate.members[i].debit>=amountPerPerson){
        eventToUpdate.members[i].debit -= amountPerPerson*(selectedMembers.length);
        }
        else{
          eventToUpdate.members[i].credit += amountPerPerson*(selectedMembers.length)-eventToUpdate.members[i].debit;
          eventToUpdate.members[i].debit=0;
        }
      }
      else
      eventToUpdate.members[i].credit += amountPerPerson*(selectedMembers.length);
    }
  }
  eventToUpdate.transactions.push({
    amount: amount,
    members: selectedMembers,
    payer: selected,
  });
  events[eventIndex] = eventToUpdate;
  console.log(events[0].members);
  await AsyncStorage.setItem("events", JSON.stringify(events));
  ToastAndroid.show("Transaction saved successfully", ToastAndroid.SHORT);
  navigation.navigate("EventPage");
}

  return (
    <SafeAreaView style={styles.addTransactions}>
     

     
      <View style={styles.addTransactionsChild} />
      <TouchableOpacity onPress={()=>{navigation.navigate("EventPage",{event:event})}}>
      <View style={styles.addTransactionsItem} >
      <Image
        style={styles.addTransactionsInner}
        contentFit="cover"
        source={require("../assets/arrow-22.png")}
      />
      </View>
      </TouchableOpacity>
      <Text style={styles.eventName}>{event.name}</Text>
      <Image
        style={[styles.rectangleIcon, styles.addChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-14.png")}
      />
       <Text style={[styles.enterAmount, styles.enterTypo1]}>Enter Amount:</Text>
       <TextInput inputMode="decimal" style={[styles.enterAmount1, styles.enterTypo]} placeholder="Enter Amount:" onChangeText={(x)=>setAmount(x)} placeholderTextColor={Color.colorSilver}  />
      <Image
        style={[styles.addTransactionsChild1, styles.addChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-331.png")}
      />
      

      {/* <View style={styles.rectangleView} > */}
       <Picker
            selectedValue={selected}
            onValueChange={(itemValue, itemIndex) =>
              setSelected(itemValue)
            }
            style={[styles.rectangleView, styles.enterTypo2]}
            dropdownIconColor="white"
            borderWidth={2}
            itemStyle={{color: 'red'}}

            borderRadius={10}
          >
            {event.members.map((member, index) => (
          <Picker.Item key={index} label={member.name} value={member.name} />
        ))}
          </Picker>
        {/* <TextInput style={[styles.enterNameHere, styles.enterTypo]} placeholderTextColor={Color.colorSilver} placeholder="Enter Name here:"/> */}
      {/* <Text >
        Enter Name here:
      </Text> */}
      {/* </View> */}
      
      <Text style={[styles.enterPayersName, styles.enterTypo1]}>
        Enter Payer's Name:
      </Text>
     
      <Text
        style={[styles.enterPersonsName, styles.enterTypo1]}
      >{`Enter Person's Name
 to spilt:`}</Text>
      
      {/* <Text style={[styles.enterName, styles.enterTypo]}>{`Enter Name `}</Text> */}
      <View style={{ position: 'absolute', top: 450, left: 20 }}>
</View>

      <TouchableOpacity onPress={handleSavePerson}>
      <Image
        style={[styles.addTransactionsChild2, styles.addChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-341.png")}
      />
      
      <Text style={[styles.savePerson, styles.enterTypo]}>{`Save                   Person`}</Text>
      </TouchableOpacity>
      <TextInput style={[styles.enterName3, styles.enterTypo3]} placeholder="Enter Name" placeholderTextColor={Color.colorSilver}
      onChangeText={(m)=>setNewMember(m)} />  
      <TouchableOpacity onPress={handleSaveTransactions}>
        <Image
        style={[styles.addTransactionsChild3, styles.addChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-39.png")}
      />
      <Text style={[styles.saveTransactions, styles.enterTypo]}>Save Transactions</Text>
        </TouchableOpacity>
      <View style={[styles.addTransactionsChild4, styles.addChildLayout]} />
      <View style={[styles.addTransactionsChild5, styles.addChildLayout]} />
      
      
        {selectedMembers.length>0 && <View style={{position:"absolute", top:700, left:20}}>
          {/* <Text style={{font}}>{`Selected Members`}</Text> */}
          <View style={{position:'absolute',top:10, flexDirection:"row", alignItems:"center", gap:10}}>
          {selectedMembers.map((member,index)=><Text borderRadius={10} borderWidth={2}  style={{fontSize:18, fontWeight:"700",paddingHorizontal:5, paddingVertical:5}} key={index}>{member}</Text>)}
          </View>
        </View>}
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  addChildLayout1: {
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  enterTypo1: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontStyle: "italic",
    position: "absolute",
  },
  enterTypo: {
    color: Color.colorSilver,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    width:180,
    fontStyle: "italic",
    position: "absolute",
  },
  enterTypo3: {
    color: Color.colorSilver,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    width:180,
    fontStyle: "italic",
    position: "absolute",
  },
  enterTypo2: {
    color: Color.colorSilver,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontSize:40,
    height:40,
    width:245,
    fontStyle: "italic",
    position: "absolute",
  },
  addChildLayout: {
    height: 47,
    width: 360,
    backgroundColor: Color.colorLightblue,
    left: 0,
    position: "absolute",
  },
  addTransactionsChild: {
    top: 0,
    width: 360,
    backgroundColor: Color.colorLightblue,
    left: 0,
    position: "absolute",
    height: 800,
  },
  addTransactionsItem: {
    top: 25,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorSalmon,
    width: 85,
    height: 64,
    left: 19,
    position: "absolute",
  },
  eventName: {
    top: 33,
    left: 113,
    fontSize: FontSize.size_17xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    color: Color.colorBlack,
    fontStyle: "italic",
    position: "absolute",
  },
  addTransactionsInner: {
    top: 20,
    width: 45,
    height: 25,
    left: 16,
    position: "absolute",
  },
  rectangleIcon: {
    top: 253,
    width: 213,
    height: 114,
    left: 12,
  },
  addTransactionsChild1: {
    top: 425,
    width: 277,
    height: 98,
    left: 19,
  },
  addTransactionsChild2: {
    top: 559,
    width: 130,
    height: 120,
    left: 12,
  },
  rectangleView: {
    top: 136,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorSteelblue_100,
    width: 284,
    height: 70,
    left: 12,
    position: "absolute",
  },
  rectangleView2: {
    top: 136,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorSteelblue_100,
    width: 284,
    height: 250,
    zIndex: 3,
    left: 12,
    position: "absolute",
  },
  addTransactionsChild3: {
    top: 564,
    left: 154,
    width: 204,
    height: 115,
  },
  enterPayersName: {
    top: 98,
    left: 28,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
  },
  enterAmount: {
    top: 221,
    left: 31,
  },
  enterPersonsName: {
    top: 367,
    left: 28,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
  },
  enterAmount1: {
    top: 297,
    left: 32,
  },
  enterNameHere: {
    top: 18,
    left: 18,
  },
  enterName: {
    top: 459,
    left: 36,
  },
  enterName3: {
    top: 459,
    left: 36,
  },
  savePerson: {
    top: 590,
    left: 39,
  },
  saveTransactions: {
    top: 581,
    left: 178,
    width: 106,
  },
  addTransactionsChild4: {
    top: 753,
  },
  addTransactionsChild5: {
    top: 706,
  },
  addTransactions: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 750,
  },
});

export default AddTransactions;
