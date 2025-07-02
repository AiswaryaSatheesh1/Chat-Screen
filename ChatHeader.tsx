import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
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

const GroupAvatar = () => {
  const icons = [
    'https://randomuser.me/api/portraits/men/32.jpg',
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/men/65.jpg',
    'https://randomuser.me/api/portraits/women/68.jpg',
  ];
  return (
    <View style={styles.groupAvatar}>
      {icons.map((uri, index) => (
        <Image key={index} source={{ uri }} style={styles.gridImage} />
      ))}
    </View>
  );
};

export default function ChatHeader() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  return (
    <>
      <View style={styles.container}>
        
        <View style={styles.topRow}>
          <View style={styles.leftSide}>
            <TouchableOpacity onPress={() => router.back()}>
              <AntDesign name="arrowleft" size={28} color="black" />
            </TouchableOpacity>

            <View style={styles.tripBox}>
              <Text style={styles.tripText}>Trip 1</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.editSquare}>
            <Feather name="edit" size={20} color="black" />
          </TouchableOpacity>
        </View>

       
        <View style={styles.bottomRowWrapper}>
          <View style={styles.bottomRow}>
            <GroupAvatar />
            <View style={styles.routeContainer}>
              <Text style={styles.route}>
                From <Text style={styles.bold}>IGI Airport, T3</Text>
              </Text>
              <Text style={styles.route}>
                To <Text style={styles.bold}>Sector 28</Text>
              </Text>
            </View>
          </View>

          <TouchableOpacity onPress={() => setVisible(true)} style={styles.menuIcon}>
            <Entypo name="dots-three-vertical" size={20} color="black" />
          </TouchableOpacity>
        </View>
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
              <Feather name="phone" size={18} color="#000" />
              <Text style={styles.Text}>Share Number</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Item}>
              <MaterialCommunityIcons name="message-alert-outline" size={20} color="#000" />
              <Text style={styles.Text}>Report</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 8,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 30,
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tripBox: {
    width: 275,
    height: 30,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  tripText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  editSquare: {
    width: 32,
    height: 32,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    
  },

  bottomRowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },

  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 307,
    height: 48,
  },

  groupAvatar: {
    width: 42,
    height: 42,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 21,
    overflow: 'hidden',
    marginRight: 16, 
  },
  gridImage: {
    width: 21,
    height: 21,
  },

  routeContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  route: {
    fontSize: 13,
    color: '#555',
  },
  bold: {
    fontWeight: 'bold',
    color: '#000',
  },
  menuIcon: {
    paddingHorizontal: 6,
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
