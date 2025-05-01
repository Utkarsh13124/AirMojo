//! Form Validation 
/*
    Done by validation and error handling.

    two types :- 
        client - side 
            frontened se jo data backened me ja rha hi , wo shi ho.
            form se shi data jaye

            should be correct format & within constraint 
        server - side
            database ke rule ke hisab se cheeze chl rhi  ya nhi.


    Solution to empty form submission :- 
        jo cheeze form me important unhe sabse pehle required set kr do , jisse empty data bhejne wala system khatam hoo.
            But this is not standardized , matlab chrome pr dikhata hi , this field is required, safari pr kuch aur dikhayega, brave pr kuch aur
             hum chahte hi , hum jo bna rhe hi , wo sabke liye same ho.
             iske liye hum bootstrap ko use krenge.
              firstly we need to cancel out default setting of browser to add settings for Bootstrap
              * applied form validation from Docs


*/

//! Success & Failure Text
/*
    providing some text , before submitting a form
        like many time when we fill password, it shows strong password , weak password.

*/


//! Custom Error Handling
/*
    abhi tk jo humne create kiya hi , usme bhut si async error hi. 
      bhut  saari async erros aa sakti hi , suppose koi frontened , price me koi string value bhej de , use hum Database me save krenge jo ki ek async error de sakta hi.


?  Need to check working of wrapAsync by modifyning price.
*/