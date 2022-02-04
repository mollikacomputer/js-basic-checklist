// 1. Write 3 variables (Number, String, Boolean)
   /*  var mobilePrice = 25000;
    var mobileBrand = 'Samsung';
    var x = 1;
    var x = true;
    var y = false;
    // console.log(Boolean(x));

// 2. diclare 2 variables (let, const), if Changable variable you change some variable 
        let samsungMobilePrice = 25999;
            
            let nokiaMobilePrice = 50000;
            samsungMobilePrice = nokiaMobilePrice;
            // console.log(samsungMobilePrice);
            const iPhonePrice =75000;
// 3. simple math operations () +,  -, *, /, %)

        // showen +, -, *
            function shopingCalculate(penQuantity, pencilQuantity, givenTaka){
                var penPrice = 12;
                var pencilePrice = 10;
                var totalPenPrice = penPrice * penQuantity;
                var totalPencilPrice = pencilePrice * pencilQuantity;
                var totalPrice = totalPenPrice + totalPencilPrice;
                var getBackRestOfMoney = givenTaka - totalPrice;
                console.log('Total Price is', totalPrice, 'Tk');
                return getBackRestOfMoney;
            }
            
            var returnMoney = shopingCalculate(1,2, 500);
            console.log('Ferot Pabe :', returnMoney, 'TK');
            
            // divided 2 numbers 
            var mangoes = 100;
            var hungryMan = 5;

            var mangoeForOnePerson = mangoes / hungryMan;
            console.log('Proti Hungry Man Pabe: ', mangoeForOnePerson, 'pcs');
            // usage % 
            var orange = 111;
            var hungryBoys = 12;
            const restOfOrange = orange % hungryBoys;
            let getOrangeOneBoy = (orange - restOfOrange) / hungryBoys;
            console.log('Proti Boy Orange Pabe:', getOrangeOneBoy, 'Pcs');
            console.log('Rest of Orange:', restOfOrange, 'Pcs');

 */
// 4. comparison() comparison operators use at least 6
//  (1)>=, (2) <=, (3) >, (4) <, (5) ==, (6) === (7) !=, (8) !==
  /*       for(let i = 1; i <=20; i ++ ){
            if( i == 5 ){
                console.log( 'Match the first condition');
            } else if( i <2 ){
                    console.log('this is less than 2');
            } else if( i>=19 ){
                    console.log('match the another condition 19 ');
            } else{
                console.log(i);
            }
        }

    function notEqual(){
        var mobilePrice = 5000;
        var netBookPrice = 30000;
        var laptopPrice = 40000;
        if( mobilePrice ==netBookPrice  ){
            console.log('I buy Lowest Price Product');
        } else if( laptopPrice === netBookPrice ){
            console.log('i drop a random Lucky Qupon Lotery');
        } else{
            console.log('I want to buy a MotorCycle');
        }
    }
console.log(notEqual());
 */
// 5. Two conditions, 
        // case: 1: fulfill two conditions,
        //case 2: fulfill at least one conditions with two.
   /*      var petisPrice = 45;
        var teaPrice = 15;
        var toastBiscuits = 12;
        var coffeePrice = 25;
        
        if(petisPrice < 30 && 15> teaPrice ){
            console.log( ' Mama petis dia cha khabo');
        } else if ( coffeePrice == petisPrice || teaPrice + toastBiscuits <25 ){
                    console.log('mama Cha ar toast biscuits dan');
        } else{
            console.log('Poruti dia cha khamu');
        } */

// 6. if else use

// 7. while loop to display 7 to 19 all numbers. only display odd numbers including 7 to 19
      /*   var i = 7;
        while(i<=19){
            // console.log(i);
            i++;
        }
        for( let i = 7; i <=19; i++){
            if(i % 2 != 0) {
                console.log(i);
            }
        }
 */
// 8. declare an array number of elements. update or change 4th positions element. 
// add or remove element. check whether existing specific value in the arrey.
/* const students = ["Jamal", "Kamal", "Sujon", "Kabir", "Titu", "Bidut"];
students[4] = "Titu is Transfer";
students.push("Insert a new student Rajesh")
students.shift();
console.log(students);
 */



// 9. use any for loop to display every elements of an array
/* const studentsName = ["raza", "saja", "Mukul", "Rikta", "Mukta"];

for(let i = 0; i <= studentsName.length; i++){
    console.log(studentsName[i]);
}


 */
// 10. you have an array of numbers. display only the numbers bigger than 80;
   /*  let ages = [25, 58, 55, 98, 80, 81, 92, 99, 82, 55, 21, 21];
    for(let age of ages){
        if( age >80){
            console.log(' your age is over 80:', age);
        }else if(age<80){
            console.log("your age is under 80 years old", age);
        }
    }
 */
//11. write a function three numbers and return the muntiplication of the three numbers
/* 
function getThreeNumberGun(num1, num2, num3){
    var threeGunFol = num1 * num2* num3;
    return threeGunFol;
}
var gunFol = getThreeNumberGun(2, 3, 5);
console.log('Three Gun Fol is ',gunFol);
 */
// 12. declare an object change any property of that 
let studentInfo ={name: 'Ranjit Kumar Mandal', age:35, class: 'ClassThree'};
var firstStudentInfo = studentInfo.class;
console.log(firstStudentInfo);
