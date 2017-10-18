// Rozwiązanie wg zadania z sylabusa


//function Toggler(selector){
//	
//	this._obj = document.querySelector(selector);
//	
//};
//
//Toggler.prototype.getElem = function(){
//	
//	return this._obj;
//	
//};
//
//Toggler.prototype.show = function(){
//	
//	this._obj.style.display = "";
//	
//};
//
//Toggler.prototype.hide = function(){
//	
//	this._obj.style.display = "none";
//	
//};
//
//
//var elem = new Toggler("#section");
//var button = document.querySelector("#button");
//
//button.addEventListener("click", function() {
//
//    if(elem.getElem().style.display == "none") {
//        elem.show();
//    } else {
//        elem.hide();
//    }
//
//}, false);



// bardziej zoptymalizowane rozwiązanie

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

Toggler.prototype.toggle = function(){
	
	 if(this._obj.style.display == "none") {
        this.show();
    } else {
        this.hide();
    };
	
};


var elem = new Toggler("#section");
var button = document.querySelector("#button");

button.addEventListener("click", function() {

    elem.toggle();

}, false);















