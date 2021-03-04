
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let s =[];
  if(matrix === [] || matrix === undefined){return []}
  else{
    matrix.forEach((item, ind)=>{
      if(ind%2 !== 0){
        item.reverse();
        for(let x=0; x<=item.length-1;x++){
          s.push(item[x])};
      }
      else{
        for(let x=0; x<=item.length-1;x++){
        s.push(item[x])}}
      })
    
    return s;
  }
}
