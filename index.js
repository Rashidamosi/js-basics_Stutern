//MULTIPLYING TWO NUMBERS
// In the ‘js-basics’ folder you created above, create a file and name it ‘index.js’. 
// Inside the file, Write a function that multiples two numbers. Call that function to multiply any two numbers of
//  your choice and log the answer in your console

function multiply(num1, num2){

             return num1 * num2;
         }
    
         console.log(multiply(3, 2))


         ////PRINTING OUT SENTENCE IN A VARIABLE
         //In the same index.js file, create variables for your first name, last name, Stutern track, skills, favourite color, 
        //  year of your country’s independence. Use these variables to form a sentence and log the sentence in the console.

        const firstname = 'Rashida';
        const lastname = 'Abdul-rashid';
        const Stutern_track = 'Frontend Development';
        const favourite_color = 'white';
        const country_independence = '1960';

        //Temple string way

        let result = `I am ${firstname} ${lastname}, and I am on the ${Stutern_track} track. My favorite color is ${favourite_color} and my country got her independence in the year ${country_independence}`
        console.log(result);

