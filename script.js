function Toggler(selector){
	
	this._obj = document.querySelector(selector);
	
};

Toggler.prototype.getElem = function(){
	
	return this._obj;
	
};

Toggler.prototype.show = function(){
	
	this._obj.style.display = "";
	
};

Toggler.prototype.hide = function(){
	
	this._obj.style.display = "none";
	
};


var elem = new Toggler("#section");
var button = document.querySelector("#button");

button.addEventListener("click", function() {

    if(elem.getElem().style.display == "none") {
        elem.show();
    } else {
        elem.hide();
    }

}, false);
