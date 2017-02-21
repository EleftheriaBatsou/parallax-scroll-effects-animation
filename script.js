function parallax(){
	var prlx_lyr_1 = document.getElementById('prlx_lyr_1');
	var prlx_lyr_2 = document.getElementById('prlx_lyr_2');
	prlx_lyr_1.style.top = -(window.pageYOffset / 4)+'px';
	prlx_lyr_2.style.top = -(window.pageYOffset / 8)+'px';
  
  
  var prlx_lyr_3 = document.getElementById('prlx_lyr_3');
	var prlx_lyr_4 = document.getElementById('prlx_lyr_4');
	prlx_lyr_3.style.top = -(window.pageYOffset / 3)+'px';
	prlx_lyr_4.style.top = -(window.pageYOffset / 6)+'px';
}
window.addEventListener("scroll", parallax, false);