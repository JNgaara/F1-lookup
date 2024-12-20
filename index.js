function callCONSTRUCTORSAPI(){
      fetch('http://ergast.com/api/f1/constructors')
      .then(response => response.json())
      .then(json => console.log(json))
    }
    const searchObj = [ team: ' ', driver:' ' , season: ' '  ];
    let userSearch = [];
    const uForm = document.getElementById("formF1Input";)
    const inputTeam = document.getElementById('team');
    const inputDriver = document.getElementById('driver');
    const inputSeason = document.getElementById('Season');
    
    // const submit = document.submit.addEventListener('click',()=>{
    //     const Driver =document.getElementById('driver');
    //   })
    
      document.getElementById("submit").addEventListener("click",findResult)
    
    function findResult(){
      // alert();
      document.uForm.style.backgroundColor = "green";
      console.log(inputDriver);
    }
    
    function getFormInfo(){
      const formF1 =document.forms["formF1Input"];
      const faveTeam = document.getElementById("Team");
      const faveDriver = document.getElementById("Driver");
      const faveSeason = document.getElementById("Season");

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