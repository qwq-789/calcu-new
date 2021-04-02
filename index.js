let display = document.getElementById("displayText");

show = (i) => {
    if (display.innerHTML === '0'){
        
        display.innerHTML = i
        
    }else{
        
        display.innerHTML += i
        
    }
}

dis = () => {
    if (display.innerHTML === '0') {
        
        display.innerHTML = '0'
        
    }else if (display.innerHTML.slice(-1) === '/'){
        
        display.innerHTML = display.innerHTML
        
    }else{
        
        display.innerHTML += '/'
        
    }
}

time = () => {
    if (display.innerHTML === '0') {
        
        display.innerHTML = '0'
        
    }else if (display.innerHTML.slice(-1) === '*'){
        
        display.innerHTML = display.innerHTML
        
    }else{
        
        display.innerHTML += '*'
        
    }
}

miuns = () => {
    if (display.innerHTML === '0') {
        
        display.innerHTML = '0'
        
    }else if (display.innerHTML.slice(-1) === '-'){
        
        display.innerHTML = display.innerHTML
        
    }else{
        
        display.innerHTML += '-'
        
    }
}

plus = () => {
    if (display.innerHTML === '0') {
        
        display.innerHTML = '0'
        
    }else if (display.innerHTML.slice(-1) === '+'){
        
        display.innerHTML = display.innerHTML
        
    }else{
        
        display.innerHTML += '+'
        
    }
}

let c = document.getElementById('c');

c.onclick = () =>{
    display.innerHTML = '0'
}


result = () => {
    
    if(display.innerHTML.slice(-1) === '+' ||
       display.innerHTML.slice(-1) === '-'){
        
        display.innerHTML += '0'
        
    }
    
    if (display.innerHTML.slice(-1) === '/' ||
        display.innerHTML.slice(-1) === '*'){
           
           display.innerHTML += '1'
           
    }
    
    let result = eval(display.innerHTML);
    display.innerHTML = result;
    
}