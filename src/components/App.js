// import './App.css';
import Header from './Header';
import Footer from './Footer';
import React from 'react';
import StarControl from './StarControl';

function App() {
  return (
    <div>
      <React.Fragment>
        <div>
          <Header />
          <StarControl />
          <Footer />
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;
