  function checkSpam(str){
    let strNew = str.toLowerCase();

    if (strNew.includes('1xbet') || strNew.includes('xxx')) return true;
    return false
     }

    console.log( checkSpam('1Xbet now') );
    console.log( checkSpam('free xxxX') );
    console.log( checkSpam('innocent rabbit'));
