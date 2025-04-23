// Write a program that takes an array of days like "Mon", "Tue", and "Fri" and uses a switch statement to print what type of delivery is scheduled on each day.
const getDelivery = (days) => {
    days.forEach(day => {
        switch (day) {
            case "Monday":
                console.log("We offer local shipping on Mondays");
                break;
            case "Tuesday":
                console.log("We offer international shipping on Tuesdays");
                break;
            case "Wednsday":
                console.log("We offer door-step deliveries on wednsday");
                break;
            case "Thursday":
                console.log("We offer overnight deliveries on Thursday");
                break;
            case "Friday":
                console.log("We offer parcel services on Friday");
                break;
            default:
                console.log("We do not offer that type of delivery");
                break;


        }
    });
};
const days = ['Monday', 'Tuesday', 'Wednsday', 'Thursday','Friday', 'Sunday'];
getDelivery(days);

// Create a program that loops through an array of book statuses and prints "Ready to lend" if the status is "available" or "Checked out" if the status is "borrowed".

const getBooks= (status) => {
    for (let i = 0; i < status.length; i++) {
        if (status[i] == "available") {
            console.log("Ready to lend");

        } else if (status[i]=="borrowed") {
            console.log("Checked out");

        }

    }
};
getBooks(["available", "borrowed"]);


// Given an array of customer ages, write a program that checks each age and prints "Adult" if the age is 18 or above, and "Minor" otherwise.

const checkAge= (ages)=> {
    for (let i= 0; i < ages.length; i++){
        if (ages[i]>= 18){
            console.log("Adult");
            
        }
        else{
            console.log("Minor");
        }  

    }
};
checkAge([20, 30, 17, 12, 50, 10])



// Write a program using a while loop that simulates a countdown of lives in a game starting from 5 and prints "You have X lives left" on each loop until it reaches 0.



const livesLeft = () => {
    let lives = 5;
    while (lives >= 0) {
        console.log(`You have ${lives} lives left`);
        lives--;
    }
};
livesLeft();


// Using a do...while loop, write a program that loops through an array of user feedback and prints each comment until the array is empty.

const getFeedback = (feedback) => {
    
    do {
        console.log(feedback.pop());
        
    } while (feedback.length > 0)
    }

getFeedback(["I loved the app", "HIghly recommend", "I loved the customer servive","I enjoyed my expirience"]);



// Write a program that loops through an array of user login statuses and prints "Welcome back!" if the user is "logged in" or "Please log in" otherwise.

const getLogin= (login)=> {
    for (let i= 0; i < login.length; i++){
        if (login[i] == "logged in"){
            console.log("Welcome back");
            
        }
        else{
            console.log("Please log in");
        }  

    }
};
getLogin(["logged in", "doesn't have an account", "is not signed in"])




// Write a program that processes an array of support ticket priorities using a switch statement to print
//  how quickly each one should be addressed based on whether the priority is "low", "medium", or "high".

const getPriority = (priorities) => {
    priorities.forEach(priority => {
        switch (priority) {
            case "high":
                console.log("Address this issue NOW!");
                break;
            case "medium":
                console.log("Address as soon as possible");
                break;
            case "low":
                console.log("Address issue");
                break;
          

        }
    });
};

getPriority(["medium","low","high"]);

// Create a while loop that simulates a quiz countdown from 10 seconds, printing each number until it reaches 0.

const getCountdown = () => {
    let countdown = 10;
    while (countdown <= 10 && countdown >=0) {
        console.log(`${countdown}`);
        countdown--;
    }
};
getCountdown();