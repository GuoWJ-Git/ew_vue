type StringOrNumber = string | number;

/**
 * 千分位过滤器
 * @param {*} value 原始值
 * @param {*} fixedCount 保留小数的位数
 * @param {*} showLine 是否“-”占位
 */
export const thousandthFormat = (value: StringOrNumber, fixedCount = 0, showLine = false) => {
  // 如果没有数据，展示”-“
  if ((!value || !Number(value)) && showLine) return '-';
  const intPart = Number(value).toFixed(fixedCount); // 获取整数部分
  if ((!intPart || !Number(intPart)) && showLine) return '-';
  const intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+(\.(\d)*)?$)/g, '$1,'); // 将整数部分逢三一断，并保留小数
  return intPartFormat;
};

/**
 * 限制某个范围内的数
 * @param value 原数值
 * @param min 最小值
 * @param max 最大值
 */
export const limitRangeNum = (value: StringOrNumber, min = 1, max = 99) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  Math.max(min, Math.min(max, Number(value)));

/**
 * 判断参数是否合法（都为数值类型）
 * @param before 参数1
 * @param after 参数2
 * @returns
 */
const isParamsLegitimacy = (before: number, after: number) => {
  if (typeof before !== 'number' || typeof after !== 'number') return false;
  return true;
};

/**
 * @description 精确加法
 * @param {*} before 第一位
 * @param {*} after 第二位
 */
export function preciseAddition(before: number, after: number) {
  const isLegitimacy = isParamsLegitimacy(before, after);
  if (!isLegitimacy) return 0;
  let length1 = 0;
  let length2 = 0;
  const str1 = before.toString();
  const str2 = after.toString();
  let arg1;
  let arg2;
  try {
    length1 = str1.split('.')[1].length;
  } catch (e) {}
  try {
    length2 = str2.split('.')[1].length;
  } catch (e) {}
  const decimalDigitsDifference = Math.abs(length1 - length2);
  const convertIntegerAuxiliary = 10 ** Math.max(length1, length2);
  if (decimalDigitsDifference > 0) {
    const differenceExponential = 10 ** decimalDigitsDifference;
    if (length1 > length2) {
      arg1 = +before.toString().replace('.', '');
      arg2 = +after.toString().replace('.', '') * differenceExponential;
    } else {
      arg1 = +before.toString().replace('.', '') * differenceExponential;
      arg2 = +after.toString().replace('.', '');
    }
  } else {
    arg1 = +before.toString().replace('.', '');
    arg2 = +after.toString().replace('.', '');
  }
  return (arg1 + arg2) / convertIntegerAuxiliary;
}

/**
 * @description 精确减法
 * @param {*} before 第一位
 * @param {*} after 第二位
 */
export function preciseSubtraction(before, after) {
  const isLegitimacy = isParamsLegitimacy(before, after);
  if (!isLegitimacy) return 0;
  let length1 = 0;
  let length2 = 0;
  const str1 = before.toString();
  const str2 = after.toString();
  try {
    length1 = str1.split('.')[1].length;
  } catch (e) {}
  try {
    length2 = str2.split('.')[1].length;
  } catch (e) {}
  const convertIntegerAuxiliary = 10 ** Math.max(length1, length2);
  const maxDigitLength = length1 >= length2 ? length1 : length2;
  return +(
    (before * convertIntegerAuxiliary - after * convertIntegerAuxiliary) /
    convertIntegerAuxiliary
  ).toFixed(maxDigitLength);
}

/**
 * @description 精确乘法
 * @param {*} before 第一位
 * @param {*} after 第二位
 */
export function accurateMultiplication(before: number, after: number) {
  const isLegitimacy = isParamsLegitimacy(before, after);
  if (!isLegitimacy) return 0;
  let exponential = 0;
  const str1 = before.toString();
  const str2 = after.toString();
  try {
    exponential += str1.split('.')[1].length;
  } catch (error) {}
  try {
    exponential += str2.split('.')[1].length;
  } catch (error) {}
  const exponentiation = 10 ** exponential;
  const firstPuller = Number(str1.replace('.', ''));
  const secondPuller = Number(str2.replace('.', ''));
  return (firstPuller * secondPuller) / exponentiation;
}

/**
 * @description 精确除法
 * @param {*} before 第一位
 * @param {*} after 第二位
 */
export function exactDivision(before: number, after: number) {
  const isLegitimacy = isParamsLegitimacy(before, after);
  if (!isLegitimacy) return 0;
  let length1 = 0;
  let length2 = 0;
  const str1 = before.toString();
  const str2 = after.toString();
  try {
    length1 = str1.split('.')[1].length;
  } catch (e) {}
  try {
    length2 = str2.split('.')[1].length;
  } catch (e) {}
  const number1 = Number(before.toString().replace('.', ''));
  const number2 = Number(after.toString().replace('.', ''));
  const exponentiation = 10 ** (length2 - length1);
  return (number1 / number2) * exponentiation;
}
