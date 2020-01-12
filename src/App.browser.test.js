import {imageRegressionTest} from "../utils/imageRegressionTest";
import React from "react";
import App from "./App";

describe('<App /> desktop image regression', () => {

    jest.setTimeout(10000);

    it('renders without props', async () => {
        await imageRegressionTest(<App />)
    });

});