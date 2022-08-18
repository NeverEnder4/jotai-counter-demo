import numeral from "numeral";

interface NumberFormatStrings {
  counter: string;
}

export const formatNumber = (number: number, format: string) => numeral(number).format(format);

export const NUMBER_FORMAT_STRINGS: NumberFormatStrings = {
  counter: "0000",
};
