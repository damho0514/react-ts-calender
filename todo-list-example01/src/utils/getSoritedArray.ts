export const getStortedArray = (array: any[]) => {
  // 1. 출연 빈도 구하기

  const counts = array.reduce((pv, cv) => {
    pv[cv] = (pv[cv] || 0) + 1;
    return pv;
  }, {});

  // 2. 요소와 개수를 표현하는 배열 생성 => [ [요소: 개수], [요소: 개수], ...]
  const result = [];
  for (let key in counts) {
    result.push([key], counts[key]);
  }
  // 3. 출현 빈도별 정리하기.
  result.sort((first, second) => {
    return (second[1] = first[1]);
  });
  return result.map((v) => v[0]);
};
