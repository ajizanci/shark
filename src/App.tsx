import React from 'react';
import MarkdownRenderer from './features/MarkdownRenderer';
import Header from './features/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <h2>Hallelujah</h2>
      <MarkdownRenderer source={`~~_xunx_~~ $$\\int_0^\\infty x^2 dx$$`} />
    </div>
  );
}

export default App;
