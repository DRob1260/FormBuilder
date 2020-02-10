import React from 'react';
import {FormBuilderBody} from './components/FormBuilderBody/FormBuilderBody';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>
            <div className="App" style={{minHeight: '100vh'}}>
                <div id={'formBuilderBody'}>
                    <FormBuilderBody/>
                </div>
            </div>
        </>
    );
}

export {App};
