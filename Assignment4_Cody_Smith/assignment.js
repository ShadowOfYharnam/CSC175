console.log("Hello World!")

// #5
var s = "things";
if (s.length != 16){
    alert("There is not 16 characters");
}
// #6
for(i = 0; i < 10 ; i++ ) {
alert("10");
}
var total = 1
//#7
for(i = 1; i < 21; i++ ) {
total = total * i
}
alert(total);
//#8
var dog = {name: 'Buster', breed: 'Chihuahua', birthday: '2002-10-13'};
for (var p in dog) {
    alert("The dog's" + variable + " is: " + p );
}


// #9
// this kind of expression is good because it will first test to see if x is less then y 
// and if this is false it will test to see if x is the same as y.
// this is assuming this is a kind of test, if it is just shorthand then the reason is that it saves space and time

// #10

var numbers = prompt("Please enter several numbers seperated by spaces.");
var math = numbers.split(" ")

    var min = math[0];
    var max = math[0];
    var total = 0;
for(var i = 0; i< math.length(); i++){

    if (min > math[i]){
        min = math[i];
    }
    if (max < math[i]){
        max = math[i];
    }
    
    total += math[i];
}
alert("Minimum is: " + min + " , Maximum is: " + max + " , Sum is: " + total);

//#11
var picks = {
    Alice: [4, 52, 9, 1, 30, 2],
    Boris: [14, 9, 3, 6, 22, 40],
    Chi: [51, 53, 48, 21, 17, 8],
    Dinh: [1, 2, 3, 4, 5, 6],
};

var found = false;
Search: for (var person in picks) {
    var choices = picks[person];
    for (var i = 0; i < choices.length; i += 1) {
        if (choices[i] === 53) {
            found = true;
            alert(person + "Picked 53");
            break Search;
        }
    }
}
alert(found);
