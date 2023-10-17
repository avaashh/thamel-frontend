import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { BackGroundPrimary, BackGroundSecondary } from "../Exports";
import { Foundation, Ionicons } from '@expo/vector-icons'; 

import { ModernInput } from "../components/Inputs";
import { PrimaryButton } from "../components/Buttons";

import Event from "../components/Event";

const DATA = [
  {
    id: 1,
    title: "ISO Cultural Evening",
    date: "14",
    month: "Apr",
    img: "https://www.grinnell.edu/sites/default/files/styles/carousel__image_feature/public/images/2022-10/20180421.ISOculturalevent-162.jpg?h=7b3172d0&itok=a-sacJkO",
    tags: ["All", "Popular", "AllCampus"],
  },
  {
    id: 2,
    title: "HackGC Presentations",
    date: "14",
    month: "Apr",
    img: "https://www.grinnell.edu/sites/default/files/styles/carousel__image_feature/public/images/2019-07/HackGC%20Pic-1.jpg?h=54593c66&itok=B9ttBRy7",
    tags: ["All", "Drinks", "AllCampus"],
  },
  {
    id: 3,
    title: "Computer Science Table",
    date: "18",
    month: "Apr",
    img: "https://walker.cs.grinnell.edu/csdept-working/photos/original-photos/tutorial-3.jpg",
    tags: ["All", "Drinks"],
  },
  {
    id: 4,
    title: "Yoga in the Museum",
    date: "18",
    month: "Apr",
    img: "https://snworksceo.imgix.net/enn/f9b62bcf-a5cf-40dd-a361-c4d901e4a39f.sized-1000x1000.jpg?w=1000",
    tags: ["All", "Popular"],
  },
  {
    id: 5,
    title: "Foreign Secretary Visit",
    date: "20",
    month: "Apr",
    img: "https://bloximages.newyork1.vip.townnews.com/indiaabroad.com/content/tncms/assets/v3/editorial/f/e4/fe4daa1a-2aec-11ea-aadd-03b5f694f5a9/5e09ce02a8f7a.image.jpg",
    tags: ["All", "Popular", "AllCampus"],
  },
  {
    id: 6,
    title: "W@G: Author Raven Leilani",
    date: "20",
    month: "Apr",
    img: "https://media.newyorker.com/photos/5f2b23800e24ae88acfd03d0/1:1/w_2009,h_2009,c_limit/200817_r36847.jpg",
    tags: ["All", "Reading"],
  },
  {
    id: 7,
    title: "Bird Club Film Screening",
    date: "18",
    month: "Apr",
    img: "https://www.justwatch.com/images/backdrop/243856367/s640/the-big-year",
    tags: ["All", "Birds"],
    content: `HSSC A2231 - Auditorium\nTuesday, April 18, 2023, 7:30 - 8PM\n\n\
The birders (+ friends) of Grinnell will watch a beautiful and \
beautifully comedic film concerning the competitiveness in the \
birding community very seriously.`,
  },
];

const HomeScreen = (props:any) => {
  const [tags, setTags] = React.useState("");

  const TagFunc = (whichTag:string) => {
    let tmp = tags;
    if (tmp.includes(whichTag + ";")) tmp = tmp.replaceAll(whichTag + ";", "");
    else tmp += whichTag + ";";
    setTags(tmp);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={[BackGroundPrimary, BackGroundSecondary]}
        style={styles.background}
      />

      <View style={styles.App}>
        <View
          style={{
            flex: 0,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <Ionicons name="menu" size={26} color={"#fff"} />
          <Text style={styles.header}> {"April 18, 2023"} </Text>
          <Foundation name="magnifying-glass" size={26} color={"#fff"} />

        </View>
        <ModernInput />

        <View style={styles.feed}>
          <View
            style={{
              flex: 0,
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={styles.upcoming}>Upcoming events</Text>
            <Text style={styles.upcoming}>See All</Text>
          </View>

          <View
            style={{
              flex: 0,
              width: "100%",
              flexDirection: "row",
              height: 80,
              paddingTop: 15,
            }}
          >
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <PrimaryButton
                title={"Popular"}
                icon={"caretup"}
                event={() => TagFunc("Popular")}
              />
              <PrimaryButton
                title={"All Campus Events"}
                icon={"notification"}
                event={() => TagFunc("AllCampus")}
              />
              <PrimaryButton
                title={"Birds"}
                icon={"dingding"}
                event={() => TagFunc("Birds")}
              />
              {/* <PrimaryButton
                title={"Drinks"}
                icon={"rest"}
                event={() => TagFunc("Drinks")}
              /> */}
              <PrimaryButton
                title={"Events by Department"}
                icon={"book"}
                event={() => TagFunc("Reading")}
              />
              <PrimaryButton
                title={"Events by Category"}
                icon={"book"}
                event={() => TagFunc("xxx")}
              />
              <PrimaryButton
                title={"Alphabetical Order"}
                icon={"book"}
                event={() => TagFunc("xxx")}
              />
            </ScrollView>
          </View>

          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <Event
                id={item.id}
                title={item.title}
                date={item.date}
                month={item.month}
                img={item.img}
                tags={item.tags}
                content={item.content}
                tagSet={tags.length > 0 ? tags : "All"}
              />
            )}
            // keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
  App: {
    padding: 10,
    paddingTop: 50,
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  upcoming: {
    fontFamily: "Poppins",
    color: "#fff",
    fontSize: 12,
  },
  feed: {
    paddingTop: 20,
    flex: 1,

    width: "95%",

    // borderWidth: 1,
    // borderColor: "#fff",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  header: {
    fontFamily: "PoppinsBold",
    color: "#fff",
    fontSize: 18,
  },
});
