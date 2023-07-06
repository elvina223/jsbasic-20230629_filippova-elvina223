function factorial(n) {
  let res=1;
  for (let i = 1; i<=n; i++) {
      res *=i;
  }
  console.log(res)
  }
factorial(0); // 1
factorial(1); // 1
factorial(3); // 6
factorial(5); // 120