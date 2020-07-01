import React from 'react';
import Form from './components/form'
import Linktemplate from './components/linkTemplate.jsx';

function App() {
  return (
    <div className="container">
    <Form/>
    <Linktemplate chinaapp="tiktok" altapp="roposo"/>
    </div>
  );
}

export default App;
