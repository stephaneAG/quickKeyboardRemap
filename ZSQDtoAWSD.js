//document.addEventListener("keydown", function(e){ console.log(e.key, e.char, e.keyCode) });

/*
var e = new KeyboardEvent("keydown", {bubbles : true, cancelable : true, key : "Q", char : "Q", shiftKey : true});
element.dispatchEvent(e);
*/
/* UP/DOWN/LEFT/RIGHT to ..
document.addEventListener("keydown", function(e){
  console.log(e.key, e.char, e.keyCode);
  
  if( e.keyCode === 65 ){ // A
    e.preventDefault();
    var e = new KeyboardEvent("keydown", {
      bubbles : true, cancelable : true, key : "ArrowUp", char : undefined, keyCode: 38, shiftKey : false
    });
    document.dispatchEvent(e);
  } else if( e.keyCode === 87 ){ // W
    e.preventDefault();
    var e = new KeyboardEvent("keydown", {
      bubbles : true, cancelable : true, key : "ArrowDown", char : undefined, keyCode: 40, shiftKey : false
    });
    document.dispatchEvent(e);
  } else if( e.keyCode === 83 ){ // S
    e.preventDefault();
    var e = new KeyboardEvent("keydown", {
      bubbles : true, cancelable : true, key : "ArrowLeft", char : undefined, keyCode: 37, shiftKey : false
    });
    document.dispatchEvent(e);
  } else if( e.keyCode === 68 ){ // D
    e.preventDefault();
    var e = new KeyboardEvent("keydown", {
      bubbles : true, cancelable : true, key : "ArrowRight", char : undefined, keyCode: 39, shiftKey : false
    });
    document.dispatchEvent(e);
  }
});
*/

// Z/S/Q/D to A/W/S/D
document.addEventListener("keydown", function(e){
  console.log(e.key, e.char, e.keyCode);
  
  if( e.keyCode === 90 ){ // Z
    e.preventDefault();
    var e = new KeyboardEvent("keydown", {
      bubbles : true, cancelable : true, key : "a", char : undefined, keyCode: 65, shiftKey : false
    });
    document.dispatchEvent(e);
  } else if( e.keyCode === 83 ){ // S
    e.preventDefault();
    var e = new KeyboardEvent("keydown", {
      bubbles : true, cancelable : true, key : "w", char : undefined, keyCode: 87, shiftKey : false
    });
    document.dispatchEvent(e);
  } else if( e.keyCode === 81 ){ // Q
    e.preventDefault();
    var e = new KeyboardEvent("keydown", {
      bubbles : true, cancelable : true, key : "s", char : undefined, keyCode: 83, shiftKey : false
    });
    document.dispatchEvent(e);
  } 
  /*
    else if( e.keyCode === 68 ){ // D
    e.preventDefault();
    var e = new KeyboardEvent("keydown", {
      bubbles : true, cancelable : true, key : "ArrowRight", char : undefined, keyCode: 39, shiftKey : false
    });
    document.dispatchEvent(e);
  }
  */
});

document.addEventListener("keyup", function(e){
  console.log(e.key, e.char, e.keyCode);
  
  if( e.keyCode === 90 ){ // Z
    e.preventDefault();
    var e = new KeyboardEvent("keyup", {
      bubbles : true, cancelable : true, key : "a", char : undefined, keyCode: 65, shiftKey : false
    });
    document.dispatchEvent(e);
  } else if( e.keyCode === 83 ){ // S
    e.preventDefault();
    var e = new KeyboardEvent("keyup", {
      bubbles : true, cancelable : true, key : "w", char : undefined, keyCode: 87, shiftKey : false
    });
    document.dispatchEvent(e);
  } else if( e.keyCode === 81 ){ // Q
    e.preventDefault();
    var e = new KeyboardEvent("keyup", {
      bubbles : true, cancelable : true, key : "s", char : undefined, keyCode: 83, shiftKey : false
    });
    document.dispatchEvent(e);
  } 
  /*
    else if( e.keyCode === 68 ){ // D
    e.preventDefault();
    var e = new KeyboardEvent("keydown", {
      bubbles : true, cancelable : true, key : "ArrowRight", char : undefined, keyCode: 39, shiftKey : false
    });
    document.dispatchEvent(e);
  }
  */
});
