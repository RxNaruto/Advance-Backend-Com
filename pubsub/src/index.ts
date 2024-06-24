import { startLogger } from "./logger"
import { games } from "./store"

startLogger();
setInterval(()=>{
    games.push({
          id: Math.random().toString(),
          whitePlayerName: "Daku",
          blackPlayerName: "lootera",
          moves: []

    })
},5000)