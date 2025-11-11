import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Modal, Alert, Pressable } from 'react-native';


export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is modal..</Text>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.modalTextClose}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
