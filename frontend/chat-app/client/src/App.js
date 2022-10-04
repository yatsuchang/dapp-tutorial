import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Join from './components/Join';
import Chat from './components/Chat';

// react-router-dom v6 寫法有變化
// https://stackoverflow.com/questions/69832748/error-error-a-route-is-only-ever-to-be-used-as-the-child-of-routes-element
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Join />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
