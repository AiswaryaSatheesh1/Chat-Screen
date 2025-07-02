import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native';

import ChatBubble from '../components/ChatBubble';
import ChatHeader from '../components/ChatHeader';
import ChatInput from '../components/ChatInput';
import { ChatMessage, fetchChats } from './lib/api';

export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMessages = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    const data = await fetchChats(page);
    if (data?.chats?.length === 0) {
      setHasMore(false);
    } else {
      setMessages(prev => [...data.chats.reverse(), ...prev]);
      setPage(p => p + 1);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      
    >
      <View style={styles.container}>
        <ChatHeader />

        <FlatList
          data={[...messages].reverse()}
          renderItem={({ item }) => <ChatBubble item={item} />}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          onEndReached={loadMessages}
          onEndReachedThreshold={0.2}
          inverted
          contentContainerStyle={styles.chatContent}
          ListFooterComponent={loading ? <ActivityIndicator /> : null}
        />

        <ChatInput />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chatContent: {
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 0, 
  },
});
