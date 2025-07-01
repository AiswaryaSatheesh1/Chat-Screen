import axios from 'axios';

export type ChatMessage = {
  id: number;
  message: string;
  sender: {
    name: string;
    self: boolean;
  };
  timestamp: string;
};

export const fetchChats = async (page: number = 0): Promise<{ chats: ChatMessage[] }> => {
  const response = await axios.get(`https://qa.corider.in/assignment/chat?page=${page}`);
  return response.data;
};
