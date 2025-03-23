function createTable() {

	let rn = prompt("Input number of rows")
	let cn = prompt("Input number of columns")

	rn = +rn;
	cn = +cn;

	if(isNaN(rn) || isNaN(cn) || rn<=0 || cn<=0){
		alert("Invalid input please enter positive val for rn and cn")
		return;
	}

	let table = document.getElementById("myTable")
	table.innerHTML= "";

	for (let i = 0; i < rn; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < cn; j++) {
            const cell = document.createElement("td"); 
            cell.textContent = `Row-${i} Column-${j}`; 
            row.appendChild(cell); 
        }
        table.appendChild(row); 
    }
  
}
