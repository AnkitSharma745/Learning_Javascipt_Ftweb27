// this useraname and password are stored in the database.
let signup_username= "luffy";
let signup_password="onepiece";


//while I login
let username= "luffy";
let password= "onepieces";


if(signup_username === username){

  if(signup_password=== password){
    console.log("I can login");
  }
  else{
    console.log("please check your password")
  }
}
else{
  console.log("please check your username");
}

