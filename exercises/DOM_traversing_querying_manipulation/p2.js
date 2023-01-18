//<div id="1">
//  <h1 id="2">Hello, <em id="3">World</em></h1>
//  <p id="4">
//    Welcome to wonderland. This is an
//    <span id="5">awesome</span> place.
//  </p>
//  <a href="#" id="6"><strong id="7">Enter</strong></a>
//  <div id="8"><p id="9"><a href="#" id="10">Go back</a></p></div>
//</div>

div id 1:
  empty text
  h1
  empty text
  p
  empty text
  a
  empty text
  div id 8
 total: 8 + 4 + 5 + 2 + 3 = 22

h1 id 2:
  text
  emphasis id 3 (1 child)
  text
 Total: 4

emphasis id 3:
  text
 Total: 1

p id 4:
  text
  empty text
  span id 5 (value 2)
  empty text
 Total: 5

span id 5:
  text
 Total: 1

a id 6
  strong id 7 (value 2)
 total: 2

strong id 7
  text
 total: 1

div id 8
  p id 9 
  a id 10
 total: 3

p id 9
  a id 10
 total: 2

a id 10
  text
 total: 1
