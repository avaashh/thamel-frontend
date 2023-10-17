import React from "react";
import AnimatedSplash from "react-native-animated-splash-screen";
import * as Font from "expo-font";

import Index from "./src/Index";
import { LogBook } from "./src/Exports";

const App = () => {
  const [loading, setLoading] = React.useState(true);

  Font.loadAsync({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    PoppinsItalic: require("./assets/fonts/Poppins-Italic.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    PoppinsBlack: require("./assets/fonts/Poppins-Black.ttf"),
  })
    .then(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    })
    .catch((err) => LogBook(err.message));

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={!loading}
      logoImage={require("./assets/logo.png")}
      backgroundColor={"#ffffff"}
      logoHeight={200}
      logoWidth={200}
    >
      {!loading ? <Index /> : <></>}
    </AnimatedSplash>
  );
};

export default App;