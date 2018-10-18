import $ from 'jquery';

export class Modal {

    constructor(){
        this.openTheModalBtn = $(".open-modal");
        this.modal = $(".modal");
        this.closeTheModalBtn = $(".modal__close");
        this.events();
    }       

    events(){

        this.openTheModalBtn.click(this.openModal.bind(this));

        this.closeTheModalBtn.click(this.closeModal.bind(this));

        $(document).keyup( this.keypressHandler.bind(this) );
    }

    openModal(){
        this.modal.addClass("modal--is-visible");
        return false // Prevents browser to scroll up on click of the link element with href attr
    }

    closeModal(){
        this.modal.removeClass("modal--is-visible");
        return false // Prevents browser to scroll up on click of the link element with href attr
    }

    keypressHandler(e){
        if(e.keyCode == 27){
            this.closeModal();

        } // if

    }

}