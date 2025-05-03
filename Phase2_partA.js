//! Creating Reviews Model
/*
    For now , 3 things in Review model : 
        comment -> String
        rating ( 1 to 5)
        createdAt --> date , time.



*/

// ! listing * Reviews --> 1 to many case
/*
    generaly hr ek listings ke saath kuch reviews honge , eisa to nhi hoga ki ek listings ke saath millions of reviews ho. 
    
    ? we will have a array of reference of reviews for listings.

*/

// humne listings ke liye reviews ko to schema me designn kr diya hi , 
// ab hum form develop krenge jo reviews ko input me lenge. 

//! Create Reviews ( Strp - 1 , 2)
/*  
    1. : - to setting up the review form
        form will be add in show.ejs

    2 . Submitting the form
        post /listings/:id/reviews
            agar hum sirf /reviews kee liye post request bhejenge , to humhe ye nhi pta chl rha hi , ki kon se listings ke liye ye reviews hi.
                agar humhe ye tarika use krna hi , to humhe , query me listings ki id bhejni padegi , ya kisi aur tarike se to listings ki id bhejni hi padegi.

        why we are creating only post route , not new route for creating review , as review ke liye hum show.ejs pr hi form render krw de rha , new listings ki tarah nhi route create krne ki jaroorat nhi padi.

    Review is saving in DB.

    Now review me validations add krne hi , aur unhe show krna hi page pr. kyuki abhi empty review bhi add ho ja rha hi.
*/



//! Validation for Review
/*
    Client Side Validation :- so form galat taike se save na ho
        jo form me required lagane se poori problem solve nhi hogi, 
    
    Server Side Validation : Using Joi
        kyuki hum postman ya hoppscotch se bhi to post request bhej sakte hi , empty wali , radio ke bahar wali . 

        1. Joi Schema
        2. Schema Validation Function 
        3. pass as middleware 


*/  


//! render review.



