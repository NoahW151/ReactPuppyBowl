import { useEffect, useState } from 'react'
import './App.css'
import PlayerCard from './components/PlayerCard';
import PlayerShowcase from './components/PlayerShowcase';
import CreatePlayerForm from './components/CreatePlayerForm';

function App() {
  const [cards, setCards] = useState([]);
  const [players, setPlayers] = useState([]);
  const [showcase, setShowcase] = useState(null);
  const [searchText, setSearchText] = useState("");

  const select = async (id) => {
    const player = await fetch(apiUrl + `/${id}`).then(res => res.json());
    setShowcase(player.data.player);
  }

  const search = async () => {
    const players = await fetch(apiUrl).then(res => res.json());
    const searchedPlayers = players.data.players;
    const filteredPlayers = searchedPlayers.filter(item => item.name.includes(searchText))
    setCards(filteredPlayers)
  }

  const getPlayers = async () => {
    const players = await fetch(apiUrl).then(res => res.json());
    setCards(players.data.players);
  }

  useEffect(() => {
    getPlayers();
  }, [])

  const apiUrl = "https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-PT/players";

  return (
    <>
      <h1>Puppy Bowl</h1>
      <div className='searchArea'>
        <input type='text' value={searchText} onChange={e => setSearchText(e.target.value)}></input>
        <button onClick={search}>Search</button>
      </div>
      {showcase && <PlayerShowcase player={showcase}/>}
      <div className='cards'>
        {cards.map((player) => <PlayerCard name={player.name} imageUrl={player.imageUrl} breed={player.breed} status={player.status} id={player.id} select={select}/>)}
      </div>
      <CreatePlayerForm getPlayers={getPlayers}/>
    </>
  )
}

export default App
