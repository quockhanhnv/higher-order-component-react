import React from 'react';
import './App.css';
import AwesomeImage from './components/AwesomeImage';
import HoverOpacity from './components/HoverOpacity';

import withHoverOpacity from './components/withHoverOpacity';

const HoverOpacityAwesomeImage = withHoverOpacity(AwesomeImage);

function App() {
  return (
    <div className="App">
      <HoverOpacity>
        <AwesomeImage src="https://picsum.photos/200/300" />
      </HoverOpacity>

      <h1>Higher Order Component</h1> <br/>
      <HoverOpacityAwesomeImage src="https://picsum.photos/200/300" />
    </div>
  );
}

export default App;
