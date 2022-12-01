// https://school.programmers.co.kr/learn/courses/30/lessons/138476
function solution(k = 6, tangerine = [1, 3, 2, 5, 4, 5, 2, 3]) {
  let obj = {};
  let cnt = 0;
  let sum = 0;

  for (const key of tangerine) {
    if (obj.hasOwnProperty(key)) {
      obj[key] = obj[key] + 1;
    } else {
      obj[key] = 1;
    }
  }

  const valueArr = Object.values(obj).sort((a, b) => b - a);

  valueArr.forEach((v) => {
    if (sum >= k) return;

    sum += v;
    cnt++;
  });

  return cnt;
}
