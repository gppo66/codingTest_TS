
import * as fs from 'fs';

const input : string[]= fs
  .readFileSync('dev/stdin')
  .toString()
  .split('\n')
  .map((value) => (value));


  let commandNum = parseInt(input[0]);
  let commands : string[] = []
  let answer : number[] = [];
  let stack : number[] = [];
  for(let i : number=  1; i < input.length ; i++ )
    commands.push(input[i]);

  for(let i : number= 0 ; i < commands.length ; i++){
    let line : string[] = commands[i].split(' ');
    let comm : string = line[0];
    let value : number = parseInt(line[1]);

    switch(comm){
      case 'push' : 
      stack.push(value);
      break;
      case 'pop' : 
      answer.push(stack.pop() || -1)
      break;
      case 'size' : 
      answer.push(stack.length)
      break;
      case 'empty' : 
      answer.push(stack.length === 0 ? 1 : 0)
      break;
      case 'top' : 
      answer.push(stack[stack.length-1] || -1)
      break;
      default : 
      break;
    }


  }
    
    
    console.log(answer.join('\n'));




