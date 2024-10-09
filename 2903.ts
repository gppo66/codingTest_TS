
import * as fs from 'fs';

const input : number[]= fs
  .readFileSync('dev/stdin')
  .toString()
  .split(' ')
  .map((value) => +parseInt(value));


  // 중앙 이동 알고리즘 
  /*

  변의 점 개수 
  2 3 5
  0 1 2 

  2의 (횟수)제곱을 변의 개수에 더하는 규칙

  */ 
  let answer : number = 2;
  let n : number= input[0];

  for(let i : number = 0 ; i < n ; i++){

    answer += 2**i;
  }
  console.log(answer* answer);


    

    



