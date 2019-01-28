
let info = [
       {
          name: 'Bill',
          age: 30,
          gender: 'man'
       },
       {
          name: 'Jill',
          age: 20,
          gender: 'woman'
       },
       {
          name: 'Jay',
          age: 35,
          gender: 'non-binary'
       },
       {
          name: 'Kaye',
          age: 35,
          gender: 'woman'
       }
   ]
   
   function getGrouped(info, from, to) {
     return info
       // Only include items that are between from & to (inclusive)
       .filter(item => item.age >= from && item.age <= to)
       // Create an object where the keys are `gender` and the values are the grouped items
       .reduce(
         (map, item) => {
            // Either get an existing array, or assign a new one
            map[item.gender] = map[item.gender] || [];
            // Add our item to the array matching the users gender
            map[item.gender].push(item);
            return map;
         },
         {}
       )
   }
   console.log(getGrouped(info, 30, 40))