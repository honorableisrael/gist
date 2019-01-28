 getGrouped=(info, from, to)=> {
       return info
        .filter(item => item.age >= from && item.age <= to)
        .reduce(
         (map, item) => {
           map[item.gender] = map[item.gender] || [];
           map[item.gender].push(item);
           return map;
         },
         {}
        )
      }
      console.log(getGrouped(info, 30, 40))
      