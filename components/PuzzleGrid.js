class PuzzleGrid extends HTMLElement {

    constructor() {

      
      super();
      
    }

    connectedCallback(){
      
      this.prueba = () =>{
        this.innerHTML = `
     
        <div class="grid" id="aux">
            <div class="row">
                <div class="fixed">${pieces[0][0]}</div>
                <div class="fixed piece" id="p01"
                onClick='selectPiece(0,1)'>${pieces[0][1]}</div>
                <div class="fixed piece" id="p02"
                onClick='selectPiece(0,2)'>${pieces[0][2]}</div>
                <div class="fixed piece" id="p03"
                onClick='selectPiece(0,3)'>${pieces[0][3]}</div>
            </div>
            <div class="row">
                <div class="fixed">${pieces[1][0]}</div>
                <div class="fixed piece" id="p11"
                onClick='selectPiece(1,1)'>${pieces[1][1]}</div>
                <div class="fixed piece" id="p12"
                onClick='selectPiece(1,2)'>${pieces[1][2]}</div>
                <div class="fixed piece" id="p13"
                onClick='selectPiece(1,3)'>${pieces[1][3]}</div>
                <div class="fixed">${pieces[1][4]}</div>
            </div>
            <div class="row">
                <div class="fixed">${pieces[2][0]}</div>
                <div class="fixed piece" id="p21"
                onClick='selectPiece(2,1)'>${pieces[2][1]}</div>
                <div class="fixed piece" id="p22"
                onClick='selectPiece(2,2)'>${pieces[2][2]}</div>
                <div class="fixed piece" id="p23"
                onClick='selectPiece(2,3)'>${pieces[2][3]}</div>
            </div>
            <div class="row">
                <div class="fixed">${pieces[3][0]}</div>
                <div class="fixed">${pieces[3][1]}</div>
                <div class="fixed">${pieces[3][2]}</div>
                <div class="fixed">${pieces[3][3]}</div>
                <div class="fixed">${pieces[3][4]}</div>
                <div class="fixed">${pieces[3][5]}</div>
                <div class="fixed">${pieces[3][6]}</div>
                <div class="fixed">${pieces[3][7]}</div>
                <div class="fixed">${pieces[3][8]}</div>
            </div>       
    
        </div>        
      `}

      this.prueba();

      document.addEventListener('keydown', (event) =>{
          this.prueba();
      });
    }
}
  
customElements.define("puzzle-grid", PuzzleGrid);