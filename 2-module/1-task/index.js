  let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
  } 
  function sumSalary(salaries) {
    let sum = 0;

    for (let key in salaries) {
    if (typeof salaries[key] == 'number' && typeof isNaN(salaries[key])
        && isFinite(salaries[key])) {
        sum += salaries[key];
     };
    
    };
     return sum;
  };  
    console.log(sumSalary(salaries))
