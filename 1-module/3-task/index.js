function ucFirst(str) {
  if(str.includes('') && str.length>='1') return str;
  
   return str[0].toUpperCase() + str.slice(1);
  }
 console.log (ucFirst('' ));
