
  function truncate(str, maxlength) {
    let newStr = (str.slice(0, maxlength - 1) + '…');
    
    if (str.length > maxlength)
    return newStr;
    return str
  }
  console.log( truncate('Вот, что мне хотелось бы сказать на эту тему:', 20) );
  console.log( truncate('Всем привет!', 20) );
  

