var isPrime=(num)=>{
  if (num <= 1) {
    return true
  } else if (num <= 3) {
    return true
  } else if (num%2 === 0 || num%3 === 0) {
    return false
  }
 
  let i = 5
  while (i*i <= num) {
    if (num%i === 0 || num%(i+2) === 0) {
      return false
    }
    i += 6
  }
  return true
}

var primeNUmber=[];
for (var num = 2; num<=100; num ++){
	if(isPrime(num))
		primeNUmber.push(num)
			};
			console.log(primeNUmber);
