import {imageRegressionTest} from "../../../utils/imageRegressionTest";
import React from "react";
import {ComponentPicker} from "./ComponentPicker";

describe('<ComponentPicker /> desktop image regression', () => {

    jest.setTimeout(10000);

    it('renders without props', async () => {
        await imageRegressionTest(<ComponentPicker />)
    });

});