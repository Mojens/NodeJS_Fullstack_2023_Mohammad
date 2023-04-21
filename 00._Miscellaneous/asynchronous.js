/* 
Why: Because Javascript is single-threaded 

Examples:
Fetching over a network
Many / Heavy calculations
Cryptographic functions
Reading / Writing to files
Databases 
*/

/* Solution 1: Callbacks
Con: Callback hell, Pyramid of doom
*/

/* Solution 2: Promises 

Two states:
- pending
- fulfilled
   - rejected
   - resolved

*/

/* Solution 3: Async/Await
*/

/* new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            throw "Error message";
            resolve("Yaaaay");
        } catch (errorMessage) {
            reject(errorMessage);
        }
    }, 3000);
})
.then(successMessage => console.log("Success message:", successMessage))
.catch(errorMessage => console.log("Error message:", errorMessage)); */

function celebrate(name) {
    return new Promise((resolve, reject) => {
        if (name) {
            resolve(`Banzai, ${name}, banzai.`);
        } else {
            reject("No name specified. First argument should be the name.")
        }
    });
}

// celebrate()
// .then(celebrationMessage => console.log(celebrationMessage))
// .catch(errorMessage => console.log(errorMessage));

/* task create a function called "somethingGoodSomethingBad"
    it should return a new promise    
    it should utilize both resolve and reject 
    create a timeout to simulate asynchronous behavior
*/
function somethingGoodSomethingBad() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve("Good")
            } catch {
                reject("Bad")
            }
        }, 2000);
    })
}

// somethingGoodSomethingBad()
// .then(console.log)
// .catch(console.log);

// const somethingGoodSomethingBadMessage = await somethingGoodSomethingBad();
// console.log(somethingGoodSomethingBadMessage);



// IIFE
(async function getGoodOrBadMessage() {
    try {
        const somethingGoodSomethingBadMessage = await somethingGoodSomethingBad();
        // const celebrationMessage = await celebrate("All of us");
        const celebrationMessage = await celebrate();
        console.log(somethingGoodSomethingBadMessage, celebrationMessage);
    } catch {

    }
})()


function parallel() {
    Promise.all([somethingGoodSomethingBad(), celebrate("All of us")])
}