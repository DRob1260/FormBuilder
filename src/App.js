import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormBuilderHeader } from "./components/FormBuilderHeader/FormBuilderHeader";
import { FormBuilderBody } from './components/FormBuilderBody/FormBuilderBody';
import { FormBuilderFooter } from './components/FormBuilderFooter/FormBuilderFooter';

function App() {
  return (
      <div className="App">
        <div id={'formBuilderHeader'}>
            <FormBuilderHeader/>
        </div>
        <div id={'formBuilderBody'}>
            <FormBuilderBody/>
        </div>
        <div id={'formBuilderFooter'}>
            <FormBuilderFooter/>
        </div>
      </div>
  );
}

export default App;
