// Q27 Prime Number 0 to 100 - - - - - - - - - - - - - - - - - - - - - - - 

function primeNumbers(){
    value = 100;
    let primeArray = [1, 2];                          // [1, 2, 3, 5, 7, ]

    for (let i = 3; i <= value; i+=2){                // i = 11

        let flag = 0;
        for(let j = 2; j <= Math.floor(i/2); j++){    // j = 2 // j <= 5 

            if(i % j == 0){            // 
                flag += 1;
                break;
            }
        }
        if(flag == 0){                 // 
            primeArray.push(i)
        }
    }
    console.log(`Prime Numbers from 0 to ${value} is : ${primeArray}`);
    alert(`Prime Numbers from 0 to ${value} is : ${primeArray}`);
    alert(`This program is able to find prime upto any Number, only thing need to change is "const value = ${value}" to your number, under primeNumbers() function`)
    return ;
}
primeNumbers();