// Activity 1
// if else statements
console.log("Activity 1 :");

for(let i=1; i<=10; i++){
    console.log(i);
}
let a=5;
for(let i=1; i<=10; i++){
    console.log(a*i);
}

// Activity 2
// nested if else statements
console.log("Activity 2 :");
let sum=0;
for(let i=1; i<=10; i++){
   sum+=i;
}
console.log("sum from 1 to 10 is: " ,sum);

for(let i=10; i>=1; i--){
    console.log(i);
 }
// Activity 3
// Switch case
console.log("Activity 3 :");
let i=1;

do{
    console.log(i);
    i++;
}while(i<=5)

//factorial

    let fac=1;

    let n=6;

do{
    if(n==0 && n==1){
        console.log(n);
        break;
    }
    else{
        fac = n*fac;
        n--;
    }
 

}while(n>1)
    console.log(fac);



// Activity 4
// Conditional ternary operator
console.log("Activity 4 :")

for(let i =0; i<5; i++){
    let row="";

    for(let j =0; j<i+1; j++){

    row += "*";

    }
    
    console.log(row);
}



// Activity 5
// Combining conditions
console.log("Activity 5 :")


for(let i=1; i<=10; i++){
    if(i==5){
        continue;
    }
    else{
        console.log(i);
    }
}


for(let i=1; i<=10; i++){
    if(i==7){
        break;
    }
    else{
        console.log(i);
    }
}