import {imageRegressionTest} from "../../../utils/imageRegressionTest";
import React from "react";
import {FormBuilderHeader} from "./FormBuilderHeader";

describe('<FormBuilderHeader /> desktop image regression', () => {

    jest.setTimeout(10000);

    it('renders without props', async () => {
        await imageRegressionTest(<FormBuilderHeader />)
    });

});