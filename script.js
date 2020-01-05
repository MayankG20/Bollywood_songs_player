
	var x=0;
	function playsound(e){
  	// console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // // cono
    // console.log(audio);

    const key=document.querySelector(`.key[data-key="${e.keyCode}"`);
    // console.log(key);
    key.classList.add('playing');
    	
	if(e.keyCode == 32){
		var audios = document.getElementsByTagName('audio');
		for(var i =0 ;i<audios.length;i++){
			audios[i].pause();
		}
		return;
	}
    if(!audio)return;
    if(x!=0){
    	const prev=document.querySelector(`audio[data-key="${x}"]`);
    	prev.pause();
    }
    // audio.pause();
    audio.currentTime=0;
    audio.play();
    x=e.keyCode;
  }
  window.addEventListener('keydown',playsound);

  function removeTrans(e){
  	if(e.propertyName != "transform")
  		return;
  	this.classList.remove('playing');
  	// console.log(e);
  	// if(e.propertyName)
  }

  const keys=document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend',removeTrans));
