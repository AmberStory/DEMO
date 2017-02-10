window.onload = function(){
	var Oul1 = document.getElementById('ul1');
	var Oli = Oul1.getElementsByTagName('li');

	var Obut = Oul1.getElementsByTagName('input');
	var Oem = Oul1.getElementsByTagName('em');
	var Ostrong = Oul1.getElementsByTagName('strong');
	var Ospan = Oul1.getElementsByTagName('span');

	for(var i=0;i<Oli.length;i++){
		fn1(i);
	}

		function fn1(i){
			var n1 = Number(Ostrong[i].innerHTML);
			var n2 = parseFloat(Oem[i].innerHTML);
			console.log(i);

			Obut[2*i].onclick = function(i){
				console.log(i)
				return function(){
					if(n1==0){
						n1 = 0;
					}
					else{
					n1--;
					Ostrong[i].innerHTML = n1;
					Ospan[i].innerHTML = n1*n2+'元';
					}
				}
			}(i)
			Obut[2*i+1].onclick = function(i){
					return function(){
					n1++;
					Ostrong[i].innerHTML = n1;
					Ospan[i].innerHTML = n1*n2+'元';
				}
			}(i)
		}
}