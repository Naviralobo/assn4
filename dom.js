//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title=123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textcontent = 'Hello';
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);
//var header = document.getElementById('main-header');
//header.style.borderBottom='solid 3px #000';

//var titles = document.getElementsByClassName('title');
//titles[1].style.fontWeight='bold';
//titles[1].style.color='green';


var items = document.getElementsByClassName('list-group-item');
undefined
console.log(items);

console.log(items[1]);

items[1].textContent='Hello 2';

items[0].style.fontWeight='bold';

items[1].style.backgroundColor='yellow';

for(var i=0; i<items.length ;i++){
    items[i].style.backgroundColor='#f4f4f4';
}

items[2].style.backgroundColor='green';
for(var i=0; i<items.length ;i++){
    items[i].style.fontWeight='bold';
}


var items=document.getElementsByClassName('list-group-item');

console.log(items);
//VM1256:1 HTMLCollection(4) [li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item]

var li = document.getElementsByTagName('li');

console.log(li);
//VM1427:1 HTMLCollection(5) [li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li]

items[4].style.color='red';
//VM1492:1 Uncaught TypeError: Cannot read properties of undefined (reading 'style')at <anonymous>:1:10

li[4].style.color='red';
//'red'

for(var i=0; i<items.length ;i++){
    items[i].style.backgroundColor='#f4f4f4';
}
//'#f4f4f4'
for(var i=0; i<li.length ;i++){
    li[i].style.backgroundColor='#f4f4f4';
}
//#f4f4f4'



var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//undefined
secondItem.style.backgroundColor='green';
//'green'
var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
//undefined
thirdItem.style.visibility='hidden';
//'hidden'



var items = document.querySelectorAll('.list-group-item');
//undefined
items[1].style.backgroundColor='green';
//'green'
var odd = document.querySelectorAll('li:nth=child(odd)');
var odd = document.querySelectorAll('li:nth-child(odd)');
//undefined
for(var i=0; i<odd.length;i++){
    odd[i].style.backgroundColor='yellow';
}
//'yellow'