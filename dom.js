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

