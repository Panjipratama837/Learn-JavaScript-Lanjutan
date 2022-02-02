// Promise Ori
/*
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is my resolved data");
  }, 1500);
});

promise.then((promise) => console.log(promise));
*/

// Promise with function

/* 

function tryPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is my resolved data");
    }, 1500);
  });
}
const coba = tryPromise();
coba.then((promise) => console.log(promise));

*/

// Promise with async function async await

function tryPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is my resolved data");
    }, 1500);
  });
}

async function asyncCall() {
  const promise = tryPromise();
  const result = await promise;
  console.log(result);
}

asyncCall();

// try catch
function tryCatchPromise() {
  return new Promise((resolve, reject) => {
    const time = 6000;
    if (time < 5000) {
      resolve("Done ! ");
    } else {
      reject("Too late !");
    }
  });
}

async function asyncCalltryCatch() {
  try {
    const promise = tryCatchPromise();
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

asyncCalltryCatch();
