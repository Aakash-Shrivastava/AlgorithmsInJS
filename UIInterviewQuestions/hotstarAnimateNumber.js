var initialVal = 0;
var finalVal = 1000;
var myNumberElem = document.getElementById("myNumber");

(function () {
	console.log("Started");
	myNumberElem.textContent = initialVal;
	animate(1);
})();

function animate(delay){
  let i =initialVal;
  let myInterval;
  myInterval = setInterval(function(){
    	myNumberElem.textContent = i++;
      if(i === 1001)
      clearInterval(myInterval)
  },delay)
}