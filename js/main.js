
/* Функция, возвращающая случайное целое число из переданного диапазона включительно*/

function getRandomeNumber(from,to){
//использую подход early return(сначала ошибки)
//определяю ситуацию с ошибкой в аргументах (отрицательный диапазон)
// исходя из формулы получается что отрицательное значение может получиться только если to будет отриц-м
  try{
    if (to < 0){
      throw new RangeError('Параметр to должены быть больше 0');
    }
//определяю ситуацию с ошибкой в аргументах (from больше to, в этом случае полученое число будет отрицательным)
    if (from > to){
      throw new RangeError('Параметр from должены быть меньше параметра to');
    }
  }
  catch(error) {
    return 'Введены некорректные значения аргументов. Параметр to должены быть больше 0. Параметр from должены быть меньше параметра to';}

  return randomeNumber = Math.round(Math.random() * (to - from)) +   from;
}
getRandomeNumber(100,150);

/*  Остается непонятным можно ли применять throw без try..cathc, например вот так:

function getRandomeNumber(from,to){
  if (to < 0){
    throw new RangeError('Параметр to должены быть больше 0');
  }
  if (from > to){
    throw new RangeError('Параметр from должены быть меньше параметра to');
  }
  return randomeNumber = Math.round(Math.random() * (to - from)) +   from;
}
  getRandomeNumber(200,18);
*/



/*Функция для проверки максимальной длины строки(использую тернарный оператор) */

function checkMaxLength (facktLengthString, maxLengthString = 140){

  return facktLengthString.length <= maxLengthString? true: false;
}
checkMaxLength('');

// если проверить еще на наличие комментария

function checkMaxLength1 (facktLengthString, maxLengthString = 15){
  try{
    if(!facktLengthString.length){
      throw new RangeError('введите комментарий');
    }
  } catch (error) {
  //alert("введите ваш комментарий");
    return false};

  return facktLengthString.length <= maxLengthString? true: false;
}
checkMaxLength1('доkjgljgljdkgljdfgkljdklgjdklfgjdkljgdklfjglkfjgldkfjkj');
