function doubleElements(arr) {
    return arr.map((num) => num * 2);
  }
  const input1 = [1, 2, 3];
  const output1 = doubleElements(input1);
  console.log(output1); 


  function filterEven(arr) {
    return arr.filter((num) => num % 2 === 0);
  }
  
  const input2 = [1, 2, 3, 4];
  const output2 = filterEven(input2);
  console.log(output2); 

  function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }
  
  const input3 = [1, 2, 3, 4];
  const output3 = sumArray(input3);
  console.log(output3); 
  function insertValueAtIndex(arr, index, value) {
    if (index < 0 || index > arr.length) {
      return arr; 
    }
    const newArr = [...arr]; 
    newArr.splice(index, 0, value); 
    return newArr;
  }
  const input4 = [1, 2, 3];
  const index4 = 1;
  const value4 = 4;
  const output4 = insertValueAtIndex(input4, index4, value4);
  console.log(output4); 

  function calculateArea(radius) {
    return Math.PI * Math.pow(radius, 2);
  }
  
  const radius5 = 5;
  const area5 = calculateArea(radius5);
  console.log(area5); 
  

  