function run(){

    number = document.getElementById("inputN").value;
    output = document.getElementById("result");
    output.innerHTML = "";

    if(number > 0 && number % 1 == 0){
        const serie = Fibonacci(number);
        output.innerHTML += serie;
    }
    else{
        output.innerHTML = "Verifique su entrada";
    }
}

function Fibonacci(n) {

    const  arr = []; 
    
    for(let i = 0; i < n; i++){
      if(i == 0 || i == 1){
        arr[i] = 1;
      }
      else{
        arr[i] = arr[i-1] + arr[i-2];
      }
    }

    return arr; 

}