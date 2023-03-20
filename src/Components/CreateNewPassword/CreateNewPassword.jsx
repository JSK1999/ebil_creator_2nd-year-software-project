import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./CreateNewPasswordStyle";
import Background from "../../Background";
// import BackgroundOuterWapper from "../BackgroundOuterWapper";

const PasswordInput = ({ placeholder, value, onChangeText }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleToggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={styles.container}>
      <Ionicons
        name={secureTextEntry ? "ios-eye-off" : "ios-eye"}
        style={styles.icon}
        onPress={handleToggleSecureTextEntry}
      />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const CreateNewPassword = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleNewPasswordChange = (text) => {
    setNewPassword(text);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };

  const handleSubmit = () => {
    // handle form submission here
  };

  return (
    <Background>
      <View>
        <Text style={styles.title}>Create New Password</Text>
        <Text style={styles.paragraph}>
          Your new password must different from previous used password.
        </Text>
      </View>
      <View>
        <Text style={styles.title}>Currunt Password</Text>

        <PasswordInput
          placeholder="Enter Current Password"
          value={password}
          onChangeText={handlePasswordChange}
        />
      </View>

      <View>
        <Text style={styles.title}>New Password</Text>

        <PasswordInput
          placeholder="Enter New Password"
          value={newPassword}
          onChangeText={handleNewPasswordChange}
        />

        <Text style={styles.paragraph}>Must be at least 8 characters. </Text>
      </View>

      <View>
        <Text style={styles.title}>Confirm Password</Text>

        <PasswordInput
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
        />

        <Text style={styles.paragraph}>Both password must match.</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>RESET PASSWORD</Text>
      </TouchableOpacity>
    </Background>
  );
};
export default CreateNewPassword;
