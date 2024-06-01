let i = 20;
let element = '';

do {
    // Magic goes here
    if (i == 0) {
        element = 'LIFTOFF';
    } else if(i % 5 == 0) {
        element = i + '!';
    } else {
        element = i;
    }
    
    console.log(element);
    i--;
} while (i >= 0);
