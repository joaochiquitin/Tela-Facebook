import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.Title}>
        <Image
          source={require("../../assets/icons8-facebook-48.png")}
          style={{ width: 50, height: 50 }}
        />

        <Text style={styles.Facebook}>Facebook</Text>
      </View>

      <View style={{ marginTop: 50 }}>
        <TextInput placeholder="Email" style={styles.Inputs} />
        <TextInput placeholder="Password" style={styles.Inputs} />

        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.Entrar}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.Cadastrar}>Não tem uma conta? Cadastre-se.</Text>
    </View>
  );
}
