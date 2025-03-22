import { Store } from './store';
import OpenAI from 'openai';

const defaultMessages = [
  {
    role: 'assistant',
    content: '안녕하세요! 원하는 지역의 정보를 알려드릴게요. 어떤 걸 찾고 계신가요?',
  },
];

const store = new Store({
  chatText: '',
  messages: defaultMessages,
  loading: false,
});

export default store;

export const sendMessages = async () => {
  if (!store.state.chatText.trim()) return;
  if (store.state.loading) return;

  store.state.loading = true;
  store.state.messages = [...store.state.messages, { role: 'user', content: store.state.chatText }];

  try {
    const openai = new OpenAI({
      apiKey: import.meta.env.VITE_OPENAI_APIKEY,
      dangerouslyAllowBrowser: true,
    });

    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: store.state.messages,
    });

    store.state.messages = [...store.state.messages, chatCompletion.choices[0].message];
    store.state.chatText = '';
  } catch (error) {
    console.error('Error sending message:', error);
  } finally {
    store.state.loading = false;
  }
};

export const resetMessages = () => {
  store.state.messages = defaultMessages;
};
