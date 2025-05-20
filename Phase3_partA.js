//! MVC - Model , View , Controller   --> design pattern , / frameworks.
/*
    models , db , routes , error , validation --> they are basic and we have covered them in phase 1 & 2

    Adding new features :- might be these features will not be helpful in other 


    this tells the way to write Fullstack project.


    Views :- render , frontened
    controller :- backened core functionality
    Model :- Db , schema

    For controller :- hum saare file aur callbacks ko ek separate file me store krenge. 



    Making Controllers folder in Air Mojo


    controllers MVC ko use krne se humari files ka structure bhut badiya ho jata hi .
*/


//! Router.route
/*
    router.route ka use krte hi , to hum same path ke upar multiple request like put , patch , delete, ...
*/

//! Re-style rating :- Implemnting stars
/*
    we are going to do it with starability library.
    just follow the docs, 
    and check the name , that is what we want to sent in backend
*/

//! image upload , instead of link
/*
    we want to give property of image upload.

    issue in current form , because of which currently we are not able to upload the image.:-
        current form backended me files nhi send kr sake hi , like pdf , photo , png , video, 
        second issue if file aa bhi  gyi to store kaha krwayei, as MongoDb me BSON format me limited size me data store hota hi


        First step :- to make our form capable of sending files to backended
        Second Stemp : storing in cloud server( AWS , Azure , but they are for production level)   & currently we will use free version. They are third party service , we could also use google drive.
            paid services used :-  when code is writing for company , or we want to scale  
        Third Step :- save the link in mongoDB

*/

//! Manipulating form :- 
/*
    currenlty we have set urlEncoded true ;- so we are only able to send urlEncoded data.
        by default backend ko samajh nhi ata ki humari data kis form me bheja gya hi , so we use parser.

    if we want to send file, then we have to use enctype="multipart/form-data"

    FOR PARSING multipart data we are going to use //! multer library.

        after getting multer read the docs , require it , and configure it
        we write a middleware function for it, upload.singe('') ke ander wo field likhege jaha se image file fetch krni hi
        multer ke aate hi ab humare pass req.file naam ki ek aur key aa jayegi , jo file ka data store karegi

*/

//! Cloud Setup
/*
    Used ThirdParty Service -> Cloudinary

    .env file to save credentials

        its like huuhe instagram pr daily basis pr ek post create krna hhi aur humne ek code likh diya to , code ko credentials bhi dene padege
        it works in key Value Pair.
        Prefer key in Uppercase

    dotenv package , as hum .env file ke ander create hue variable ko khi bhi use kr sake , but wo aise use nhi honge , uske liye humhe ek package ko download krna padega

*/


//! Store Files
/*
    we will use two library 
    cloudinary , multer-storage-cloudinary

    for configuring cloud we need to configure it , we will make a separate file ffor this.

    require krne ke baad humhe configure krna hota hi , uska code npm ki website pr nhi tha , lekin clodinary ki website pr tha.
    configure krna matlab jodna

    export krenge , multer ko storage pr set krenge

    ab humri file clodinary pr upload hoo rhi hi. ab humhe clodinary ka link provide krna hoga.
*/

//! step 3 Save the link in the mongo DB database
/*
    fetch from req.file and modify liisting add the current new propertiwes.
    
    

    ! Also we are capable of adding multipl epictures. 

*/




//! # Part - 3 , Phase - 2
/*
    Edit Listing Image
        Now we need to change our edit form  
            As abhi tk wha pr url edit krne ko ata hi , but we want to add image uploadd feature.
            
        usi tarike se hi change krenge ,  
            sabse pehle hum form ko capable banayege ki wo form ko backened me bhej paaye, 
            backended me routes ko capable banayege ki , wo image ko le aur clodinary me save kraye ,
            then changes in Db .


        humhe do bar update ka logic likhna padega ek to text data ka , jo req.body me hi , secondly multipart data ka , jo req.file me hi.

*/


//! image preview , While updating we will able to see old image preview in lower quality 
/*
    we could do manually , but here we do with cloudinary
    we will use clodinary api for this.

*/


