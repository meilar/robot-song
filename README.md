<h1 align="center">Mr. Roboger's Neighborhood</h1>

Matthew Eilar | [LinkedIn](https://www.linkedin.com/in/eilar-503/) | [email](mailto:<meilar@gmail.com>) | [website](www.mattheweilar.com)

## About this project
 
This web application takes a number from the user and returns a range of numbers from 0 to the user inputted number with some themed substitutions made along the way. 

## Features


## How to view

To view this webpage:

1. Ensure that you have the most recent version of Git installed. [Instructions can be found here.](https://github.com/git-guides/install-git) 
1. Clone this repository to your local machine using the Terminal or Bash command `git clone https://github.com/meilar/robot.git`.
2. Open "index.html" in Google Chrome.

[Alternately, a hosted version of this pages is available to view on Github Pages.](https://meilar.github.io/robot)

## Technologies Used

This site incorporates the following frameworks and languages:

- HTML 5
- CSS 3
- jQuery 3.6.0
- Bootstrap 4.5

The following software tools were used to develop this page:

- VS Code
- Google Chrome
- Git

## Known Issues

### Testing

The following tests were conducted to focus development and practice test-driven development.

#### Describe: testBeep(number)

Test: It should return true if the inputted number contains a 1.
Code: `testBeep(1771);`
Expected Output: `true`

Test: It should return false if the inputted number does not contain a 1.
Code: `testBeep(6776);`
Expected Output: `false`

**note:this function and strategy for testing numbers was deleted and refactored into the numTest function**

#### Describe: numTest(number)

Test: it should return an array when called.
Code: `numTest();`
Expected output: `[0, 0, 0]`

Test: It should increment a counter array based on the presence of 1, 2, or 3 in an input number.
Code: `numtest(123);`
Expected Output: `[1, 1, 1]`

Test: It should increment a counter array based on the presence of each 1, 2, or 3 in an input number.
Code: `numtest(11233);`
Expected Output: `[2, 1, 2]`

#### Describe: numSplit(number)

Test: It should split input number into an array of numbers.
Code: `numSplit(1771);`
Expected Output: `[1, 7, 7, 1]`

#### Describe: validation(number)

Test: It should return false if NaN is passed as an agrument.
Code: `validation(NaN);`
Expected Output: `false`

Test: It should return true if any other number is passed as an agrument.
Code: `validation(123);`
Expected Output: `true`

#### Describe: arrBuilder(inputNum)

Test: It should increment a counter equal to the value of inputNum.
code: `arrBuilder(10);`
Expected Output: console log: 10

Test: It should push each value between 1 and the inputNum into a new array called outputArr.
code: `arrBuilder(3);`
Expected output: `[1, 2, 3]`

#### Describe: inputTransform(inputNum)

Test: It should create a new array by passing a value to arrBuilder then running that array through a for loop that pushes values into the new array.
code: `inputTransform(3)`
Expected output: `[1, 2, 3]`

Test: it should run new array through a for each loop and return a numScore for each number.
Code `inputTransform(3)`
Expected output: [1, 0, 0] [0, 1, 0] [0, 0, 1]

Test: it should replace numbers that inlcude a 1, 2, or 3 with a string.
code: `inputTransform(4);`
Expected output: [Beep, Boop, Won't You Be My Neighbor?, 4]




## Acknowledgements

Thank you to my partner, Alex, for support in all ways. Thank you to my parents for encouraging technology exploration, even when resources were scarce. Thank you to the Kohlenberg Foundation for sending my mother get-well flowers.

## License 

© 2022 Matthew Eilar

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.







WIP TODO



    business logic
      takes in number, spits out array for print
    
      print to dom
