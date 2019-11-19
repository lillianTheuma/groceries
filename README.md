# PizzaOrder - Lillian Theuma
This portfolio is presented as a solution to the project guidelines described in

# TABLE OF CONTENTS
```
- GITHUB repository
- Requirements
- Setup
  - Setup with GIT
  - Setup without GIT
- Usage
- Documentation
  - Classes
    -Pizza
    -OrderList
- Credits
- License Information
```
## Repository
* This project can be found at https://github.com/lillianTheuma/Portfolio

## Requirements
* A FTP server
OR
* A local computer
AND
* Internet connection

## Setup with GIT
* Open terminal, and navigate to a directory of your choice, then use the following command to clone files to local machine.

```
git clone https://github.com/lillianTheuma/PizzaOrder
```

## Setup without GIT
* Navigate to https://github.com/lillianTheuma/PizzaOrder on a web browser
* Find the bottom labeled "clone or download", and click it to open a drop-down menu
* Click Download Now on the drop-down menu
* Extract contents of .zip folder into directory of your choice

# Usage
If using on a local machine, open (./PizzaOrder/index.html)
OR
If using on an FTP, direct users to (./PizzaOrder/index.html)

Navigate between project files with the drop-down menu on the upper navbar. Each project is labeled according to their week.

# Documentation
* Non-numbers are returned immediately with a snarky comment saying "no, YOU deal with this"
```
"potato" >> "potato no, YOU deal with this"
```
* If value equals the value of a symbol, return the symbol
```
" 5 >> V"
```
* Values equaling sum of any combination of symbols (one of each) returns the symbols in order of descending value.
```
16 >> XVI
```
* Value is subtracted by adding an element out of order of descending value of symbols.
```
4 >> IV
```
* Fewest number of symbols are returned
```
4 >> IV
NOT
4 >> IIII
16 >> XVI
NOT
16 >> IIIIXX
```
* Multiple symbols within descending value order add values together.
```
25 >> XXV
```
# License
* This repository is offered under the MIT license
@ Lillian Theuma 2019
See LICENSE file for additional details regarding license.


