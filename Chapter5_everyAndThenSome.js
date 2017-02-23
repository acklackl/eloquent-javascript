let every = (array, func) => {
  let result = [];
  let a = true;
  array.forEach(x => result.push(func(x)));
  console.log(result);
  for (let i = 0; i < result.length; i++) {
    if (result[i] == false) {
      a = false;
    }
  }
  return a;

};


let some = (array, func) => {
  let result = [];
  let a = false;
  array.forEach(x => result.push(func(x)));
  console.log(result);
  for (let i = 0; i < result.length; i++) {
    if (result[i] == true) {
      a = true;
    }
  }
  return a;
};
