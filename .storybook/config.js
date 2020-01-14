import { addDecorator, addParameters } from '@storybook/react';
import { withScreenshot } from 'storycap';

addDecorator(withScreenshot);
addParameters({
    screenshot: {
        viewport: {
            width: 1920,
            height: 1080
        }
    },
});