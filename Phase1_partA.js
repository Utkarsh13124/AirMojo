/*
    Mindset
        Basic set-up kro , like routes , databases , subsequently aur cheeze add krte  jao
        kafi saari details layout krwani hi , to pehle texts ko krwao , hum image ko badd me krwayenge.
*/

//! Basic set-up
/*
    Phase 1
        we will create listings(list od item) here

        1. set up database
        2. REST APIS for CRUD

        always  check  your database is  started ,  check in mongoshell 
            AFTERCREATING MODEL , EXPORT ,REQUIRE , MAKE A  TESTING ROUTE  ,  TO  CHECK THAT DTA  IS INSERTING CORRECTLY
*/  

//! Listing Model ( defining schema  for Mongo DB)
/*
    Listing menans list of place.
    dealings with  image ;- save them upload them ,
        easier sstep is using URL

*/

//! initialize database
/*
    init folder
    data.js

*/

//! to display a rs in india format like 4,000 with comas , 
/*
    we use toLocalString Function
        num.toLocalString("en-IN") isse ye indian standard ke hisab se comma laga dega
*/