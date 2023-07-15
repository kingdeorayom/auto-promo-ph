import * as Yup from 'yup'

export const add_vehicle = Yup.object().shape({
    name:
        Yup.string()
            .required()
            .label("Vehicle Name"),
    description:
        Yup.string()
            .required()
            .label("Description"),
    brand:
        Yup.string()
            .required()
            .label("Brand"),
    model:
        Yup.string()
            .required()
            .label("Model"),
    bodyType:
        Yup.string()
            .required()
            .label("Body Type"),
    fuelType:
        Yup.string()
            .required()
            .label("Fuel Type"),
    year:
        Yup.string()
            .required()
            .label("Year"),
    unitPrice:
        Yup.string()
            .required()
            .label("Unit Price")
            .matches(/^[0-9]*$/, "This field only accepts numerical values"),
    netPrice:
        Yup.string()
            .required()
            .label("Unit Price")
            .matches(/^[0-9]*$/, "This field only accepts numerical values"),
    downpayment:
        Yup.string()
            .required()
            .label("Net Price")
            .matches(/^[0-9]*$/, "This field only accepts numerical values"),
    amortization:
        Yup.string()
            .required()
            .label("Unit Price")
            .matches(/^[0-9]*$/, "This field only accepts numerical values"),
    transmissionType:
        Yup.string()
            .required()
            .label("Year"),
});