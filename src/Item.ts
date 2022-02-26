import Dimension from "./Dimension";

export default class Item {
    
    constructor(readonly idItem: number, readonly category: string, readonly description: string, readonly price: number, readonly dimension?: Dimension) {
        
    }

    getVolume(){
        if(this.dimension) return this.dimension.getVolume();
    }
}