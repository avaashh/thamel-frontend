import React from "react";
import {
  View,
  ImageBackground,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";

import EventPage from "../pages/EventPage";

const Event = (props: any) => {
  const [isVisible, setIsVisible] = React.useState(false);

  let view = 0;
  for (let i = 0; i < props.tags.length; i++) {
    if (props.tagSet.includes(props.tags[i])) view++;
  }

  if (view === 0) return <></>;

  return (
    <View>
      <TouchableOpacity
        style={{
          padding: 5,
          overflow: "hidden",

          borderRadius: 50,
        }}
        onPress={() => setIsVisible(!isVisible)}
      >
        <ImageBackground
          source={{
            uri: props.img,
          }}
          resizeMode="cover"
          // imageStyle={{ borderRadius: 35 }}
          style={{
            aspectRatio: 1.5,
            width: "100%",
          }}
        >
          <View
            style={{
              backgroundColor: "rgba(21, 25, 26, 0.8)",
              height: 50,
              width: 50,
              top: 20,
              right: 20,
              position: "absolute",
              borderRadius: 100,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontFamily: "PoppinsBold", color: "#fff" }}>
                {props.date}
              </Text>
              <Text
                style={{ fontFamily: "Poppins", color: "#fff", fontSize: 10 }}
              >
                {props.month}
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "rgba(21, 25, 26, 0.8)",
              height: 60,
              bottom: 0,
              position: "absolute",
              width: "97%",
            }}
          >
            <View
              style={{
                width: "100%",
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  padding: 15,
                  fontFamily: "PoppinsBold",
                }}
              >
                {props.title}
              </Text>

              <Pressable
                style={{
                  width: 50,
                  height: 35,
                  backgroundColor: "#fff",
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 0,
                }}
              >
                <Text>RSVP</Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>

      <EventPage
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        details={props}
      />
    </View>
  );
};

export default Event;
