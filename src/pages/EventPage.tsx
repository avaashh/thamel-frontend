import React from "react";

import { BackGroundPrimary, BackGroundSecondary } from "../Exports";
import { LinearGradient } from "expo-linear-gradient";

import {
  View,
  Text,
  Pressable,
  Modal,
  StyleSheet,
  Image,
  ViewBase,
  ScrollView,
} from "react-native";

import { AntDesign } from '@expo/vector-icons'; 


const EventPage = (props:any) => {
  const content = props.details.content
    ? props.details.content
    : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\
  enim ad minim veniam, quis nostrud exercitation ullamco laboris\
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\
  reprehenderit in voluptate velit esse cillum dolore eu fugiat\
  nulla pariatur. Excepteur sint occaecat cupidatat non proident,\
  sunt in culpa qui officia deserunt mollit anim id est laborum.\
  \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit,\
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris\
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\
  reprehenderit in voluptate velit esse cillum dolore eu fugiat\
  nulla pariatur. Excepteur sint occaecat cupidatat non proident,\
  sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.isVisible}
      onRequestClose={() => {
        props.setIsVisible(!props.isVisible);
      }}
    >
      <View style={[styles.pasteContainer]}>
        <LinearGradient
          // Background Linear Gradient
          colors={[BackGroundPrimary, BackGroundSecondary]}
          style={styles.background}
        />

        <View
          style={{
            flex: 0,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Pressable
            style={styles.buttonClose}
            onPress={() => props.setIsVisible(!props.isVisible)}
          >
            <AntDesign name="left" color={"#fff"} size={26} />
          </Pressable>
          <Text style={styles.heading}>{props.details.title}</Text>
          <Pressable style={styles.buttonClose}>
            <AntDesign name="sharealt" color={"#fff"} size={26} />
          </Pressable>
        </View>

        <Image
          source={{
            uri: props.details.img,
          }}
          style={{
            aspectRatio: 1.5,
            width: "100%",
            borderRadius: 35,
          }}
        />

        <View
          style={{
            flex: 0,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={styles.heading}>
              {"\n"}
              {props.details.title}
            </Text>
            <Text style={styles.subheading}>
              {props.details.date} {props.details.month}
              {"\n"}
            </Text>
          </View>
          <Pressable style={styles.buttonClose}>
            <AntDesign name="calendar" color={"#fff"} size={26} />
          </Pressable>
        </View>

        <View style={{ height: "30%" }}>
          <ScrollView>
            <Text style={styles.subheading}>{content}</Text>
          </ScrollView>
        </View>

        <View
          style={{
            flex: 0,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Pressable style={[styles.pasteItemButton, { width: "20%" }]}>
            <View
              style={{
                flex: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign name="heart" color={"#fff"} size={26} />
            </View>
          </Pressable>

          <Pressable style={[styles.pasteItemButton, { width: "60%" }]}>
            <Text
              style={[
                styles.heading,
                { textAlign: "center", color: "white", fontSize: 15 },
              ]}
            >
              RSVP
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default EventPage;

const styles = StyleSheet.create({
  pasteContainer: {
    top: 0,
    height: "100%",
    // width: "100%",
    margin: 10,
    borderRadius: 20,
    // paddingTop: 40,
    // padding: 10,
    marginTop: 40,
    // alignItems: "center",
  },
  button: {
    height: 75,
    width: 75,
    borderRadius: 100,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontFamily: "PoppinsBold",
    fontSize: 18,
    textAlign: "left",
    paddingLeft: 5,
    color: "#fff",
  },
  subheading: {
    fontFamily: "Poppins",
    fontSize: 12,
    paddingLeft: 5,
    textAlign: "left",
    color: "#fff",
  },
  inputInfo: {
    fontFamily: "Poppins",
    fontSize: 12,
    paddingLeft: 5,
    padding: 15,
    textAlign: "left",
  },
  buttonCreate: {
    backgroundColor: "#3369ff",
  },
  buttonClose: {
    backgroundColor: "rgba(21, 25, 26, 0.4)",
    padding: 10,
    margin: 10,
    borderRadius: 100,
  },
  closeText: {
    fontSize: 15,
    fontFamily: "PoppinsBlack",
    color: "#c5c4c7",
  },
  addSymb: {
    fontSize: 35,
    color: "#ffffff",
  },
  nameHolder: {
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    padding: 15,
  },
  pasteItemButton: {
    height: 55,
    justifyContent: "center",
    padding: 5,
    backgroundColor: "#ff4654",
    marginTop: 15,
    borderRadius: 75,
  },
  pasteItemText: {
    color: "#ffffff",
  },
  fetchedCopy: {
    width: "100%",
    height: "40%",
    borderWidth: 2,
    borderRadius: 15,
    padding: 15,
    marginTop: 10,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});
