const posts=[
    {title:'post1',body:'This is post1',createdAt:new Date().getTime()},
    {title:'post2',body:'This is post2',createdAt:new Date().getTime()}
];
let intervalId=0;
function getPosts(){
    clearInterval(intervalId);
    intervalId=setInterval(()=>{
        let postList='';
        posts.forEach((post,index)=>{
            postList+=`<li>${post.title} last updated ${(post.createdAt - new Date().getTime())/1000} seconds ago</li>`;
        });
        document.body.innerHTML = postList;
    },1000);
}
function createPost(post,callBack){
    setTimeout(()=>{
        posts.push({...post,createdAt: new Date().getTime()});
        callBack();
    },2000);
}
function create4thPost(post,callBack1){
    setTimeout(()=>{
        posts.push({...post,createdAt: new Date().getTime()});
        callBack1();
    },6000);
        
}

createPost({title:'post3',body:'This is post3'},getPosts);
create4thPost({title:'post4',body:'This is post4'},getPosts );
