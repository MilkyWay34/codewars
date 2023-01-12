function disemvowel(str) {
  const vowels_list = ["a", "u", "e", "o", "i", "A", "U", "E", "O", "I"];
  const arrStr = str.split('');
  
  let result = arrStr.map(
    (current) => {
      if (vowels_list.indexOf(current) !== -1) {
        return '';
      }
      return current;
    }
  )
  
  str = result.join('');
  console.log(str);
  
  return str;
}