// https://school.programmers.co.kr/learn/courses/30/lessons/134240
function solution(food) {
  food.shift();

  const result = food.map((v, idx) => {
    return String(idx + 1).repeat(Math.floor(v / 2));
  });

  return [...result, "0", ...result.reverse()].join("");
}

console.log(solution([1, 7, 1, 2]));
