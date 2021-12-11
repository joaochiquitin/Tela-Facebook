import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#455CB1",
      padding: 20,
    },
  
    Title: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 100,
    },
  
    Facebook: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#fff',
    },
  
    Inputs: {
      width: '100%',
      height: 50,
      backgroundColor: '#fff',
      marginBottom: 30,
      borderRadius: 5,
      padding: 10,
    },
  
    Button: {
      width: '100%',
      height: 50,
      backgroundColor: '#31499e',
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },
  
    Entrar:{
      fontSize: 16,
      color: '#fff',
    },
  
    Cadastrar:{
      color: '#fff',
      textDecorationLine: 'underline',
      textAlign: 'center',
      marginTop: 50,
    }
  });
  