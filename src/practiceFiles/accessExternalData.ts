/*
JavaScript is an asynchronous language. An asynchronous language is merely a language that 
can execute subsequent lines of code when previous lines of code aren’t fully resolved.The
value of that is that you can run code while the other coe is waiting, for example an API 
response. 

Promises --
(how they helped people not go to the callback hell loop)
A promise is an object that takes asynchronous action and calls one of two methods based 
on the response. If the asynchronous action is successful, or fulfilled, the promise passes 
the results to a then() method. If the action fails, or is rejected, the promise calls the 
catch() method. Both then() and catch() take a function as an argument, and that can only 
take a single response argument. And you can call finally() --  schedules a function to 
be called when the promise is settled (either fulfilled or rejected). It immediately 
returns an equivalent Promise object, allowing you to chain calls to other promise methods.
*/

// example:
function checkMail() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve('\nMail has arrived');
    } else {
      reject(new Error('Mail failed to arrive'));
    }
  });
}

checkMail()
  .then((mail) => {
    console.log(mail);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log(`Experiment completed\n`);
  });

