	window.onload = function(){
		var Oimg = document.getElementById('img');
		var Oprev = document.getElementById('prev');
		var Onext = document.getElementById('next');
		var Op1 = document.getElementById('p1');
		var Op2 = document.getElementById('p2');
		var num = 0;
		var arrImg = ['image/1.jpg','image/2.jpg','image/3.jpg','image/4.jpg'];
		var imgName = ["图片1","图片2","图片3","图片4"];
		var Obut1 = document.getElementById('but1');
		var Obut2 = document.getElementById('but2');
		var Ospan1 = document.getElementById('span1');
		var OffOn = true;
		var Olist = document.getElementById('list');
		var Odivpoint = Olist.getElementsByTagName('div');
		var Ohangimg = null;
		var Ohangdiv = null;

		img();
		Obut1.onclick = function(){
			OffOn = true;
			Ospan1.innerHTML = "图片可以循环播放cishu";
		}
		Obut2.onclick = function(){
			OffOn = false;
			Ospan1.innerHTML = "图片可以顺序播放";
		}
		Onext.onclick = function(){
			num++;
			if (num==arrImg.length) {
				if (OffOn) {
					num = 0;
				}
				else{
					alert("已经是最后一张了");
					num = arrImg.length-1;
				}
			}
				img();
		}
		Oprev.onclick = function(){
			num--;
			if (num==-1) {
			if (OffOn) {
				num=arrImg.length-1;
				}
			else{
				alert("已经是第一张了");
				num = 0;
				}
			}
			img();
		}
		for(var i=0;i<Odivpoint.length;i++){
			Odivpoint[i].tag=i;
			Odivpoint[i].onclick = function(){
				num = this.tag;
				img();
			}
			Odivpoint[i].onmouseover = a; 
			function a(){
				Ohangimg = this.getElementsByTagName('img');
				Ohangdiv = this.getElementsByTagName('p');
				Ohangdiv[0].style.display = 'block';
				Ohangimg[0].src = arrImg[this.tag];
				Ohangimg[0].style.display = 'block';
				console.log(this)
			}
			Odivpoint[i].onmouseout = function(){
				Ohangimg = this.getElementsByTagName('img');
				Ohangdiv = this.getElementsByTagName('p');
				Ohangdiv[0].style.display = 'none';
				Ohangimg[0].style.display = 'none';
			}
		}
		setInterval(function(){img();num++;if (num==arrImg.length) {num=0;}},2000);

		function img(){
			for (var i = 0; i < Odivpoint.length; i++) {
					Odivpoint[i].style.background = '';
				}
			Odivpoint[num].style.background = 'red';
			Op1.innerHTML = num+1+'/'+arrImg.length;
			Op2.innerHTML = imgName[num];
			Oimg.src = arrImg[num];
		}
	}
