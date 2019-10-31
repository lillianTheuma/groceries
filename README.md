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
