import readlineSync from 'readline-sync';

const BCgame = () => {
  console.log("Bulls And Cows Game!");
  const question = initQuestion();
  let bulls;
  let cows;
  console.log('Your hypothesis: ');
  do {
    bulls = 0;
    cows = 0;
    const answer = readlineSync.question('> ');
    
    if (answer === 'exit') {
      return false;
    }

    for (let i = 0; i < answer.length; i += 1) {
      if (question[i] === answer[i]) {
        bulls += 1;
      } else if (question.includes(answer[i])) {
        cows += 1;
      }
    }
    console.log(`bulls: ${bulls}, cows: ${cows}`);

  } while (bulls !== 4)
  return true;
};

const initQuestion = (length = 4) =>{
  const numbers = ['0','1','2','3','4','5','6','7','8','9'];
  for (let i = 0; i < length; i += 1) {
    const j = getRandomNumber(i+1, 9);
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
  return numbers.slice(0, length).join('');
}

const getRandomNumber = (min = 0, max = 9) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export { BCgame };
