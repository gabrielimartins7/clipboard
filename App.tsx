import { useEffect, useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

import * as Clipboard from 'expo-clipboard';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';

export default function App() {
  const [text, setText] = useState('');

  async function handleCopyToClipboard() {
    await Clipboard.setStringAsync(text);
  }

  async function handleGetClipboard() {
    const response = await Clipboard.getStringAsync();

    Alert.alert(response);
  }

  useEffect(() => {
    const subscription = Clipboard.addClipboardListener(({ contentTypes }: Clipboard.ClipboardEvent) => {
      Alert.alert('Copiado!', `Conteudo do tipo ${contentTypes}`);
    });

    return () => Clipboard.removeClipboardListener(subscription);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text} >Test the Clipboard function</Text>
      <TextInput style={styles.input} onChangeText={setText} />
      <View style={styles.options}>
        <TouchableOpacity style={styles.button} onPress={handleCopyToClipboard} >
          <MaterialIcons name="content-copy" size={24} color="#ffff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleGetClipboard} >
          <MaterialIcons name="content-paste" size={24} color="#ffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}