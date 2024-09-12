// Write a function which will take input as string and return the character  and count which has max repetition
// Example -> 
// "HELLO WORLD!". =>   L has max 3 count
//  "MacBook Pro world"=>     o has max 4 count
// "" => No Character found 
// 1234 => Invalid input passed


//Using Map
const mp = new Map();

function returnMaxRepMap(str){
    if (typeof str !== 'string'){
        return "Invalid input passed";
        }
        let maxCount = 0;
        let maxChar = '';
        for(let char of str){
            if(mp.has(char)){
                mp.set(char, mp.get(char)+1);
            }
            else{
                mp.set(char, 1);
            }
            if(mp.get(char) > maxCount){
                maxCount = mp.get(char);
                maxChar = char;
            }
        }
        return (`Using Map=> Character :  ${maxChar} Count:  ${maxCount}`);
}
 
console.log(returnMaxRepMap("HELLO WORLD!"));
console.log(returnMaxRepMap("MacBook Pro world")); 
console.log(returnMaxRepMap(""));  
console.log(returnMaxRepMap(1234));  


//Using Object 

function returnMaxRepObj(str){
    if (typeof str !== 'string'){
        return "Invalid input passed";
        }
        let maxCount = 0;
        let maxChar = '';
        let mp={}
        for(let char of str){
            if(mp[char]){
                mp[char]++
            }
            else{
                mp[char]=1;
            }
            if(mp[char] > maxCount){
                maxCount = mp[char];
                maxChar = char;
            }
        }
        return (`Using Object => Character :  ${maxChar} Count:  ${maxCount}`);
}
 
console.log(returnMaxRepObj("HELLO WORLD!"));
console.log(returnMaxRepObj("MacBook Pro world")); 
console.log(returnMaxRepObj(""));  
console.log(returnMaxRepObj(1234));  