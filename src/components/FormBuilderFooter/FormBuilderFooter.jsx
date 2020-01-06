import React from 'react';
import { Navbar } from 'react-bootstrap';

function FormBuilderFooter() {
    return(
       <div className={'FormBuilderHeader'}>
           <Navbar fixed={'bottom'} expand='lg' bg={'dark'} variant={'dark'}>
           </Navbar>
       </div>
    )
}

export { FormBuilderFooter }