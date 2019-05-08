function count(string) {
    var count = {};
    string.split('').forEach(function(s){
    //   if (count[s] == count[s]){
    //     count[s] ++
    //   } else {
    //     count[s] = 1
    //   }
     count[s] ? count[s] ++ : count[s] = 1;
    });
    console.log(count)
  }
  
  count('asdfffdsfsda')