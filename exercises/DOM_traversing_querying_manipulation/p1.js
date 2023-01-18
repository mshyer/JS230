//The following code will produce the following tree
//document
//head
//body
//div
//empty text
//p
//empty text
//  (part of p) full text
//    emphasis tag
//  full text
//    (part of emphasis tag) full text
//Total: 11? Hey that was right!
<div>
  <p>Then press the <em>Draw</em> button</p> 
</div>

// The following code will produce how many Nodes?
// document
// head
// body
  // div
    // p
      //text
      //em
        //text
      //text
//9 total? Hey! I'm right again.

<div><p>Then press the <em>Draw</em> button.</p></div>
