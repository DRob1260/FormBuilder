import { addDecorator, addParameters } from '@storybook/react';
import { withScreenshot } from 'storycap';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

addDecorator(withScreenshot);
addParameters({
    screenshot: {
        viewport: {
            width: 1920,
            height: 1080
        }
    },
});