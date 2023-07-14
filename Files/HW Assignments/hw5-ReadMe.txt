Name: Gandhar Kulkarni
Student ID: 20702101

This assignment involved creating an HTML page that utilizes jQuery to create and format an HTML table dynamically. The HTML page consists of an <h1> header and an <hr> element for section separation. Two color input elements with unique IDs were added along with corresponding labels. The main component of the page is a table, identified by the ID tblData, which was structured using the appropriate HTML elements (table, thead, tbody, th, and td). 
Each row of the table contains a delete button, represented by an <input> element with the class "delete".
To ensure proper styling, the CSS file, HW5.css, was created. The <body> element was styled with a chosen font-family and font-size. The table element was given a border-collapse property set to "collapse" to display a single border, and the width was set to 100%. The <th> and <td> elements were styled with a 1px solid border (color of choice), 8px of padding, and left-aligned text. Additionally, the <th> element alone received a background color in a shade of gray.
The JavaScript file, HW5.js, implemented event handlers using jQuery. Inside the load event, three event handlers were registered. First, all elements with the class "delete" were selected, and a click event was assigned to the fDeleteRow function. Second, the same elements were selected to respond to the mouseover event using the fMousePointer function. Lastly, the elements with the IDs "even" and "odd" were selected to trigger the fAlternateRow function on a change event.
In the fAlternateRow function, all even rows were selected using jQuery selectors, and the css method was used to set their background color to the value of the input with the ID "even". Similarly, odd rows had their background color set to the value of the input with the ID "odd". 
The fAlternateRow function was called during the load event to initially apply the alternate row coloring.
The fMousePointer function modified the cursor property to "pointer" for the currently selected delete button, providing visual feedback when hovering over the button.
The fDeleteRow function involved several steps. 
Firstly, a variable, tr, was created to store the jQuery selection of the current delete button using this as the JavaScript object. The closest method was then used with the tr element passed as an argument to find the closest ancestor <tr> element. 
Next, the fadeOut method was chained to the tr variable, setting a duration of 2 seconds. Within the callback function of the fadeOut method, the tr variable was used again with the remove method to remove the selected <tr> element. 
Finally, the fAlternateRow function was called to refresh the alternate row coloring.
Rows can be deleted by clicking on the respective delete buttons, the mouse pointer changes to a hand when hovering over the buttons, and alternate row coloring is refreshed after a deletion.

Resources used: Lecture slides