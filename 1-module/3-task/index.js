
   function ucFirst(str) {
     if(str.length >= '1') {
     return str[0].toUpperCase() + str.slice(1);
     }
     return str;
   }
   console.log ( ucFirst('') );
