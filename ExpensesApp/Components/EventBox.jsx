import React, { useState, useEffect } from "react";
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
} from "react-native";
import COLORS from "../colors";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal from "react-native-modal";

export default function EventBox({ event, deleteEvent, openEvent }) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  function confirmDelete() {
    toggleModal();
  }

  function removeEvent() {
    deleteEvent();
    toggleModal();
  }
  return (
    <View
      style={{
        height: 60,
        borderWidth: 2,
        borderRadius: Border.br_mini,
        backgroundColor: Color.colorDarkslategray_100,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 6,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: COLORS.white,
          fontSize: 16,
          fontWeight: "700",
          marginVertical: 12,
        }}
      >
        {event.name}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: Color.colorSalmon,
          height: 40,
          paddingHorizontal: 8,
          borderRadius: 6,
          position: "absolute",
          left: "50%",
        }}
        onPress={() => confirmDelete(event)}
      >
        <Text
          style={{
            color: Color.colorBlack,
            fontSize: 18,
            fontFamily: FontFamily.interBold,
            fontWeight: "700",
            marginVertical: 10,
            marginHorizontal: 6,
          }}
        >
          Delete
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: Color.colorSalmon,
          height: 40,
          paddingHorizontal: 8,
          borderRadius: 6,
          position: "absolute",
          left: "80%",
        }}
        onPress={() => openEvent(event)}
      >
        <Text
          style={{
            color: Color.colorBlack,
            fontSize: 18,
            fontFamily: FontFamily.interBold,
            fontWeight: "700",
            marginVertical: 8,
            marginHorizontal: 6,
          }}
        >
          Open
        </Text>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View
          style={{
            backgroundColor: "#1a121a",
            height: 160,
            paddingHorizontal: 20,
            paddingVertical: 20,
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "800",
              color: COLORS.white,
            }}
          >
            Are you Sure to Delete {event.name} ?
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 25,
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.mahroon,
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderRadius: 10,
              }}
              onPress={removeEvent}
            >
              <Text style={{ color: COLORS.white, fontSize: 18 }}>
                Yes, Sure
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.darkGreen,
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderRadius: 10,
              }}
              onPress={toggleModal}
            >
              <Text style={{ color: COLORS.white, fontSize: 18 }}>
                No, Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
