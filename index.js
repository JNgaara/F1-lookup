fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
    //   fetch code to fecth and connect to placehodler api
    //   in practise api on wednesday in class morning standup
    function callCONSTRUCTORS(){
      fetch('http://ergast.com/api/f1/constructors')
      .then(response => response.json())
      .then(json => console.log(json))
    }