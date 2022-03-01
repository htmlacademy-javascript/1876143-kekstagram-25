
/* Функция, возвращающая случайное целое число из переданного диапазона включительно*/

function getRandomeNumber(from,to){
//использую подход early return(сначала ошибки)
//определяю ситуацию с ошибкой в аргументах (отрицательный диапазон)

  if (to < 0){
    throw new RangeError('Параметр to должены быть больше 0');
  }
  //определяю ситуацию с ошибкой в аргументах (from больше to, в этом случае полученое число будет отрицательным)
  if (from > to){
    throw new RangeError('Параметр from должены быть меньше параметра to');
  }
  //проверка если from меньше 0
  if (from < 0) {
    throw new RangeError('Параметр from должены быть больше 0');
  }
  return Math.round(Math.random() * (to - from)) +   from;
}
getRandomeNumber(100,150);

/*Функция для проверки максимальной длины строки(использую тернарный оператор) */

function checkMaxLength (facktLengthString, maxLengthString = 140){

  return facktLengthString.length <= maxLengthString;
  /*здесь ESLint ругался что слишком сложно и можно проще чем
  facktLengthString.length <= maxLengthString? true: false;, хотел еще более короткой записи
  */
}
checkMaxLength('');

