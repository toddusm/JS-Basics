//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here
var inner = outer();
//Once you do that, invoke inner.

  //Code Here
inner();


//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here
var call = callFriend();
call("423-215-9248");



//Next Problem
function makeCounter() {
  var x = 0;
  return function () {
    alert(x += 1);
  };
}


/*
  Write a function called makeCounter that makes the following code work properly.
*/

  //Code Here
  var count = makeCounter();
  count() // 1
  count() // 2
  count() // 3
  count() // 4



//Next Problem



/*
  Write a function that accepts another function as it's first argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
*/

  //Code Here
function welcome(greeting){
  var x = 0;
  return function(){
     if(x === 0) {
       alert ("I ran once");
      x = 1; } else {
        alert(greeting());
       }
  };
}

var num = welcome();
num();
num();



//Next Problem



/*
  Now, similar to the last problem, write a function called 'fnCounter' that accepts two parameters. The first parameter will be an anonymous function and the second parameter, 'N', will be a number. Now, in 'fnCounter', allow the anonymous funciton to be invoked 'N' number of times. After it's been invoked 'N' number of times, return 'STOP'.
*/
function foo() {
  
}

function fnCounter(fn, num) {
  var x = 0;
  return function(){
    if(num > x ) {
      alert("I can run");
      x += 1;
    } else {alert("Stop");}
    
  };
}

var z = fnCounter(foo, 3);
z();
z();
z();
z();


//Next Problem



/*
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };

  Above you have a function named counter. Examine the function (without running the code) then below write what you expect to happen when the funciton is invoked. *Hint: setTimeout calls a function or evaluates an expression after a specified number of milliseconds.

    //Answer Here

6000 ms should be the answer
  Now, run the function in your console and note what happpens.

  Was your answer right or wrong?
wrong, there was a second delay between counts showing.
    //Answer Here


  Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc)
*/

    //Code Here
  var counter = function(){
    for (var i=1; i<=5; i++) {
      (function(x){
        setTimeout( function timer(){
          console.log( x );
        }, x*1000 );
      })(i)
      
    }
    
    
    var counter = function(){
    for (var i=1; i<=5; i++) {
      var timerFunction = function(x){
        setTimeout( function timer(){
          alert( x );
        }, x*1000 );
      };
      timerFunction(i);
    }
  };
 


//Next Problem




  //Make the following code work
function funcArray() {
  var x = [[0], [1], [2], [3], [4], [5]];
  }
  for(var i = 0; i < x.length; i++) {
    return x[i]
  }
}

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  /*Hint: Don't let this fool you. Break down what's really happening here.
*/


function addArrTo() {
  var x = [];
  if(x > 6){
    x.push(x +=1);
  }
  return addArrTo[x];
}

  var funcArray = [];

funcArray = addArrTo();

  funcArray[0](); //0
  funcArray[1](); //1
  funcArray[2](); //2
  funcArray[3](); //3
  funcArray[4](); //4
  funcArray[5](); //5