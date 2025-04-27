//! creating Boilerplate :- EJS Mate
/*
    helps in creating template, or common part like navbar , or footer.

    boilerplate code :- jo common hi aur humne pehle se hi create krke rakha hua hi.
*/

//! using ejs-mate
/*

    we make a layouts folder in our view directory

    <% layout('/layouts/boilerplate') -%     >
         - YE LINE WHA LIKHENGE , JAHA HUMHE boilerplate/template ko use krna hoga. 

    aur template me variable set krne ke liye 
        <div class="container">
            <%- body %>
        </div>

*/

//! NavBar 
/*
    Covered Bootstrap

    take a navbar from bootstrap after including its connection link
    for modularity pupose we make a one more folder to assist boilerplate, jaha pr hum boiler plate ko assist krne wali choti choti codes likhenge. 


    see the style , look for some drawback and improve it , 
        other approach is to go line by line. 

*/

//! styling of index file
/*
    as header & footer to common the ,to humne unhe boiler plate me dirrect add kr diya , abhi ye index page to hr jagah common nhi hi , to ise kaise deal kiya jaaye
        hum direct index.ejs me hi ise banayege


    styling Cards:- 
        class row se wo sab grid me ho gye.
*/


//! anchor tag & a
/*
    card ke upar agar ek anchor tag laga denge, to hum poore card se hi travrse kr paayenge to show route.

    hum jaha bhi kayi saare kard ho to hum usene hiver ya Overlay effect add kr denge. 
*/ 