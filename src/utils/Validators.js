const nameTester = (value) => {
    const regex = RegExp(`^[a-zA-Z]+(([',.-][a-zA-Z ])?[a-zA-Z]*)*$`);
    if(value.length === 0)
        return undefined;
    else return regex.test(value);
}

const DefaultValidation = {test: () => {return undefined}, message: ''}

const FirstNameValidation = {test: nameTester, message: 'Please enter a valid first name.'}

const LastNameValidation = {test: nameTester, message: 'Please enter a valid last name.'}

export {DefaultValidation, FirstNameValidation, LastNameValidation}