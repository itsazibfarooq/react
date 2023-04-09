import ReactDOM from 'react-dom/client';
import App from './App';
import './app.scss';
import { AuthContextProvider } from './context/authContext.js';
import { ChatContextProvider } from './context/chatContext';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <App />
    </ChatContextProvider>
  </AuthContextProvider>
);