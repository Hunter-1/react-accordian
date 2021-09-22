import React from 'react';
import Accordion from "./Accordion"

const content = [
  {
    front: 'title 1',
    back: 'text 1'
  },
  {
    front: 'title 2',
    back: 'text 2'
  },
  {
    front: 'title 3',
    back: 'text 3'
  }
]
function App() {
  return (<Accordion  items={content} />
  );
}
export default App;
