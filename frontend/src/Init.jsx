import { Provider } from 'react-redux';
import store from './store/index.js';

const Init = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default Init;
