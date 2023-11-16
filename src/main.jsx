import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from '@apollo/client';
import client from './Config/apollo.js';
import { Provider } from 'react-redux';
import store from './Redux/Store.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Provider store={store}>
      <App />
      </Provider>
    </ApolloProvider>
  </BrowserRouter>
  ,
)
