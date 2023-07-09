function checkSpam(str) {
  let strNew = str.toLowerCase();
     
  return (strNew.includes('1xbet') || strNew.includes('xxx'))
}
 console.log( checkSpam('1Xbet now') );
 console.log( checkSpam('free xxxX') );
 console.log( checkSpam('innocent rabbit') );

