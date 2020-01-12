import {imageRegressionTest} from "../../../utils/imageRegressionTest";
import React from "react";
import {FormBuilderBody} from "./FormBuilderBody";

describe('<FormBuilderBody /> desktop image regression', () => {

    jest.setTimeout(10000);

    it('renders without props', async () => {
        await imageRegressionTest(<FormBuilderBody />)
    });

});