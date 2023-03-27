/*
const promise = Promise.reject("Welcome");

promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("finally");
  });
*/

function settimeoutpromise(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`you awaited for ${delay} milisecond`);
    }, delay);
  });
}

async function doStuff() {
  try {
    console.log("start");
    const msg1 = await settimeoutpromise(250);
    console.log("1");
    console.log(msg1);
    const msg2 = await settimeoutpromise(250);
    console.log("2");
    console.log(msg2);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("finally will execute");
  }
}

doStuff();
