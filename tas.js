var x=document.getElementById('sscreen');
var y=document.getElementById('sbtn');
var r=document.getElementById('rbtn');
	var d=document.getElementById('d');
var ul=document.getElementById('ul');
var t=document.getElementById('t');
var c=document.getElementById('c');
var s=document.getElementById('s');
var alert3=document.getElementById('alert3');
var a=['darkblue','blue','red','yellow','brown','orange',]
var yes=document.getElementById('yes');
var no=document.getElementById('no');
var main=document.getElementById('main');
var dd=document.getElementById('dd');
var ok=document.getElementById('ok');

var i;
var l;

l=0;
s.style.backgroundColor=a[l]
i=1;
var z;
z=i;

t.onclick=function(){var e=prompt('enter your target');
		f=1;			 
	ne=e*1+f-1;				 
}


ul.style.display='none';

	y.onclick=function(){
		x.innerText=i;
		i=i+1;
		if(i>999){x.style.fontSize='36px'}
		
				
	
	if(i-1==ne){window.alert('you achived your target!')}
	
	}

		
	
	var ss;
ss='v';
r.onclick=function(){ x.innerText=i; alert3.style.display='block'; ;
	
					}
yes.onclick=function(){ i=0; alert3.style.display='none';x.innerText=i;}
	no.onclick=function(){i=i-1;alert3.style.display='none';x.innerText=i;}
us='t';
d.onclick=function(){
	
	if(us=='t'){ul.style.display='block'; us='f'}
	else{ul.style.display='none'; us='t'}
}
c.onclick=function(){l=l+1;s.style.backgroundColor=a[l];c.innerText=a[l];if(l==a.length-1){l=l-5} }
var coco;
coco=true;
dd.onclick=function(){
if(coco==true){main.style.backgroundColor='black'; dd.innerText='lightmode'; coco=false;}
else{main.style.backgroundColor='blue'; dd.innerText='darkmode'; coco=true;}}