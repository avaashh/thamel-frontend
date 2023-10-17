import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { AntDesign } from '@expo/vector-icons'; 


export const ModernInput = () => {
  return (
    <View style={{ paddingTop: 20 }}>
      <View style={styles.searchSection}>
        <AntDesign
          style={styles.searchIcon}
          name="search1"
          size={20}
          color="#fff"
        />
        <TextInput
          style={styles.input}
          placeholder="Search all events..."
          placeholderTextColor="#fff"
          // onChangeText={console.log}
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  );
};

export const PrimaryInput = (props:any) => {
  return (
    <View style={styles.RoundLongInputContainer}>
      <View style={styles.RoundLongInputtextElement}>
        <Text style={styles.RoundLongInputtextHeader}>
          {props.title}
          {props.required ? <Text style={{ color: "red" }}> *</Text> : ""}{" "}
        </Text>

        <TextInput
          style={[
            styles.RoundLongInput,
            props.inputStyles,
            props.editable && styles.disabledInputStyle,
          ]}
          placeholder={props.placeholder}
          editable={props.editable}
          selectTextOnFocus={props.selectTextOnFocus}
          inputMode={props.inputMode}
          autoCapitalize={props.autoCapitalize}
          keyboardType={props.keyboardType}
          secureTextEntry={props.secureTextEntry}
          onChangeText={props.store}
        >
          <Text style={[styles.RoundLongInputText, props.textStyles]}>
            {props.text}
          </Text>
        </TextInput>
      </View>
    </View>
  );
};

const DisplayChars = (props:any) => {
  return (
    <View style={styles.IndieInpContainer}>
      <Text style={[styles.IndieInp, props.style]}>{props.Char}</Text>
    </View>
  );
};

export const CharInputs = (props:any) => {
  let val = props.value;

  const nInputs = Array.from({ length: props.length }, (_, index) => {
    return <DisplayChars Char={val[index]} key={index} />;
  });

  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={styles.CharInps}>
        {nInputs}

        <View style={{ width: 0, height: 0 }}>
          <TextInput
            style={{ width: 0, height: 0 }}
            autoFocus={true}
            value={val}
            onChangeText={props.submitEvent}
            inputMode={props.inputMode}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(240, 243, 244, 0.1)",
    borderRadius: 100,
    width: "95%",
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "transparent",
    color: "#fff",
  },

  RoundLongInputContainer: {
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
  },
  RoundLongInput: {
    fontFamily: "Poppins",
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderColor: "#CCD1D1",
    borderWidth: 1,
    padding: 15,
    paddingLeft: 25,
  },
  RoundLongInputText: {
    color: "#111b31",
    fontFamily: "Poppins",
  },
  RoundLongInputtextElement: {
    width: "90%",
  },
  RoundLongInputtextHeader: {
    fontFamily: "Poppins",
    fontSize: 12,
    paddingBottom: 10,
  },
  disabledInputStyle: {
    opacity: 0.5,
  },

  CharInps: {
    padding: 15,
    flexDirection: "row",
  },

  IndieInpContainer: {
    margin: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 5,
  },

  IndieInp: {
    fontFamily: "Poppins",
    fontSize: 25,
    color: "#fff",
  },
});
