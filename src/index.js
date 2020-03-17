
exports.min = function min (array) {
   if (!array||array.length==0) {
       return 0;
   }
   else {
       function plusmin (a,b){
          return a-b;
        }
       let minim= array.sort(plusmin).shift();
       return minim;
   }
    }
    
 


exports.max = function max (array) {
    if (!array||array.length==0) {
        return 0;
    }
    else {
        function plusmin (a,b){
           return b-a;
         }
        let maxim= array.sort(plusmin).shift();
        return maxim;
}
}

exports.avg = function avg(array) {
    let sum=0;
    if (!array||array.length==0) {
        return 0;
    }
    else {
        for (let key of array) 
        {
            sum=sum+key;
            
        }
        let mid = sum/array.length;
        return mid;
    }

}
