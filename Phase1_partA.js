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

//! using html form
/*
    input for taking input  , 
    textarea for taking bigger inputs , 
    name attributes ke ander wo value dalenge , jis naam se humhe backened me access krna hi
*/

//! specific route vs dynamic route
/*
    listings/new --> relative path , jo bhi current path hoga uske aage ye lag jayega.
    /listings/new    --> absolute path

    /listings/:id --> dynamic route
        we should write specific routes first 
   ?  Make sure the more specific route comes before: as express search top down
    /listings/new  -> specific route
*/

//! value attribute in form in editing the route
/*
    Earlier for taking input we are using placeholder to show to enter something, but here we need to show the already present input , so we use value attribut
    The value attribute sets the default content of an <input> field
    Useful in Edit Forms to show existing data.
*/

//! textarea does not have value attribute


//! destructing in updating database
/*
    Syntax:
        Model.findByIdAndUpdate(id, update, options);
    Parameters:
        id: The unique identifier of the document to be updated.

        update: The data to update the document with. It can be an object that contains the fields you want to change.

        options (optional): An object that specifies additional settings. For example:
            { new: true }: Ensures that the updated document is returned, rather than the document before the update.
            { runValidators: true }: Ensures that any validators defined on the schema are run before updating.
*/
/*
    const { 
        title, 
        description, 
        image: { url, filename }, 
        price, 
        country, 
        location 
    } = req.body.listing;

    const updatedListing = await Listing.findByIdAndUpdate(
    id, 
    {
        title, 
        description, 
        image: { url, filename }, 
        price, 
        country, 
        location
    },
    { new: true } // This option ensures the updated document is returned.
    );

   
*/


