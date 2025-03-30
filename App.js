import { useState } from "react";
import { View, Text, Image, ScrollView, Button, Modal, Alert } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ScrollView>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
        <Text>
          Hello World! This is my first React Native app. I am learning to build mobile applications using React Native.
          This is an example of a simple app that displays an image and some text. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Text>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
        <Button
          title="Click Me!"
          onPress={() => {
            setIsModalVisible(true);
            Alert.alert("Button clicked!", "You clicked the button!");
          }}
          style={{ marginTop: 20 }}
          color={"midnightblue"}
        />
        <Modal
          visible={isModalVisible}
          animationType="slide"
          presentationStyle="pageSheet"
          onRequestClose={() => {
            setIsModalVisible(false);
            alert("Modal closed!");
          }}
        >
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" }}>
            <View style={{ width: 300, height: 200, backgroundColor: "white", borderRadius: 10, padding: 20 }}>
              <Text>This is a modal!</Text>
              <Button
                title="Close Modal"
                onPress={() => {
                  setIsModalVisible(false);
                  alert("Modal closed!");
                }}
                color={"midnightblue"}
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}
