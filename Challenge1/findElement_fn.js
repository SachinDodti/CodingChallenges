function findElement(arr, func) {

    console.log(func())
    let num = 0;
  
    for (let i = 0; i < arr.length; i++) {
      num = arr[i];
      console.log(num)
      console.log(func(num))
      if (func(num)) {
        return num;
      }
    }
  
    return undefined;
  }

  findElement([1, 2, 3, 4], num => num % 2 === 0);

