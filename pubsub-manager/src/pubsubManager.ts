export class PubsubManager{
    private static instance: PubsubManager
    private constructor(){


    }
    public static getInstance(): PubsubManager{
        if(!PubsubManager.instance){
            PubsubManager.instance = new PubsubManager();

        }
        return PubsubManager.instance;
    }
    addUserToStock(userId: string , stockTicker: string){

    }
    removeUserFromStock(userId: string , stockTicker: string){

    }
    forwardMessageToUser(userId: string, stockTicker: string, price: string){
        
    }
}