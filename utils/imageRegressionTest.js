import ReactDOM from "react-dom";
import getComponentImage from "./getComponentImage";
import React from "react";
import {ComponentTester} from "./ComponentTester";

export const imageRegressionTest = async (component) => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    ReactDOM.render(<ComponentTester component={component} />, div);
    const screenshot = await getComponentImage();
    expect(screenshot).toMatchImageSnapshot();

    document.body.removeChild(div);
};