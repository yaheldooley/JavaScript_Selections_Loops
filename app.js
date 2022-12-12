console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 1; i <= 100; i++)
{
    if(i % 2 != 0)
    {
        console.log(i);
    }
}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let i = 1; i <= 100; i++)
{
    let answer = "";
    if (i % 3 == 0)
    {
        answer += "FIZZ";
    }
    if (i % 5 == 0)
    {
        answer += "BUZZ";
    }
    if(answer != "")
    {
        console.log(answer);
    }
}

console.log("EXERCISE 3:\n==========\n");
let index = 1;
do
{
    if (index % 2 != 0)
    {
        console.log(index);
    }
    index++;
}while(index <= 100);

index = 1;
do
{
    let answer = "";
    if (index % 3 == 0)
    {
        answer += "FIZZ";
    }
    if (index % 5 == 0)
    {
        answer += "BUZZ";
    }
    if(answer != "")
    {
        console.log(answer);
    }
    index++;
}while(index <= 100);

console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 0; i < n; i++)
{
    if (i == value)
    {
        console.log("Found value!");
        break;
    }
    else if (i == n - 1)
    {
        console.log("Did not find value");
    }
}

console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for(let i = start; i <= n; i++)
{
    let answer = "";
    if (i % fizzDivisor == 0)
    {
        answer += "FIZZ";
    }
    if (i % buzzDivisor == 0)
    {
        answer += "BUZZ";
    }
    if(answer != "")
    {
        console.log(answer);
    }
}