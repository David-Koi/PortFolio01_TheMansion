class ItemMenu extends HTMLElement {

    constructor() {
 
      super();

    }
    connectedCallback(){

        this.innerHTML = `
        <div class="menuFather">
            <div class="menuSon">
                <div class="name">${player.name}</div>
                <div class="itemBox">
                    <div class="item" id="I1">
                        <img class="itemImg" 
                            src="${player.item1.itemImg}"/>
                        <p>${player.item1.itemDescription}</p>
                    </div>
                    <div class="item" id="I2">
                        <img class="itemImg" 
                            src="${player.item2.itemImg}"/>
                        <p>${player.item2.itemDescription}</p>
                    </div>
                    <div class="item" id="I3">
                        <img class="itemImg" 
                            src="${player.item3.itemImg}"/>
                        <p>${player.item3.itemDescription}</p>
                    </div>
                    <div class="item" id="I4">
                        <img class="itemImg" 
                            src="${player.item4.itemImg}"/>
                        <p>${player.item4.itemDescription}</p>
                    </div>
                    <div class="item" id="I5">
                        <img class="itemImg" 
                            src="${player.item5.itemImg}"/>
                        <p>${player.item5.itemDescription}</p>
                    </div>
                    <div class="item" id="I6">
                        <img class="itemImg" 
                            src="${player.item6.itemImg}"/>
                        <p>${player.item6.itemDescription}</p>
                    </div>
                    <div class="item" id="I7">
                        <img class="itemImg" 
                            src="${player.item7.itemImg}"/>
                        <p>${player.item7.itemDescription}</p>
                    </div>
                    <div class="item" id="I8">
                        <img class="itemImg" 
                            src="${player.item8.itemImg}"/>
                        <p>${player.item8.itemDescription}</p>
                    </div>
                </div>
            </div>
        </div>
               
      `;
    }
}
  
customElements.define("item-menu", ItemMenu);