import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { styles } from "./CreateNewPasswordStyle";
import Background from "../../Background";

const CreateNewPassword = () => {
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    // Handle submitting new password
  };

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Create New Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter new password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm new password"
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Save Password</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};
export default CreateNewPassword;
