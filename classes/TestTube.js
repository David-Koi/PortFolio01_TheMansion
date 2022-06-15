class TestTube{
    
    constructor(capacity){

        this._capacity = capacity;
        this._contents = 0;
    }
    //getters
    get capacity(){
        return this._capacity;
    }

    get contents(){
        return this._contents;
    }
    //setter
    set contents(contents){

        this._contents = contents;
    }
    //general methods

    fillTube(){

        this._contents = this._capacity;
    }
    emptyTube(){

        this._contents = 0;
    }
    transferContent(testTube){

        if(testTube.contents != testTube.capacity){

            if(this._contents >= testTube.capacity){

                let dif = testTube.capacity - testTube.contents;
                this._contents = this._contents - dif;
                testTube.contents = testTube.capacity;

            }else{

                if((testTube.contents + this._contents) > testTube.capacity){
                    
                    let dif = testTube.capacity - testTube.contents;
                    testTube.contents = testTube.capacity;
                    this._contents = this._contents - dif;

                }else{

                    testTube.contents = testTube.contents + this._contents;

                    this._contents = 0;
                }    
            }

        }else{

            console.log('el receptor está lleno');
        }
    }
}