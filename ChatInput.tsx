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
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Reply to @Rohit Yadav"
            value={message}
            onChangeText={setMessage}
            placeholderTextColor="#999"
            style={styles.input}
          />
          <View style={styles.iconGroup}>
            <TouchableOpacity
  onPress={() => setShowOptions(true)}
  style={[styles.Button, { marginRight: 6 }]}
>
              <Feather name="paperclip" size={22} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="send" size={22} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>

      <Modal
        transparent
        visible={showOptions}
        animationType="fade"
        onRequestClose={() => setShowOptions(false)}
      >
        <Pressable style={styles.Overlay} onPress={() => setShowOptions(false)}>
          <View style={styles.AttachmentWrapper}>
            <View style={styles.Popup}>
              <View style={styles.Box}>
                <TouchableOpacity style={styles.Option}>
                  <Ionicons name="camera" size={22} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.Option}>
                  <MaterialIcons name="videocam" size={22} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.Option}>
                  <Feather name="file" size={22} color="white" />
                </TouchableOpacity>
              </View>
              <View style={styles.Triangle} />
            </View>
          </View>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
container: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 8,
  backgroundColor: '#fff',
  borderTopWidth: 1,
  borderColor: '#ddd',
},

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 32,
    paddingVertical: 14,
    paddingHorizontal: 18,
    width: '95%',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingRight: 12,
  },
   Button: {
    padding: 6,
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  Overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  AttachmentWrapper: {
    position: 'absolute',
    bottom: 85,
    right: 10,
    alignItems: 'center',
  },
  Popup: {
    alignItems: 'center',
  },
  Box: {
    backgroundColor: '#00A859',
    borderRadius: 24,
    padding: 12,
    flexDirection: 'row',
    gap: 20,
    elevation: 4,
  },
  Option: {
    padding: 8,
  },
  Triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#00A859',
    marginTop: -1,
    alignSelf: 'center',
  },
});  
