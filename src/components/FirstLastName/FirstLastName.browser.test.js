import React from 'react';
import {FirstLastName} from "./FirstLastName";
import {imageRegressionTest} from "../../../utils/imageRegressionTest";

describe('<FirstLastName /> desktop image regression', () => {

    jest.setTimeout(10000);

    it('renders without props', async () => {
        await imageRegressionTest(<FirstLastName />)
    });

    it('renders with props', async () => {
        await imageRegressionTest(<FirstLastName label={'My label'} firstNameRequired={true} lastNameRequired={true} firstNameValidation={true} lastNameValidation={true} />);
    });

});