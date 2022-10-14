const CardsContainer = document.querySelector('.CardsContainer');

fetch('https://jsonplaceholder.typicode.com/todos')
	.then(resp => resp.json())
	.then(json => render(json));


const render = (json_data) => {
	json_data.forEach(({title, completed}) => {


		const Card = document.createElement('div')
		const todo = document.createElement('p')
		const Status = document.createElement('p')
     
      Card.classList.add('Card');

	  
	  todo.innerText = `Task: ${title}`;
	 
	  Status.innerText = `Status:${completed}`;
	  
	  completed == true ? (Card.style.backgroundColor = '#C8DBBE')
	   : (Card.style.backgroundColor = '#B4CDE6')

      Card.append(todo, Status);
		CardsContainer.append(Card);

		



		
})

}


