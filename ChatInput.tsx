import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ChatInput() {
  const [showOptions, setShowOptions] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <TextInput
          placeholder="Type a message..."
          value={message}
          onChangeText={setMessage}
          style={styles.input}
          placeholderTextColor="#666"
        />

        <TouchableOpacity onPress={() => setShowOptions(true)} style={styles.Button}>
          <Feather name="paperclip" size={22} color="green" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.Button}>
          <Ionicons name="send" size={22} color="green" />
        </TouchableOpacity>
      </KeyboardAvoidingView>

      
      <Modal
        transparent
        visible={showOptions}
        animationType="fade"
        onRequestClose={() => setShowOptions(false)}
      >
        <Pressable style={styles.Overlay} onPress={() => setShowOptions(false)}>
          <View style={styles.Box}>
            <TouchableOpacity style={styles.Option}>
              <Ionicons name="camera" size={22} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.Option}>
              <MaterialIcons name="videocam" size={22} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.Option}>
              <Feather name="file" size={22} color="black" />
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    left: 10,
    right: 10,
    width: '100%',
    backgroundColor: '#fff',
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    color: '#000',
  },
  Button: {
    padding: 6,
  },
  Overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 60,
    paddingRight: 20,
  },
  Box: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    flexDirection: 'row',
    gap: 16,
    elevation: 4,
  },
  Option: {
    padding: 8,
  },
});
