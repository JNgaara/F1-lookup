// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
    //   fetch code to fecth and connect to placehodler api
    //   in practise api on wednesday in class morning standup
    function callCONSTRUCTORSAPI(){
      fetch('http://ergast.com/api/f1/constructors')
      .then(response => response.json())
      .then(json => console.log(json))
    }
    
    let userSearch = [];
    const inputTeam = document.getElementById('team');
    let inputDriver = document.getElementById('driver');
    let inputSeason = document.getElementById('Season');



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