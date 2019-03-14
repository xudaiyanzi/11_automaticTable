// from data.js
var tableData = data;

// Get a refernce to the table body
var tbody =  d3.select("tbody");


//remove previous data in the table except the first row
function removeTbodyRow(){
    // var rowCount = document.getElementsByTagName("tbody").length;
    // console.log(rowCount);

    // if (rowCount >0 ) {   
    //     for (var x=rowCount-1; x=0; x--) {
    //     document.getElementsByTagName("tbody").deleteRow(x);
    //     };
    // }

    tbody.text("")
}

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    removeTbodyRow();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    //console.log(inputValue);
    //console.log(tableData);
  
    var filteredData = tableData.filter(row => row.datetime === inputValue);
  
    //console.log(filteredData);
    //removeTbodyRow();

  
    // Use d3 to update the cell's text with
    // NASA report values (datetime, city, state, country, shape, comment)
    filteredData.map(function(entry) {
        //console.log(entry);

         var row = tbody.append("tr");
        //var row = tbody.tr;

        Object.entries(entry).forEach(function([key, value]) {
                    //console.log(key, value);
                    // Append a cell to the row for each value
                    // in the nasa report object
                    var cell = tbody.append("td");
                    cell.text(value);
        });
    });
});

