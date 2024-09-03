import {useState} from "react"

export default function CreatePlayerForm({getPlayers})
{
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [status, setStatus] = useState("bench");
    const [imageUrl, setImageUrl] = useState("");

    const apiUrl = "https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-PT/players";

    const createPlayer = async () => {
        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    breed: breed,
                    status: status,
                    imageUrl: imageUrl
                })
            });
            const result = await response.json();
            getPlayers();
        } catch (error) {
            
        }
    }

    return(
        <div className="creationForm">
            <label>Name: <input type="text" value={name} onChange={e => setName(e.target.value)}></input></label>
            <label>Breed: <input type="text" value={breed} onChange={e => setBreed(e.target.value)}></input></label>
            <label>Status: <select value={status} onChange={e => setStatus(e.target.value)}>
                <option value="bench">Bench</option>
                <option value="field">Field</option>
                </select></label>
            <label>Img Url: <input type="text" value={imageUrl} onChange={e => setImageUrl(e.target.value)}></input></label>
            <button onClick={() => createPlayer()}>Create new player</button>
        </div>
    )
}