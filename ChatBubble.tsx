import { StyleSheet, Text, View } from 'react-native';

export default function ChatBubble({ item }: any) {
  const isSelf = item.sender.self;

  return (
    <View
      style={[
        styles.container,
        isSelf ? styles.selfAlign : styles.otherAlign,
      ]}
    >
      <View
        style={[
          styles.bubble,
          isSelf ? styles.selfBubble : styles.otherBubble,
        ]}
      >
        <Text style={isSelf ? styles.nameSelf : styles.nameOther}>
          {item.sender.name}
        </Text>
        <Text style={isSelf ? styles.textSelf : styles.textOther}>
          {item.message}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    paddingHorizontal: 12,
  },
  selfAlign: {
    alignItems: 'flex-end',
  },
  otherAlign: {
    alignItems: 'flex-start',
  },
  bubble: {
    padding: 10,
    borderRadius: 12,
    maxWidth: '80%',
  },
  selfBubble: {
    backgroundColor: '#006AFF',
    borderTopRightRadius: 0,
  },
  otherBubble: {
    backgroundColor: '#F2F2F2',
    borderTopLeftRadius: 0,
  },
  nameSelf: {
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  nameOther: {
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  textSelf: {
    color: '#fff',
  },
  textOther: {
    color: '#000',
  },
});
