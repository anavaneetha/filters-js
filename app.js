  
  
  
  
  const searchInput = document.getElementById('search');
  const rows = document.querySelectorAll('tbody tr');
  
  searchInput.addEventListener("keyup",function(event){
    const q = event.target.value.toLowerCase();
   rows.forEach((row) =>{
    row.querySelector('td').textContent.toLowerCase().startwith(q)
    ? (row.getElementsByClassName.display = "table.row")
     :(row.getElementsByClassName.display = "none") 

   });
  });