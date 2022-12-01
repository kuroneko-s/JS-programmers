// https://school.programmers.co.kr/learn/courses/30/lessons/136798
function solution(number = 10, limit = 3, power = 2) {
  const resultArr = new Array(number + 1).fill(1).map((_, i) => getNumber(i));
  resultArr.shift();

  const resultNum = resultArr.reduce((a, c) => {
    if (c > limit) {
      return a + power;
    }

    return a + c;
  });

  return resultNum;
}

function getNumber(target) {
  let set = new Set();

  if (target === 1) return 1;

  for (let i = 1; i <= target / 2 + 1; i++) {
    if (target % i === 0) {
      set.add(i);
      set.add(target / i);
    }
  }

  return set.size;
}

console.log("🚀 ~ file: text.js:36 ~ solution()", solution());
