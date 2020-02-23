import {DefaultValidation} from './Validators.js';

describe('Validators', () => {
    test('DefaultValidation', () => {
        DefaultValidation.test('anything') === undefined;
    });

});