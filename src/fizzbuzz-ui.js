export const show = (id, toShow) => {
    document.getElementById(id).innerHTML = toShow; 
}

export const renderHistory = (history) =>{
    return history.map((object) => 'El número ingresado es: '+ object.number + ', resultado: ' + object.result).join(`<br>`);
}