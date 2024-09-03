export default function PlayerShowcase({player})
{
    return(
        <div className="showcase">
            <img src={player.imageUrl} alt={player.name}></img>
            Name: {player.name}
            <br/>
            Breed: {player.breed}
            <br/>
            Status: {player.status}
            <br/>
            Cohort: {player.cohortId}
        </div>
    )
}