//IIFE(Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
(function(){

    function Start()
    {
        console.log("App Started!");
    }

    window.addEventListener("load", Start);


})();