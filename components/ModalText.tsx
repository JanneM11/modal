import React from "react";
import { Modal, StyleSheet, Pressable, Text, View , Alert} from "react-native";

interface ModalTextProps {
    visible: boolean;
    onClose: () => void;
}

const ModalText: React.FC<ModalTextProps> = ({
    visible,
    onClose
}) => (
  <Modal
    animationType='slide'
    transparent={true}
    visible={visible}
    onRequestClose={() => {
      Alert.alert('Modal has been closed.');
      onClose();
    }}
    >
    <View style={styles.container}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>This is modal..</Text>
        <Pressable
          onPress={onClose}>
          <Text style={styles.modalTextClose}>Close</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
);

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
})

export default ModalText