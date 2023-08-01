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

// example from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally:
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

/* It's important to always have both then() and catch(), to grab resolutions and handle rejections
 */
function failedUserLogin() {
  return new Promise((resolve, reject) => {
    reject({
      type: 'Wrong Login',
    });
  });
}

failedUserLogin()
  .then((something) => {
    console.log('this wont execute');
  })
  .catch((error) => {
    console.error(`Fail: ${error.type}`);
  });

function getMusic(theme: string) {
  if (theme === 'dusk') {
    return Promise.resolve({
      album: 'music for airports',
    });
  }
  return Promise.resolve({
    album: 'kind of blue',
  });
}



/* Async/Await
async/await, are two separate actions. You use the async keyword to declare that an 
encapsulating function will be using asynchronous data. Inside the asynchronous function, 
you can use the await keyword to pause the function until a value is returned.
*/

async function getTheme() {
    // transformed into a promise, you still need a then(), method
  const b = await getMusic('dusk').then((preferences) => {
    console.log(preferences.album);
  }).catch(error => {
      console.error(error);
  });
}

/*AJAX calls, using fetch()
*/

