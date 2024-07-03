function mostrarpag(pageId){
    const pages = document.querySelectorAll('.pag');
    for(let i = 0 ; i < pages.length; i++){
        const page = pages[i];
        if (page.id === pageId){
            page.classList.add('active');
         } else{
            page.classList.remove('active');
         }
    }
}
function cerrar () {
    window.close
}