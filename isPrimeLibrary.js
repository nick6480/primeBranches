const isPrime = function (arg) {
    for (var i = 3; i < Math.sqrt(arg); i += 2) {
        if (arg % i === 0) {
            return false;
        }
    }
    return true;
}

const timePrime = function (arg) {
  let start = new Date();
  console.log(start);

  isPrime(arg);

  let stop = new Date();
  console.log(stop);
  let elapsed = stop - start;
  return elapsed;
};
