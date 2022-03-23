import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as React from "react";
import { Feather } from "@expo/vector-icons";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
const _color = "#6E01EF";
const _size = 150;
export default function App() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={[styles.dot, styles.center]}>
        <TouchableOpacity style={styles.touchable}>
          {[...Array(5).keys()].map((index) => {
            return (
              <MotiView
                from={{ opacity: 0.7, scale: 1 }}
                animate={{ opacity: 0, scale: 4 }}
                transition={{
                  type: "timing",
                  duration: 4000,
                  easing: Easing.out(Easing.ease),
                  delay: index * 400,
                  repeatReverse: false,
                  loop: true,
                }}
                key={index}
                style={[StyleSheet.absoluteFillObject, styles.dot]}
              />
            );
          })}
          <Feather name="phone-outgoing" size={32} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    width: _size,
    height: _size,
    borderRadius: _size,
    backgroundColor: _color,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  touchable: {
    width: _size,
    height: _size,
    borderRadius: _size,
    alignItems: "center",
    justifyContent: "center",
  },
});
