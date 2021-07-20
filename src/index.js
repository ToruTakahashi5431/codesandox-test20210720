// const num = '1300';

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力して下さい。';
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています。" : "許容範囲ないです。";
};

console.log(checkSum(50, 6));
