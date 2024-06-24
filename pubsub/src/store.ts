interface Game {
    id: string;
    whitePlayerName: string;
    blackPlayerName: string;
    moves: string[];
}
export class GameManager{
    games: Game[] = [];
    private static instance: GameManager;
    private constructor(){
        this.games = [];
    }
    addMove(gameId: string,move: string){
        console.log(`Adding move ${move} to game ${gameId}`)
        const game = this.games.find(game=>game.id===gameId);
        game?.moves.push(move);
    }
    addGame(gameId: string){
        const game={
             id: gameId,
             whitePlayerName: 'Daku',
             blackPlayerName: 'Lootera',
             moves: [] 
        }
        this.games.push(game);
    }
    static getInstance(){
        if(GameManager.instance){
            return GameManager.instance;
        }
        GameManager.instance = new GameManager();
        return GameManager.instance


    }
    log(){
        console.log(this.games)
    }
}

 