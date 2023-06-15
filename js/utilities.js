

export function doesContainClass(event,itsClass){
    return event.target.classList.contains(itsClass)
}


export function selectElement(attribute , parent = document){
    return parent.querySelector(attribute)
}


export function selectElements(attribute , parent = document){
    return parent.querySelectorAll(attribute)
}