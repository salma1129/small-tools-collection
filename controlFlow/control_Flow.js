let userRole = "admin";
let accessLevel;
if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);
let isLoggedIn = true;
let userMessage;
if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);
let userType = "subscriber";
let userCategory;
switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
if (isAuthenticated){
    authenticationStatus=isAuthenticated;
}else{
    authenticationStatus=isAuthenticated;
}
console.log("Authentication Status:", authenticationStatus);
//practice task//
let role = "Enrolled Member"; 
let message;

if (role.toLowerCase() === "employee") {
    message = "You are an Employee. You have full access to 'Dietary Services'.";
} else if (role.toLowerCase() === "enrolled member") {
    message = "You are an Enrolled Member. You have access to 'Dietary Services' and one-on-one interaction with a dietician.";
} else if (role.toLowerCase() === "subscriber") {
    message = "You are a Subscriber. You have partial access to 'Dietary Services'.";
} else if (role.toLowerCase() === "non-subscriber") {
    message = "You are a Non-Subscriber. Please enroll or subscribe to access 'Dietary Services'.";
} else {
    message = "Invalid role! Please enter a valid user role (Employee, Enrolled Member, Subscriber, Non-Subscriber).";
}

console.log(message);

