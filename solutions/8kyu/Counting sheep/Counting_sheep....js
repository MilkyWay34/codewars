function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let result;
    result = arrayOfSheep ?? false;
    if (!result) {
      return result;
    }
    console.log(result);
    
    result = arrayOfSheep.reduce(
      (sum, current) => {
        if (current == true) {
          console.log(sum);
          return sum = sum + 1;
        }
        return sum;
      },
    0);
    console.log(result);
    return result;
  }