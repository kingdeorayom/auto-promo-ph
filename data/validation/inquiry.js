import * as Yup from 'yup'

export const inquiry = Yup.object().shape({
    firstName:
        Yup.string()
            .required()
            .label("First Name"),
    lastName:
        Yup.string()
            .required()
            .label("Last Name"),
    email:
        Yup
            .string()
            .required()
            .email()
            .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "Please enter a valid email")
            .label("Email"),
    mobileNumber:
        Yup.string()
            .min(11)
            .max(11)
            .required()
            .label("Mobile Number")
            .matches(/^[0-9]*$/, "This field only accepts numerical values"),
    message:
        Yup.string()
            .required()
            .label("Message"),

});