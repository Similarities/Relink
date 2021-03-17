
class GridMap {
    constructor(size, headerHeight, canvas, numberUsers) {

      this.size = size;
      this.headerHeight = headerHeight;
      this.canvas = canvas;
      this.numberUsers = numberUsers;
      this.counterUsers = 0;
      this.gridArray = [];
      this.gridHeight = (this.canvas.height)/(this.size*0.9);
      //console.log(this.gridHeight, "gridHeight")
      this.gridWidth = (this.canvas.width )/(this.size*0.9 );
      //console.log(this.gridWidth)
      this.tempCoordinates = [];
      this.createGridArray();
    }

    // toDo: only valid for squared arrays here.. otherwise need 2D array a
    createGridArray() {
        let i = 0;
        let j = 0;
        for (i=0; i<=this.gridWidth; i++){
            
            for(j=0; j<=this.gridHeight; j++){
                const newItem = [i, j]
                this.gridArray.push(newItem)
                };
            };
        return this.gridArray;
    }

    generateCoordinates(){
        if(this.counterUsers <= this.numberUsers){
            this.throw_dice_for_coordinates();
            //console.log(this.tempCoordinates, this.gridArray.length-1, this.counterUsers);
            const modulation1 = 15*Math.sin(Math.random() * Math.PI*4);
            const modulation2 = 15*Math.sin(Math.random() * Math.PI*4);
            const vario1 = 15*Math.random() * modulation1;
            const vario2 = 15*Math.random()*modulation2;
            //console.log(modulation1, 'modulation')
            return new Position(this.tempCoordinates[0]*this.size +vario1, this.tempCoordinates[1]*this.size + this.headerHeight +vario2 )
        }
        else{
            console.log('too many users for array')
            return Nan;
        }
    }

    throw_dice_for_coordinates(){
        let maxIndex = this.gridArray.length;
        //console.log(maxIndex, "len array")
        const scale = this.size;
        const offset = this.headerHeight;
        const var_x = Math.round(Math.floor(Math.random() *maxIndex));
        //console.log(var_x, 'index number by dice');
        this.tempCoordinates = this.gridArray[var_x]
        //console.log(this.tempCoordinates, "cordinates")
        this.gridArray.splice(var_x,1);
        this.counterUsers ++;
        return this.gridArray,  this.counterUsers, this.tempCoordinates;
    }
}





