alert("Welcome to F1 lookup");
function callCONSTRUCTORSAPI(){
      fetch('http://ergast.com/api/f1/constructors')
      .then(response => response.json())
      .then(json => console.log(json))
    }
    
    let userSearch = [];
    const inputTeam = document.getElementById('team');
    let inputDriver = document.getElementById('driver');
    let inputSeason = document.getElementById('Season');
      const submit = document.submit.addEventListener('click',()=>{
        const Driver =document.getElementById('driver');
      })
    document.getElementById("submit").addEventListener('click',findResult)
    
    function findResult(){
      alert("the formm was submitted");
      console.log(inputDriver);
    }
    
    function getFormInfo(){
      const formF1 =document.forms["formF1Input"]
    }

    function callDriversAPI(){
      fetch('http://ergast.com/api/f1/drivers')
      .then(response => response.json())
      .then(json => console.log(json))
    }

    function callCircuitsAPI(){
      fetch('http://ergast.com/api/f1/circuits')
      .then(response => response.json())
      .then(json => console.log(json))
    }