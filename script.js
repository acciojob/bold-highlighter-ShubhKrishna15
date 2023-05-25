function highlight() {
    let strong = document.getElementsByTagName("strong")

	for(let i = 0 ; i <strong.length ; i++){
        strong[i].style.color="green"

    }


}


function return_normal() {
    let strong = document.getElementsByTagName("strong")
	for(let i = 0 ; i <strong.length ; i++){
        strong[i].style.color="black"

    }

    
}
