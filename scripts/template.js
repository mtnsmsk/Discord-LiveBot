module.exports.info = {
    title: "Name of your script",
    description: "Description of your script"
}

module.exports.start = () => {
    // Your code goes here

    myFunction();
};

module.exports.stop = () => {
    // This code will call when the script should be unloaded
};

function myFunction() {
    // You can make normal functions and call them from start()
}