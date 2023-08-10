const promise = new Promise((resolve,reject) => {
    if (true){
        resolve('stuff worked');
    } else {
        reject('Error, it broke');
    }
});

promise.then(results => console.log(results));

// another approach
promise.then((result => result + '!'))
    .then(result1 => result1 + '?')
    .catch(() => console.log('error'))
    .then(results2 => console.log(results2 + '!'));

// you might want to put the error before you run a catch.
promise.then((result => result + '!'))
    .then(result1 => {
        throw Error
        result1 + '?'
    })
    .catch(() => console.log('error'))
    .then(results2 => console.log(results2 + '!'));

//=============================================================
const promise1 = new Promise((resolve,reject) => {
    setTimeout(resolve,100,'hii');
})

const promise2 = new Promise((resolve,reject) => {
    setTimeout(resolve,1000,'second');
})

const promise3 = new Promise((resolve,reject) => {
    setTimeout(resolve,7000,'third');
})

Promise.all([promise1, promise2, promise3]). then(value => {
    console.log(value)
});

// They only print out after all have been loaded.
// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
setTimeout(() => {
    let one = new Promise((reject,resolves) => {
        if(true) {
            console.log("Succes");
        }else{
            console.log("it didn't work");
        }}).then(result => console.log(result))}
           , 4000)

// #2) Run the above promise and make it console.log "success"
setTimeout(() => {
    let one = new Promise((reject,resolves) => {
        if(true) {
            console.log("Succes");
        }else{
            console.log("it didn't work");
        }}).then(result => console.log(result))}, 4000);

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
Promise.resolve('success').then(inside => console.log(inside));

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed').catch(error => console.log(error));

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
    'http://swapi.dev/api/people/1',
    'http://swapi.dev/api/people/2',
    'http://swapi.dev/api/people/3',
    'http://swapi.dev/api/people/4'
]

//must fetch the data then parse it first
//Promise.all(urls.map(links => {
//  return links})).then(item = console.log(item));

const wait = async () => {
   await  Promise.all(urls.map(links => {
       return fetch(links,{
           credentials: 'include'
       }).then(outputs => outputs.json());  // this is to open the links and read the data within
    })).then(result => result.map(result => console.log(result))).catch(error => console.log('something is wrong'))
}
wait();

Promise.all(urls.map(url => {
    return fetch(urls)
})).then(urls => urls.json()).then(link => link.map(link => console.log(link))).catch(error => console.log('fatal'))


// #6) Change one of your urls above to make it incorrect and fail the promise
// does your cat

//==============================================================================
//async await
//==============================================================================
// Solve the below problems:

// #1) Convert the below promise into async await
fetch("https://jsonplaceholder.typicode.com/users/")
  .then((response) => response.json())
  .then(console.log);

//1 way
const load = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then(console.log);
}

//2 way

const loading = async () => {
    let one = await fetch('https://jsonplaceholder.typicode.com/users/')
    let two = await one.json();
    console.log(two);
}
// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
    ];

const getData = async function () {
    const [users, posts, albums] = await Promise.all(
        urls.map((url) => fetch(url).then((resp) => resp.json())),
        );
    console.log("users", users);
    console.log("posta", posts);
    console.log("albums", albums);
};

const newone = async () => {
    const urls = [
        "https://jsonplaceholder.typicode.com/users",
        "https://jsonplaceholder.typicode.com/posts",
        "https://jsonplaceholder.typicode.com/albums",
        ];

    const firstStage = await Promise.all(urls.map(one => {
        return fetch(one);
    }))
    const sencondStage = await Promise.all(firstStage.map(inside => {
        return inside.json()}));
    console.log(sencondStage.map(within => within))
}

// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    //  "https://jsonplaceholdeTYPO.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
    ];

const newone = async () => {

    try {
        const firstStage = await Promise.all(urls.map(one => {
            return fetch(one);
        }))
        const sencondStage = await Promise.all(firstStage.map(inside => {
            return inside.json()}));
        sencondStage.map(within => {return console.log(within)});
    } catch (error){
        console.log('not looking soo good', error)
    }
}
newone()


//works
let oneLineWeb = async () => {
    try {
        let see = await fetch("https://jsonplaceholder.typicode.com/users/")
        let one = await see.json();
        one.map(inside => { return console.log(inside)})
    } catch (error) {
        console.log('error', error)
    }
}

oneLineWeb();

let oneLine = async () => {
    try {
        let see = await fetch("https://jsonplaceholder.typicode.com/users/").then(see => see.json())
        console.log(see);
    } catch (error) {
        console.log('error', error)
    }
}

oneLine();



// last task

const lastone = async () => {
    try{
        const urls = [
            "https://jsonplaceholder.typicode.com/users",
            "https://jsonplaceholder.typicode.com/posts",
            "https://jsonplaceholder.typicode.com/albums",
            "https://jsonplaceholder.typicode.com/users",
            "https://jsonplaceholder.typicode.com/albums",
            ];

        let firstStage = await Promise.all(urls.map(links => {
            return fetch(links)
        }));
        let secondStage = await Promise.all(firstStage.map(first => {
            return first.json();
        }));
//        console.log(secondStage.map(within => within));
            secondStage.map(within => console.log(within));
    } catch (erro) {
        console.log(erro)
    }
}

lastone();

//===================================
