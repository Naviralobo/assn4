const posts=[
    {title:'post1',body:'This is post1',createdAt:new Date()},
    {title:'post2',body:'This is post2',createdAt:new Date()}
];
let intervalId = 0;
function getPosts(){
clearInterval(intervalId);
intervalId=setInterval(()=>{
    let output='';
    posts.forEach((post,index)=>{
        output += `<li>${post.title} last updated at ${post.createdAt}</li>`;
    });
    document.body.innerHTML = output;
},1000);
}

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
        },1000);
    });
}

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

function updateLastUserActivityTime(){
    return new Promise((resolve,reject) =>{
        let error = false;
        posts[posts.length-1].createdAt = new Date();
        if(!error){
            resolve(posts[posts.length-1].createdAt)
        }else{
            reject('something went wrong')
        }
});
}

createPost({title:'post3',body:'This is post 3'}).then(getPosts).then(updateLastUserActivityTime).catch(err=>console.log(err));
   // Promise.all([createPost,updateLastUserActivityTime]).then(values => console.log(values))
createPost({title:'post4',body:'This is post 4'}).then(getPosts).then(updateLastUserActivityTime).then(()=>{
    getPosts()
    deletePost().then(getPosts)
})


//createPost({title:'post3',body:'This is post 3'}).then(deletePost).then(getPosts).catch(err=>console.log(err));
//deletePost().then(getPosts).catch(err=>console.log(err));
//deletePost().then(getPosts).catch(err=>console.log(err));
//deletePost().then(getPosts).catch(err=>console.log(err));
/*createPost({title:'post3',body:'This is post3'}).then(()=>{ 
    getPosts()
    deletePost().then(getPosts).catch(err=>console.log(err))
}).catch(err => console.log(err));*/


/*const promise1 = Promise.resolve('Hello World')
const promise2 = 10;
const promise3 = new Promise((resolve,reject) => 
setTimeout(resolve,2000,'goodBye'));
Promise.all([promise1, promise2, promise3]).then(values => console.log(values));*/
