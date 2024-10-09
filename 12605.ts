
import * as fs from 'fs';

const input : string[]= fs
  .readFileSync('dev/stdin')
  .toString()
  .split('\n')
  .map((value) => value);

  /*
  단어 순서 뒤집기
  N = 전체 케이스의 개수 
  L = 문장
  " " 로 단어 구분
  그 외에는 " \n " 으로 구분

  */
    let caseNumber : number = parseInt(input[0]);
    let letters : string[] = [];
    for(let i : number = 1 ; i < input.length ; i++){
      letters.push(input[i].toString())
    }

    let answer : string[] = [];
    for(let i : number = 0 ; i < caseNumber ; i++){
      answer = letters[i].split(' ')
      let invert : string = '';
      for(let j : number = answer.length-1 ; j >= 0 ; j--){
        invert += answer[j] + " "
      }
      console.log(`Case #${i+1}: ${invert}`);
      
    }

    



