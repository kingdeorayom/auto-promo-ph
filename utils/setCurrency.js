import numbro from "numbro";

const setCurrency = (value) => {

    return numbro(value).format({
        spaceSeparated: true,
        thousandSeparated: true,
        mantissa: 2
    });
};

export default setCurrency;