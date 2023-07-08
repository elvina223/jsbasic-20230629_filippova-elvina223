/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  /*if(name!=''&& name!=' '&&name.lenght>='4')
  return true;
  return false; первый вариант*/
    function isValid(name) {
    if(name!='' && !name.includes(' ') && name.length>='4')
    return true ;
    return false;
     }
   console.log (isValid(' '));
 
 
  // ваш код...
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
