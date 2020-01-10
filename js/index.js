var curIndex=1;
function next(){
	if(curIndex>6){return};
	var cur=document.getElementById("page"+curIndex);
	cur.classList.remove("rotate1");
	cur.classList.add("rotate-1");
	curIndex++;
	var now=document.getElementById("page"+curIndex);
	now.classList.remove("rotate1");
	
}

function prev(){
	if(curIndex<2){return};
	var cur=document.getElementById("page"+curIndex);
	cur.classList.remove("rotate-1");
	cur.classList.add("rotate1");
	curIndex--;
	var now=document.getElementById("page"+curIndex);
	now.classList.remove("rotate-1");
}