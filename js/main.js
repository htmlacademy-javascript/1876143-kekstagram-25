
/* Функция, возвращающая случайное целое число из переданного диапазона включительно*/

function getRandomeNumber(from,to){
  if (from < to){
    const randomeNumber = Math.round(Math.random() * (to - from)) +   from;
    console.log(randomeNumber);
    return randomeNumber;
  } else {
    console.log("from не может быть больше to или бытьему равно");
  }
}
getRandomeNumber(1,180);


/*Функция для проверки максимальной длины строки */

function checkLenghtComment (facktLenghtString = 0, maxLenghtString = 140){
  if (facktLenghtString <= maxLenghtString){
    console.log(true);
    return true;
  }
  console.log(false);
  return false;
}
checkLenghtComment ();


