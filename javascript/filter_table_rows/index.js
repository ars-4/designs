const form = document.getElementById('form');
const table = document.getElementById('table');
// Id for table and form


// Sample Filter Names For Checkboxes
let filters = [
    "name",
    "type",
    "usage",
    "description"
]



// Sample Data as in API Call which can be return as: 
/*
fetch('https://api.example.com/data', {
    method: 'GET',
    headers: {
        'Authorization': 'Token Sample_Token_xyz',
        'Content-type': 'application/json'
}).then(data => { return data.json() }).then( json_reconverted_data => {
    return json_reconverted_data;
}).catch(err => {
    throw new Error(err);
})
*/
let sample_data = [
    {name:"Red", type: "color", usage: "bad", description: "red is bad"},
    {name: "Blue", type: "color", usage: "cool", description: "blue is cool"},
    {name: "Green", type: "color", usage: "natural", description: "green is natural"},
];
async function get_data() {
    return sample_data;
}


// Set and Get Filters
async function get_filters() {
    for(let filter of filters) {
        let input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('value', filter);
        input.setAttribute('id', filter); // unique id for checkboxes
        input.setAttribute('checked', true); // default checked
        let label = document.createElement('label');
        label.innerHTML = filter;
        let space = document.createElement('span');
        space.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;";
        form.appendChild(input);
        form.appendChild(label);
        form.appendChild(space);
    }
    let button = document.createElement('button');
    button.innerHTML = "Filter";
    button.onclick = (event) => {
        event.preventDefault(); // prevent form submission and reloading the whole page 
        /* 
        Can also call oncheck event for each checkbox and get table with new filters
        by adding event listener to each checkbox like this after `let input = document.createElement('input')`:
        input.addEventListener('change', (event) => {
            get_table();
        })
        */
        get_table(); // get table with new filters
    }
    form.appendChild(button);
}

async function get_table() {
    let data = await get_data(); // get data from API
    let headers = [];
    table.innerHTML = "";
    for(let filter of filters) {
        if(document.getElementById(filter).checked) {
            headers.push(filter);
        }
    }
    let header_row = document.createElement('tr');
    for(let header of headers) {
        let header_cell = document.createElement('th');
        header_cell.innerHTML = header;
        header_row.appendChild(header_cell);
    }
    table.appendChild(header_row); // add header row to table

    for( row of data) {
        let row_element = document.createElement('tr');
        for(let header of headers) {
            let cell_element = document.createElement('td');
            cell_element.innerHTML = row[header]; // add data to cell
            row_element.appendChild(cell_element);
        }
        table.appendChild(row_element);
    }
    
}


get_filters();
get_table();





