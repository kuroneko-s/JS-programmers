// https://school.programmers.co.kr/learn/courses/30/lessons/138477?language=javascript#
// 내답안
function solution(
  k = 4,
  score = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]
) {
  let answer = []; // 명예의 전당
  let result = []; // 결과 값
  const LAST_ARR = k - 1;

  for (const value of score) {
    if (answer.length < k) {
      answer.push(value);
      answer.sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));
      result.push(answer[answer.length - 1]);

      continue;
    }

    let min = answer[LAST_ARR]; // 명예의 전당에서 제일 작은 값

    if (value > min) {
      answer[LAST_ARR] = value;
      answer.sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));
    }

    result.push(answer[LAST_ARR]);
  }

  return result;
}

const result = solution();

// 오우
function solution2(
  k = 4,
  score = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]
) {
  const stack = [];
  return score.reduce((a, c) => {
    if (stack.length < k) {
      stack.push(c);
      stack.sort((a, b) => a - b);
    } else {
      stack.push(c);
      stack.sort((a, b) => a - b);
      stack.shift();
    }
    a.push(stack[0]);
    return a;
  }, []);
}
console.log(solution2());
