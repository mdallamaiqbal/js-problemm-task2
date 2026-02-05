/*
Find the friend with the smallest name. 
 */
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(names){
   let smallest=heights2[0];
   for(const name of names){
    if(name.length < smallest.length){
        smallest=name;
    }
   }
   return smallest;
}
const smallName=smallestName(heights2);
console.log(smallName);
