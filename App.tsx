import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Modal, Alert, Pressable } from 'react-native';
import ModalText from './components/ModalText';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ModalText
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      <Pressable
        onPress={() => setModalVisible(true)}>
        <Text>Show modal message</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#aaa',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    width: '100%'
  },
  modalText: {
    marginBottom: 60,
  },
  modalTextClose: {
    fontWeight: 'bold',
  },
});
