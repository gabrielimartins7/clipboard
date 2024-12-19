import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121214',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 32,
      gap: 32
    },
    text: {
        color: '#0f766e',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        width: '100%',
        height: 56,
        backgroundColor: '#323238',
        color: '#ffff',
        borderRadius: 5,
        padding: 16,
    },
    button: {
        height: 56,
        width: 70,
        borderRadius: 5,
        backgroundColor: '#0f766e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    options: {
        flexDirection: 'row',
        gap: 16
    }
  });
  