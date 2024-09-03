export default function PlayerCard({id, name, breed, status, imageUrl, team, select})
{
    return(
        <div className="card">
            <img src={imageUrl} alt={name}></img>
            <div>
                Name: {name}
                <br/>
                Breed: {breed}
            </div>
            <button onClick={() => select(id)}>Details</button>
        </div>
    );
}