import * as Yup from 'yup'

export const login_validation = Yup.object().shape({
    email:
        Yup
            .string()
            .required()
            .email()
            .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "Please enter a valid email")
            .label("Email"),

    password:
        Yup.string()
            .required()
            .label("Password"),
});