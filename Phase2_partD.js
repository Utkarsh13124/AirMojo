//! Authetication & autorization
/*
    Authetication :- verifying the person. 

    Authorization :- Verifying what specific applications, files , and data a user has access to. 
        for example hum hi  apne post ko instagram pr delete kr sakte hi , koi aur nhi. 

*/


//! Storing passwords.
/*
    We store password in their hashed form.

    Hashing function is one - go function.

*/


// What is hashinng?
/*
    Hashing Function Properties :- 
        one-way function ( input se output nikal sakte hi , lekin output se input nhi  ikal sakte hi )
        small changes leads to big changes
        leads in equally number of string.
        input same --> output same.

    we should use slow hashing function , so brute force attack can be minimized.

*/

//! What is Salting?
/*
    Salting is technique to protect passwords stored in database by adding a string of 32 or more characters and then hashing them.

    Every company hhave their Salt [ %?@ ]
    abc --> abc%?@ --> hashed form store in database. 


   We not need to write function from scratch for salting & hashing as npm has many library which do these work.
    one such tool is Passport 
*/


//! Passport --> getting started. 
/*
    passportjs.org website
    middleware
    have various signin strategy
        like with password
        with google , github , linkedin , twitter

    we are going to uuse simple local strategies , with signup with password & username
    npm i passport // needs to install for using passport
    npm i passport-local // which we are using , here it could be jwt also.
    npm i passport-local-mongoose // a library works well with passport
        if we are working with sql , then first two packages are sufficient.
        for multiple feature/strategies , we could also download others.


*/

//! User Model
/*
    User : username , password , email
        we could add more , like name , age , 
    
    reads docs for using moongoose passport.

    by default passport-local-mongoose will add a username , hash , salt fiels to store the username. 

in model fielder user model is created
    User.plugin(passportLocalMongoose); // used as plugin because it generates , username , passwordfield , salt field automatically , when model is created , 
    also implements few methods like setPassword() , autheticate , changePassword() , generate() &  lots other , you will learn from docs , or when implement.

*/

//! Configuring Strategy
/*
    applying basic settings to use passport

    local-Strategy ko implement krna chahte hi , to wha pr passport ki jarrurat hoti hi
        passport use krta hi session ko , jisse ki wo ek hi baar login kraye ek session me
    
! using passport -> telling express app , about our password. 
app.use(passport.initialize()); // hr ek request ke liye passport ko initialize kro.
app.use(passport.session()); // for login one time in one session.
passport.use( new LocalStrategy(User.authenticate())); // passport ke ander humne jo bhi nayi local strategy create ki hi , wo sabhi autheticat hone chahiye through LocalStrategy , wo kaise autheticate honne , through User.authenticate() , jo passport local-mongosse ne add kiya hi.

passport.serializeUser(User.serializeUser()); // for seliazing the method , he is using his static method. 
    storing the user info in session.
passport.deserializeUser(User.deserializeUser());
    removing stored information
        Session :- series of requests & responses , each associated with the same user , is known as a session.

if we want we can create these function methods as own
*/

//! demo user
/*
    let registeredUser =  await User.register(fakeUser , "helloworld"); // second argument inside static function register is password.  , also check for a unique users. 
        passport already has implemented the logic for register.
    

*/

//! Signup user
/*
    Get / signup
        signup form 
        on submitting
    Post / signup   
        registering new user.

*/


// flash cross is not working properly

//! Login user
/*
GET /LOGIN 

POST / LOGIN

    we will use a static middleware of passport , 
        ? passport.authenticate()
            inside it we need to pass certain options

*/




















