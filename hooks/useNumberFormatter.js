import numbro from "numbro";

const useNumberFormatter = (value) => {

    return numbro(value).format({
        spaceSeparated: true,
        thousandSeparated: true,
        mantissa: 2
    });
};

export default useNumberFormatter;