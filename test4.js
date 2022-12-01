// https://school.programmers.co.kr/learn/courses/30/lessons/135808
// 내코드
function solution(k = 3, m = 4, score = [1, 2, 3, 1, 2, 3, 1]) {
  const obj = {};
  let result = 0;
  let namousi = 0;

  score.forEach((v) => (obj[v] = obj.hasOwnProperty(v) ? obj[v] + 1 : 1));

  Object.keys(obj)
    .reverse()
    .forEach((v) => {
      const value = obj[v] + namousi;
      result += v * m * Math.floor(value / m);
      namousi = value % m !== 0 ? value % m : 0;
    });

  return result;
}

// 오졌다.
const solution1 = (_, m, s) =>
  s
    .sort()
    .filter((_, i) => !((s.length - i) % m))
    .reduce((a, v) => a + v, 0) * m;

// 아이디어 좋다
function solution2(k, m, score) {
  let answer = 0;
  const sortedScore = score
    .slice()
    .sort((a, b) => a - b)
    .slice(score.length % m);
  for (let i = 0; i < sortedScore.length; i += m) {
    answer += sortedScore[i] * m;
  }
  return answer;
}
