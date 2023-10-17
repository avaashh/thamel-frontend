import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

import { ButtonPrimary, TextPrimary } from "../Exports";
import { AntDesign } from '@expo/vector-icons'; 

export const PrimaryButton = (props:any) => {
  const [disabled, setDisabled] = React.useState(true);

  return (
    <View style={{ height: 40, paddingRight: 10 }}>
      <Pressable
        //   disabled={disabled}
        style={[
          styles.RoundLongButton,
          props.buttonStyles,
          disabled && styles.disabledBtn,
        ]}
        onPress={() => {
          setDisabled(!disabled);
          props.event();
        }}
      >
        <AntDesign name={"question"} color={"#fff"} size={20} />
        <Text style={[styles.RoundLongButtonText, props.textStyles]}>
          {"  "}
          {props.title}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  RoundLongButton: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    // width: "100%",
    height: "100%",
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "row",
    verticalAlign: "center",
    backgroundColor: ButtonPrimary,
    borderRadius: 50,
  },
  RoundLongButtonText: {
    color: TextPrimary,
    fontFamily: "Poppins",
  },
  disabledBtn: {
    opacity: 0.5,
  },
});
