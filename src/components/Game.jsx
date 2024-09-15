function Game(props){

    // let 
    let players_text = `# ${props.game.players} players`

    return(
<div className={`${props.game.twcolor} rounded-xl text-white m-4 p-4`}>
                    <h2 className="text-2xl font-bold">{props.game.name}</h2>
                    <p className="text-lg">{props.game.players} players</p>
                    <p className="text-lg">{players_text}</p>
                    </div>
    )
}

export default Game;