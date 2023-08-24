function givecity()
{
let name=document.getElementById('name').value;
let email=document.getElementById('email').value;
let city=document.getElementById('city');

let user={
    name:name,
    email:email
}

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

    // addUser(user)                  // not working
 
    
    let emailRecord = [];
 
    //user exist checking 
    
    function addUser(userInput){
        let checkUser = emailRecord.filter((user)=>{
            return user.email == userInput.email;
        })
        if(checkUser.length == 0){

            emailRecord.push(userInput)
            
        }
        else{
          alert("User Exist")
        }
        
    }
    const listItem = document.createElement("li");
    listItem.className = "student-item";
    listItem.innerHTML = `<strong>Name:</strong> ${name}<br><strong>Email:</strong> ${email}<br> <strong>Cityname :</strong> : ${cityname}`;
    city.appendChild(listItem);

    name.value = "";
    email.value = "";


}


