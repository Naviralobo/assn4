//Promise

console.log('Person1: shows ticket');
console.log('Person2: shows ticket');

const promiseWifeBringingTicks = new Promise((resolve,reject) => {
    setTimeout(() =>{
       resolve('ticket');
    },3000)
});

const getPopcorn = promiseWifeBringingTicks.then((t) => {
    console.log('wife:I have tickets');
    console.log('hus: we should go in');
    console.log('wif: No, I am hungry');
    return new Promise((resolve,reject) => resolve(`${t} popcorn`))
});

const addButter = getPopcorn.then((t)=>{
    console.log('hus: I got Popcorn');
    console.log('hus: we should go in');
    console.log('wife: I need butter on my popcorn');
    return new Promise((resolve,reject) => resolve(`${t} butter`))
});

const getColdDrinks = addButter.then((t)=>{
    console.log('hus: I got coke');
    console.log('hus: we should go in');
    return new Promise((resolve,reject) => resolve(`${t} coke`))
});

getColdDrinks.then((t) => console.log(t));

console.log('Person4: shows ticket');
console.log('Person5: shows ticket');

//AsyncAwait

console.log('Person1: shows ticket');
console.log('Person2: shows ticket');

const preMovie = async() => {
    const promiseWifeBringingTicks = new Promise((resolve,reject) => {
        setTimeout(() =>{
           resolve('ticket');
        },3000)
    });

    const getPopcorn = new Promise((resolve,reject) => resolve('popcorn'));

    const addButter = new Promise((resolve,reject) => resolve('butter'));

    const getColdDrinks = new Promise((resolve,reject) => resolve('coke'));

    let ticket = await promiseWifeBringingTicks;
    console.log(`wife:I have ${ticket}`);
    console.log('hus: we should go in');
    console.log('wif: No, I am hungry');

    let popcorn = await getPopcorn;
    console.log(`hus: I got ${popcorn}`);
    console.log('hus: we should go in');
    console.log('wife: I need butter on my popcorn');

    let butter = await addButter;
    console.log(`hus: added ${butter}`);
   // console.log('lets watch movie');
   console.log('wife: I need a drink');

   let drink = await getColdDrinks;
   console.log(`hus: I got ${drink}`);
   console.log('lets watch movie');

    return ticket;
}
preMovie().then((m) => console.log(m));


//Promise.all
console.log('Person1: shows ticket');
console.log('Person2: shows ticket');

const preMovie = async() => {
    const promiseWifeBringingTicks = new Promise((resolve,reject) => {
        setTimeout(() =>{
           resolve('ticket');
        },3000)
    });

    const getPopcorn = new Promise((resolve,reject) => resolve('popcorn'));

    const addButter = new Promise((resolve,reject) => resolve('butter'));

    const getColdDrinks = new Promise((resolve,reject) => resolve('coke'));

    let ticket = await promiseWifeBringingTicks;

    let [popcorn, butter, drink] = await Promise.all([getPopcorn,addButter,getColdDrinks]);

    console.log(`${popcorn} ${butter} ${drink}`);

    return ticket;
}
preMovie().then((m) => console.log(`shows ${m}`));

//create and delete post

const posts=[
    {title:'post1',body:'This is post1',createdAt:new Date()},
    {title:'post2',body:'This is post2',createdAt:new Date()}
];

/*async function createPost(post){
    const creation = await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error){
                resolve();
            }
            else{
                reject(`Error:something went wrong`);
            }
        },1000);
    });
}*/
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error){
                resolve();
            }
            else{
                reject(`Error:something went wrong`);
            }
        },3000);
    });
}

/*async function deletePost(){
    const deletion =await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>=0){
                resolve(posts.pop());
            }
            else{
                reject(`Error:Array is empty now`);
            }
        },1000);
    }); 
}*/

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>=0){
                resolve(posts.pop());
            }
            else{
                reject(`Error:Array is empty now`);
            }
        },1000);
    }); 
}

let intervalId = 0;
function getPosts(){
clearInterval(intervalId);
intervalId=setInterval(()=>{
    let output='';
    posts.forEach((post,index)=>{
        output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
},1000);
}

/*createPost({title:'post3',body:'This is post3'});
getPosts();
deletePost();*/

async function printPosts(){
    await createPost({title:'post3',body:'This is post3'})
    getPosts();
    await createPost({title:'post4',body:'This is post4'})
    getPosts();
    await deletePost();
    getPosts();
}
printPosts();