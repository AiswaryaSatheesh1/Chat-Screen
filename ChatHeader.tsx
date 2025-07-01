import { AntDesign, Entypo, Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ChatHeader() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  return (
    <>
      <View style={styles.header}>
    
        <View style={styles.leftSection}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>

          <Image
            source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
            style={styles.avatar}
          />

          <View style={styles.tripInfo}>
            <Text style={styles.trip}>Trip 1</Text>
            <Text style={styles.route}>
              From <Text style={styles.bold}>IGI Airport, T3</Text>
            </Text>
            <Text style={styles.route}>
              To <Text style={styles.bold}>Sector 28</Text>
            </Text>
          </View>
        </View>

        {/* 3-dot menu */}
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Entypo name="dots-three-vertical" size={20} />
        </TouchableOpacity>
      </View>

      <Modal
        transparent
        visible={visible}
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <Pressable style={styles.overlay} onPress={() => setVisible(false)}>
          <View style={styles.menu}>
            <TouchableOpacity style={styles.Item}>
              <FontAwesome5 name="user-friends" size={18} color="#000" />
              <Text style={styles.Text}>Members</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Item}>
              <Feather name="share-2" size={18} color="#000" />
              <Text style={styles.Text}>Share Number</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Item}>
              <MaterialIcons name="report" size={20} color="red" />
              <Text style={[styles.Text, { color: 'red' }]}>Report</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  backButton: {
    marginRight: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  tripInfo: {
    flexDirection: 'column',
    flexShrink: 1,
  },
  trip: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  route: {
    fontSize: 13,
    color: '#555',
  },
  bold: {
    fontWeight: 'bold',
    color: '#000',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 80,
    paddingRight: 20,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  menu: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 8,
    width: 180,
    elevation: 5,
  },
  Item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    gap: 10,
  },
  Text: {
    fontSize: 16,
    color: '#000',
  },
});
