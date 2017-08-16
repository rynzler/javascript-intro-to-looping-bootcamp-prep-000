function forLoop(a){
  for (let i = 0; i < 25; i++){
    a.unshift("I am ${i} strange loops.")
  }
  return a;
}

function whileLoop(n){
  while (n > 0) {
    console.log(--n);
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(a){
  do {
    a.pop();
  } while (a.length > 0 && maybeTrue());
  return a;
}
