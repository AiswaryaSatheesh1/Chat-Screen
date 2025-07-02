import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


const humanIcons = [
  'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',  
  'https://cdn-icons-png.flaticon.com/512/2922/2922561.png',  
  'https://cdn-icons-png.flaticon.com/512/2922/2922656.png',  
  'https://cdn-icons-png.flaticon.com/512/2922/2922688.png',  
  'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',  
];

export default function ChatBubble({ item }: any) {
  const isSelf = item?.sender?.self;
  const message = item?.message || '';

  let icon: string | null = null;

  if (!isSelf) {

    const useCoriderIcon = Math.random() < 0.5;
    icon = useCoriderIcon
      ? 'https://corider.in/favicon.ico'
      : humanIcons[Math.floor(Math.random() * humanIcons.length)];
  }

  return (
    <View style={[styles.row, isSelf ? styles.rowSelf : styles.rowOther]}>
      {!isSelf && icon && <Image source={{ uri: icon }} style={styles.icon} />}
      <View style={[styles.bubble, isSelf ? styles.selfBubble : styles.otherBubble]}>
        <Text style={[styles.text, isSelf ? styles.textSelf : styles.textOther]}>
          {message}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
  flexDirection: 'row',
  gap: 16,
  alignItems: 'flex-start',
  paddingHorizontal: 12,
  marginVertical: 4,
},

  rowSelf: {
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse',
  },
  rowOther: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  icon: {
  width: 30,
  height: 30,
  borderRadius: 999,
  marginTop: 6,
  marginRight: 1,
},

bubble: {
  width: 287,
  height: 70,
  padding: 8,
  borderTopRightRadius: 12,
  borderBottomRightRadius: 12,
  borderBottomLeftRadius: 12,
  backgroundColor: '#FFFFFF',

  
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.08, 
  shadowRadius: 8,

  
  elevation: 4,
},



  selfBubble: {
    backgroundColor: '#006AFF',
    borderTopRightRadius: 0,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  otherBubble: {
    backgroundColor: '#F2F2F2',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  text: {
    fontSize: 14,
  },
  textSelf: {
    color: '#fff',
  },
  textOther: {
    color: '#000',
  },
});
