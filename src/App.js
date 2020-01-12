import React from 'react';
import './App.css';
import { FormBuilderHeader } from "./components/FormBuilderHeader/FormBuilderHeader";
import { FormBuilderBody } from './components/FormBuilderBody/FormBuilderBody';
import { FormBuilderFooter } from './components/FormBuilderFooter/FormBuilderFooter';

function App() {
  return (
      <>
      <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
      />
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
      </>
  );
}

export default App;
