let emailRecord = [];

//user exist checking 
let x;
function addUser(userInput){
    x=true;
    let checkUser = emailRecord.filter((user)=>{
        return user.email == userInput.email;
    })
    if(checkUser.length == 0){
        
        emailRecord.push(userInput);
        
        
    }
    else{
        alert("User Exist");
        return x=false;
        
    }
    
}

function display(name ,email)
{
    // generating random city 

const Cities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Ahmedabad",
    "Pune",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
    "Visakhapatnam",
    "Patna",
    "Vadodara",
    "Ghaziabad",
    "Ludhiana"
  ];
  let r=Math.floor(Math.random()*20);
  
  let cityname=Cities[r];

 
    
    if(x)
    {const listItem = document.createElement("li");
    listItem.className = "student-item";
    listItem.innerHTML = `<strong>Name:</strong> ${name}<br><strong>Email:</strong> ${email}<br> <strong>Cityname :</strong> : ${cityname}`;
    city.appendChild(listItem);
}
    
}

                            //Main function 

function givecity()
{
let name=document.getElementById('name').value;
let email=document.getElementById('email').value;
let city=document.getElementById('city');

let user={
    name:name,
    email:email
}

addUser(user,name,email);

console.log(emailRecord);       
display(name,email);

name = '';                              // Not working clear input 
email = '';

}


