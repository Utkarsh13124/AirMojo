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
        it remove req.user method & clean the session
*/

//! Add Styling 
/*
    including signup , signout , login , in navbar. 

    passport automatically humare req ke ander humari user ki information store krwata hi. 
        if the information is undefined :- then user is not logged in . --> loggedout --> show logged in sign up option 
        if (obj) already logged in --> logout.


    hum req.user ko yha access nhi kr sakte hi , lekin hum res.locals ko navbar.ejs me access kr sakte hi.
*/

//! login afteer signup
/*
    implementing functionality of directly login after signup. 

    passport ka /login method. 


*/

//! post login page
/*
    suppose user humara nayi listings create krna chah rha tha , tab humne use login krwaya , ab wo login krke listings pr chala ja rha hi ,
    Now adding functionality , ki jaise hi logged in ho , wo dobara usi page pr render ho jaye , jaha se ho aya tha. 

    req ke ander hum konse patth se aaye hi , uska information , konse pr hi , sessiion related information bhi stored hi , request me 

    req.path --> is relative url , 
    req.originalUrl --> absolute path , jise hume access kre ki koshish kr rhe the. 

    after doing login we want to redirect this original URL. 

    storing them , 
         for Now , we are storing it in req.session object. 
            and we only want to store if user is not logged in , so we will do this work in middleware isloggedin
        here is one issue from passport side , jaise hi hum authenticate ho jate hi logged in ke liye , waise hi wo humare session ki info ko reset kr deta hi.

        Solution is to stor them in locals , as locals are acceble to everywhere , & passport not have access to locals. 

            apne redirect ko save krwane ke liye hum ek aur middleware create kr lete hi . 

    if login from home , isLoggedIn not triggered , so no url , saved , we are nowhere redirected , resulting in error.


*/


//! Listing owner --> for authorization
/*
    dealing with permission.
    for this we need to change the schema


    Situation : aage bhi kabhi ho sakti hi , k hum kisi ek cheez ko baad me add kre database me, hum hr ek data me jaake changes krein , isse better tarika ye hi , jaha se data initialize ho rha hi 
        wha pr map method use kr le javascript , jo hr ek data object ke pass jake usme required changes krwa denge


    Changes in post route of listing
        while adding a new listing , we need to add the current user to username properties of listing

    we are adding the owner , this data will help in authorization. 
*/


//! Starting with Authorization 
/*
    Hiding edit & delete btn for those user , who are not owner of the post.

    we need two information :- current user , & listing owner 
        curruser ki id humne res.locals me store ki hi , listing ki owner ki id listings me hi hi.

    lekin abhi humare routes safe nhi hi , agar koi hoppsctch se request bhej diya , to. 
*/


//! Authorization for /listing
/*
    Authorization in edit route:- only authorized user will able to see the edit and deleta btn 


*/




