# Counting sheep...

### Link
[Kata](https://www.codewars.com/kata/54edbc7200b811e956000556/javascript)

### Description

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).


### BEST practice js

```javascript

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
```
---
