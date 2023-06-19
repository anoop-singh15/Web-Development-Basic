function toggleHide(){
    let para=document.getElementById('para');
    if(para.style.display =='none')
    {
        para.style.display='block';
    }
    else
    {
        para.style.display='none';
    }

}

// id points variable by default
let event1 =document.getElementById('heading');
 event1.addEventListener('mouseover',function run(){
    console.log("Mouse over heading");
});