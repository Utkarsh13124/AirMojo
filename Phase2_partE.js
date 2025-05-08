//! Connecting login Route
/*
    Ensuring that only LoggedIn user will able to create Listings

    How to check if User is Logged In?

        req.isAuthenticated();
            basically jab hum serailize session krte hi , tab user ki information store krte hi , 

            hum isko ek middleware ke tarah bhi use kr sakte hi , jisse hum aur bhi jagah asani se use kr paye , as a callback pass krke.
            code kafii bada hi  , to hum ise ek middleware file me kr lete hi.


        Jitni bbar humara session restart hota hi , utni baar humhe login krna padta hi. 


    req.user
        When a user logs in successfully through Passport, a few things happen:

        Session Creation: Passport creates a session for the authenticated user.
        User Serialization: Passport serializes the user (typically just the user ID) and stores this information in the session.
        req.user Population: On subsequent requests, Passport deserializes the user from the session data and attaches the complete user object to req.user.

*/

//! Logout User
/*
    implementing logout route.

    get /logout

    req.logout() method in passport 
        it uses serialize & deserialize, delete the user info from current session 

*/

//! Add Styling 
/*
    including signup , signout , login , in navbar. 

    passport automatically humare req ke ander humari user ki information store krwata hi. 
        if the information is undefined :- then user is not logged in . --> loggedout --> show logged in sign up option 
        if (obj) already logged in --> logout.


    hum req.user ko yha access nhi kr sakte hi , lekin hum res.locals ko navbar.ejs me access kr sakte hi.
*/

//!











