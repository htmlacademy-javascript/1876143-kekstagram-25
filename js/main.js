//дз 2
/* Функция, возвращающая случайное целое число из переданного диапазона включительно*/

function getRandomeNumber1(from,to){
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
getRandomeNumber1(100,150);

//числа из указанного интервала не повторяются

/*Функция для проверки максимальной длины строки(использую тернарный оператор) */

function checkMaxLength (facktLengthString, maxLengthString = 140){

  return facktLengthString.length <= maxLengthString;
  /*здесь ESLint ругался что слишком сложно и можно проще чем
  facktLengthString.length <= maxLengthString? true: false;, хотел еще более короткой записи
  */
}
checkMaxLength('');


//дз №3


// генерирую список url адресов фотографий
const URL =[];
function getSetPhotoes (){
  let set;
  for (let i = 1; i <=25; i++){
    set = `photos/${  i  }.jpg`;
    //console.log(set);
    URL[i-1] = set;
  }
  //console.log(URL);
  return  URL;
}
getSetPhotoes ();


const DESCRIPTION = [
  'отличный вид',
  'тропинка к пляжу',
  'ласковое бирюзовое море',
  'в отпуске',
  'очень мило',
  'спорткар',
  'ужин',
  'очень освежает',
  'неожиданная встреча',
  'порядок',
  'волшебный песок',
  'местное такси',
  'легко и вкусно',
  'фотосессия Барсика',
  'главное ноги в тепле))',
  'пролетая над гималаями',
  'симфонический хор корейской филармонии',
  'ретро всегда в моде',
  'удобненько',
  'наш отель',
  'Yammy!',
  'Сказочный закат',
  'очень любопытный краб',
  'это было незабываемо',
  'опасность подстерегает на каждом шагу',
];

const MESSEGES_OF_COMMENT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня  получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Вера',
  'Олег',
  'Филипп',
  'Сергей',
  'Ольга',
  'Иван',
];

//Функция, возвращающая случайное число из нужного диапазона
function getRandomeNumber(from,to){

  if (to < 0){
    throw new RangeError('Параметр to должены быть больше 0');
  }
  if (from > to){
    throw new RangeError('Параметр from должены быть меньшепараметра to');
  }
  if (from < 0) {
    throw new RangeError('Параметр from должены быть больше 0');
  }
  //console.log(Math.round(Math.random() * (to - from)) +   from);
  return Math.round(Math.random() * (to - from)) +   from;
}

const idArray = [];/*создаю пустой массив в который функция getRandomeNumberWithoutRepeat будет помещать рандомно сгенерированные значения чтобы затем произвести проверку на повтор этих значений*/
//Функция, возвращающая случайное число из нужного диапазона и проверяющая чтобы возвращаемые числа не повторялись
function getRandomeNumberWithoutRepeat(from,to){
  const result = getRandomeNumber(from,to);
  //проверка чтобы рандомное число не повторялось
  for(let i = 0; i <= idArray.length;i++ ){
    if(idArray.includes(result)){
      continue;
    }
    idArray.unshift(result);
    //console.log(ID_ARRAY);
    break;
  }
  return idArray[0];
}
getRandomeNumberWithoutRepeat();

//создаю функцию, которая будет создавать объект

const getRandomArrayElement = (from,to) => getRandomeNumber(from,to);

const getRandomArrayElementWithoutRepeat = (from,to) => getRandomeNumberWithoutRepeat(from,to);

const getNumberPhoto = (from,to) => getRandomeNumberWithoutRepeat(from,to);

const createDescriptionOfPhoto = () =>({
  id:getRandomArrayElementWithoutRepeat(1,25),
  url:`photos/${getNumberPhoto(1,25)}.jpg`,
  description:DESCRIPTION[getRandomArrayElementWithoutRepeat(1,25)-1],  //каждое описание соответствует определенному фото
  likes:getRandomArrayElement(15,200),
  comments: {
    id:getRandomArrayElementWithoutRepeat(1,350),
    avatar: `img/avatar-${getRandomArrayElement(0,NAMES.length -1)}.svg`,   //так как авторов 6, то и аватарок будет столько же сколько и авторов. Каждому автору соответствует одна аватарка.
    messege:MESSEGES_OF_COMMENT[getRandomArrayElement(0,MESSEGES_OF_COMMENT.length -1)],
    name:NAMES[getRandomArrayElement(0,NAMES.length -1)],
  }
});
createDescriptionOfPhoto();

const SET_OF_PHOTOES = Array.from({length:25},createDescriptionOfPhoto);
console.log(SET_OF_PHOTOES);

