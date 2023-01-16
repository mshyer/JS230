//write script to retrieve word count for each h2 heading on page
//1. get the h2 headings
//2. get the text content of each heading
//3. split into words by whitespace
//4. add the wordcounts to an array or log them to console

let headings = document.getElementsByTagName('H2');
let textCounts = [];

function countWords(string) {
  let words = string.trim().split(/\s+/);
  return words.length;
}

for(let idx = 0; idx < headings.length; idx += 1) {
  textCounts.push(countWords(headings[idx]);
}
