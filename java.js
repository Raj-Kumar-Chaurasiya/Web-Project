/* Variable-Done,keyword, function, data types(Numbers,String, BinInt,boolen,Null,undifine), loops, control structure-Done, pop ups-Done, error handling, events, syntex.

type of pop ups:-
1. Alert
2. Prompt
3. Confirm
*/

// let username= null; //Has Nothing
// let empty;//undefined
//let username;
//let username = prompt("Hi, can I have your name please?");
//alert("welcome, to my website, "+username);
//confirm("Would you like to continue")// it has two option:- OK/Cancel.
/*var username;
'Hello and Welcome to my Website {username}!'*/
/*if (700>80){
  alert("Condition block 1 was executed")
}

else
  {
    alert("Condition block 3 was executed")
  }*/
// type of function
// invalid   and user define
// how define

// function input
// using argument and paremeter

// let useraname = prompt("Enter the name:")

// function greetUser(userofname) {
//   alert("Hi," + userofname);
// }
// greetUser(useraname);


// Authenticate the user
//  1. take username from user
//  2. take password from user
//  3. check the credt from of backend
//  4. allow/deny access

// Task 1:-
let controlOfAdminLogin = document.getElementById("admin-login");

function showadminlogin(){
  controlOfAdminLogin.style.display = "block";
}

// Task 2
let controlOfThemeBtn =document.getElementById("switch-theme");
controlOfThemeBtn.addEventListener('click',function(){
                                document.body.classList.toggle("dark-theme");
 });

// Task 3
let controlOfAdminForm =document.getElementById("admin-form");
controlOfAdminForm.addEventListener('submit', function(e){
  e.preventDefault();
  let storeedUsername = "admin";
  let storedPassword = "password";
  
  let username =document.getElementById("usernme").value;
  let password =document.getElementById("psw").value;
  
//   Logic Gates
  if(storeedUsername == username && storedPassword == password){
    alert("Welcome Admin");
    
    document.getElementById("admin-login").style.display = "none";
    document.getElementById("user-Responses").style.display ="block";
  }
  else{
    alert("Access denied!!");
  }
})