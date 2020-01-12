import {imageRegressionTest} from "../../../utils/imageRegressionTest";
import React from "react";
import {FormBuilderFooter} from "./FormBuilderFooter";

describe('<FormBuilderFooter /> desktop image regression', () => {

    jest.setTimeout(10000);

    it('renders without props', async () => {
        await imageRegressionTest(<FormBuilderFooter />)
    });

});