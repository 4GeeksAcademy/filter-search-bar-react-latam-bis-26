import React, { useState } from "react";
import initialAnimes from "./animes.json"

//create your first component
const Home = () => {

	const [ searchValue, setSearchValue ] = useState("")

	const [ animes, setAnimes ] = useState(initialAnimes)

	const deleteAnime = (animeName) =>{

		const animesFiltered = animes.filter( itm => itm.title.text != animeName )
		setAnimes(animesFiltered)

	}

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">
				{ searchValue == '' ? 'Search Animes!' : `Searching for ${searchValue}`}
			</h1>

			<input 
				className="my-2" type="text" placeholder="search" defaultValue={searchValue}
				onKeyUp={(evt) => { 
					console.log(evt)
					if(evt.key == 'Enter'){
						setAnimes([ { title: { text: evt.target.value }} , ...animes ])
					}else{
						setSearchValue(evt.target.value)
					}
				}} 
			/>

			{
				animes.filter(item => item.title.text.toLocaleLowerCase()
					.includes(searchValue.toLocaleLowerCase()) 
				).map((serie, ind)=> <div key={ind} className="bg-light rounded-4 mx-2" 
					onClick={() => deleteAnime(serie.title.text)}
					>
					<p>{serie.title.text}</p>
					<p>{serie.studio}</p>
				</div>)
			}

		</div>
	);
};

export default Home;
