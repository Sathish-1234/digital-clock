const Clock=document.querySelector('.timer')
function runClock(){

const r=new Date()
var h=r.getHours();
var m=r.getMinutes();
var s=r.getSeconds();
var tet="Am"
if(h>12){
   h=h-12;
   

}
else if(h==0){

    h=12;
    tet="Am"
}
var h=h<10?"0"+h:h;
var s=s<10?"0"+s:s;
var m=m<10?"0"+m:m;
Clock.innerHTML=`${h} : ${m} : ${s} ${tet}`;


}
runClock();
setInterval(runClock,1000);