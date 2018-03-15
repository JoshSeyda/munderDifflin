// window.addEventListener('scroll', function(){
// 	let hidden0 = document.getElementById("reach1");
// 	let hidden1 = document.getElementById("reach2");
// 	let hidden2 = document.getElementById("reach3"); 
	
// 		 if (window.scrollY > 1331) {
//    	 		hidden1.classList = "show";
//    	 		hidden0.classList = "show";
//    	 		hidden2.classList = "show";
   	 		
// 		} 
// });


let collapse = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}