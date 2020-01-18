import React from 'react';
import { FormBuilderHeader } from "./components/FormBuilderHeader/FormBuilderHeader";
import { FormBuilderBody } from './components/FormBuilderBody/FormBuilderBody';
import { FormBuilderFooter } from './components/FormBuilderFooter/FormBuilderFooter';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <>
      <div className="App" style={{minHeight: '100vh'}}>
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
      </>
  );
}

export default App;
