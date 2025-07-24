//! What is State?
/*
    1 session --> client interact with server

    Protocol :- Rules and regulations by which the interaction happen.

    2 types 
        Stateful Protocol :- 
            Ex - FTP : file transfer protocol
            stateful protocol save tha status and session information 
                    ?  state :- request se related jo information hi
                    ? session information :- request kab aayi , kab gyi , etc.
                    session : client and server same rehta hi , information exchange hoti hi, multiple time bhi ho sakti hi
            status could be different for different websites.


            For ex - for trancsaction --> successcul , pending 
            for e-commerce , cart ke ander kye saman samn dala hua hi 

            state :- request se related jo information hi

        Stateless Protocol :
            e.g- states are bnot served.
            in stateless agar state save nhi hogi , to without state same request jayegi , and same response aayega.
              so we make http little stateful

*/

//! Express Sessions : An attempt to make our session stateful
/*
    like hum flipkart pr bina login kiye bhi cart me cheeze add kr sakte hi.

    user at flipkart
      Server side pr:
        sessionId(_101) : {
            item : laptop,
            item : charge
        }
            ~ ye automatic Id Express Sessions bna rha hi.

        server browser ko cookies bhejkr kuch data wha save kra lega , jaise server Id
            Id store krwana imp hi , kyuki abhi user logined nhi hi , agar wo page switched krta hi , to hum kasie use track krenge , isiliye cookies ke jariye hum session id save krwa rhe hi.

        We are not saving in DB , because data is not permanent , untill the payment is done
            ans as this is http protocol , so states are not sved , when we change page , data will be loss , as we have not stored in DB , 
             so somehow we make them stateful , by storing temporary data.

        cookies :- timy information , have limit , not secure

        express-session - npm package download
            go to classroom folder



        */

//! in Classroom folder --: Express Session Options
// using express - session :- count the numbber of request sent by the user.
/*
    Secret 
        required option in express-session
    
    require express-sessions , used as middleware , for any request it saves a sessionId in browser.

    same browser pr different tab , se hum ek user hi treat kiye jayenge. 


    MemoryStore :- temporary server side storage.
        used in development phase , not in production phase.

*/

//! storing & using session information
/*
    with help of req.session => we store and use session info

    req.session ke ander cookie object hota hi.
        we can also create a new variable.

*/

//! connect-flash
/*
    msgs ko flash krwane me help krta hi.

    Appear single time
        triggers :- add , error , update , delete

    flash are special are of the session that appear one time , on refresh go,

    connect-flash --> npm middleware package that is used with session..

    ! typicallly used at redirect.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   



uSE 
    const flash = require("connect-flash"); // to pop success / failure pop ups & alerts
    app.use(flash()); //MIDDLEWARE --> initializing flash, session middleware must be used before it. 
    req.flash("success" , "User registered Successful."); // key - value will be passed, key is used in parsing , msg is store when we call.
    res.render("page.ejs" , {name : req.session.name , msg : req.flash('success') } ); // FLASH KA MSG EK BAAR HI FLASH KREGA . 


    ! res.locals
        is used to send the variables in res.render

        we can also use them in middleware

        res.locals helps in definig many flash msgs , while middleware is helping us to make light msgs.
*/


//! Implements Sessions in project
/*
    import &use session middleware

    run if see connect.sid in cookie in browser , then its working. 


*/

//! Cookie in sessionOption
/*
    cookie.expires :-
        by default cookie have no expire date , mostly will delete on closing the browser.

*/

//! Implementing flash inn project
/*
    npm i connect-flash

    put middleware just after express-session middleware
        humhe apne routes ko pass krne se pehle unhe use krna hoga. 


    Order of Execution
Here's the execution flow when using flash messages:

User submits a form (e.g., to create a new listing)
Your server processes the request
You store a flash message with req.flash()
You redirect to another page
On the next request, the flash middleware makes messages available
You retrieve messages with req.flash() and pass them to your template
The messages are automatically cleared from the session

Typically used woth redirect.
*/

//! Flash Success Includes
/*
    lets , style with help of bootstrap , 
    and we place flash in boiler plate. 
        body se just pehle , & navbar ke baad , agar hum koi msg flash karana chahte hi , to use yha likhenge. 

*/

//! Flash Failure includes
/*
    abhi jab hum koi invalid id ko get krne ki koshish krte hi , humare liy ajab si error aati hi.
    we want ki ek alert pop up ho,
    to iske lihe hum show route ko aur improve krenge.
        saath hi saath hum all listings pr redirect hona chahte hi , instead of seeing all showing error page. 

    ? redirect does not ends function call , so if need to end the function we need to use return.
*/









