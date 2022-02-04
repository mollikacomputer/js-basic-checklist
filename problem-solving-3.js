// 1. conversation
/* function feetToInch(feet){
    var inches = feet * 12;
    return inches;
}
var getInches = feetToInch(5);

console.log(' your inches is', getInches);

 */
// 2. centimeterToMeter conversion
/* 
function centimeterToMeter(centemeter){
    var meters = centemeter / 100;
    return meters;
}

let firstMeterCalculate = centimeterToMeter(2500);
console.log("First meter calculator is:", firstMeterCalculate);
 */
// 3. book calculator
/* 
function pageCalculator(book1Quantity, book2Quantity, book3Quantity){
    var book1 = 100;
    var book2 = 200;
    var book3 = 300;
    var book1TotalPages = book1 * book1Quantity;
    var book2TotalPages = book2 * book2Quantity;
    var book3TotalPages = book3 * book3Quantity;

    var totalPages = book1TotalPages + book2TotalPages + book3TotalPages;

    return totalPages;
}
var firstPageCalculate = pageCalculator(1,2,2);
console.log(' Total pages', firstPageCalculate); */

// 4. best friends string is bigger be best friend
 
// let friends = ["Rabindra", "Sanjay", "Ranjon", "Ranjit Kumar Mandal"];

//     function bestFriend(){
//         var bigger = "";
//         for(let friend of friends){
//            friend >bigger;
//            bigger = friend;
//         }return bigger;
        
//     }
//  var getBestFriend = bestFriend();
//  console.log('My Best Friend Name is :', getBestFriend);

    
    
//5. only positive when you got negetive number then stopped loop
// onlyPositive
let studentAges = [5, -1, 9, 15, -6];

for(let studentAge of studentAges){
    if(studentAge >=0){
        console.log(studentAge);
    }else if(studentAge <= 0){
        console.log('Jhankar Vai Print korte Nished Korece tar pore o test korlam pari ki na');
    }else('Ami to kicui pari na');
}


