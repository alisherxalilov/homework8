let banner=document.querySelector(".banner");
function click(){
    console.log("clicks")
}
banner.addEventListener("click",(e)=>{
    e.preventDefault()
    click();
})