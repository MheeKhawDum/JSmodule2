// find min and max in array
const nums = [-1, 0, 5, 10, 49]; //min=-1 max =49]
let min = 0,
    max = 0;

nums.forEach((num) => {
  if (min > num) 
    min = num;
  
  if (max < num) 
    max = num;
  
});
console.log(`min = ${min}
max = ${max}`);

function findMin(Arr){
    let min = Arr[0];
    Arr.forEach((num) => {
        if (min > num) 
          min = num;
      });

      return min
    

      
}
const findMax = (Arr) =>{
    let max = Arr[0]
    Arr.forEach((num) => {
        if (max < num) 
          max = num;
      });

      return max
    
}

console.log(findMin(nums))
console.log(findMax(nums))