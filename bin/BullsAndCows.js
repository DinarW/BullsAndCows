import readlineSync from 'readline-sync';
import { BCgame } from "../src/index.js"

do {
  const game = BCgame();
  if (game) {
    console.log('You WIN!!!')
  } else {
    console.log('Game OVER ;(');
  }
} while (readlineSync.question('Again? (Y/N): ') !== 'N')
