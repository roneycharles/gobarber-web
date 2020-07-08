import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';

import AppProvider from './hooks';
// import SignUp from './pages/SignUp';

const App: React.FunctionComponent = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>
    {/* <SignUp /> */}
    <GlobalStyle />
  </>
);
export default App;
