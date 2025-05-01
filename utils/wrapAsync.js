module.exports = (fn) => {
    return (req , res, next) => {
        console.log("error is in wrap async");
        fn(req , res , next ).catch(next);
    };
};

