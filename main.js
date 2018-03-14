window.addEventListener('scroll', function(){
	let hidden0 = document.getElementById("z");
	let hidden1 = document.getElementById("a");
	let hidden2 = document.getElementById("b"); 
	let hidden3 = document.getElementById("c");
		 if (window.scrollY > 1054 && window.scrollY < 1857) {
   	 		hidden1.classList = "show";
   	 		hidden0.classList = "hidden";
   	 		hidden2.classList = "hidden";
   	 		hidden3.classList = "hidden";
		} else if (window.scrollY > 1858 && window.scrollY < 2657){
   	 		hidden2.classList = "show";
   	 		hidden1.classList = "hidden";
   	 		hidden0.classList = "hidden";
   	 		hidden3.classList = "hidden";
		}else if (window.scrollY > 2658){
   	 		hidden3.classList = "show";
   	 		hidden2.classList = "hidden";
   	 		hidden1.classList = "hidden";
   	 		hidden0.classList = "hidden";
		} else if (window.scrollY < 1053) {
			hidden0.classList = "show";
			hidden1.classList = "hidden";
			hidden2.classList = "hidden";
   	 		hidden3.classList = "hidden";
		}
});