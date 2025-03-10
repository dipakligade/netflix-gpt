
export const checkValidDataForSignUp = (name, email, password) => {

    email = email.trim();

    const isNameValid = /^[A-Za-z]+([ '-][A-Za-z]+)*$/.test(name);
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);



    if (!isNameValid) return "Nmae is not Valid.";
    if (!isEmailValid) return "Email Id is not valid.";
    if (!isPasswordValid) return "Password is not valid.";


    return null;
};


export const checkValidData = (email, password) => {

    email = email.trim();

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);


    if (!isEmailValid) return "Email Id is not valid.";
    if (!isPasswordValid) return "Password is not valid.";


    return null;
};