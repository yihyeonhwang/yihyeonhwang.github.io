$('#infobutton').click(function() {
		$('.info').toggle();
	});

	$('.info').click(function(){
		$('.info').hide();
	});
	
	
	$('#san001').click(function() {
		if($("#san001").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#san001,#san002,#san003,#san004').addClass('clicked2').removeClass('clicked1');
			}else if($("#san001").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#san001,#san002,#san003,#san004').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#san001").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#san001)').addClass('bigger');
				$('#san001').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#san001)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#san001)').removeClass('bigger');
				$('#san001').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#san001,#san002,#san003,#san004').addClass('clicked1');
			}
	});
	
	$('#san002').click(function() {
		if($("#san002").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#san001,#san002,#san003,#san004').addClass('clicked2').removeClass('clicked1');
			}else if($("#san002").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#san001,#san002,#san003,#san004').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#san002").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#san002)').addClass('bigger');
				$('#san002').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#san002)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#san002)').removeClass('bigger');
				$('#san002').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#san001,#san002,#san003,#san004').addClass('clicked1');
			}
	});
	
	$('#san003').click(function() {
		if($("#san003").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#san001,#san002,#san003,#san004').addClass('clicked2').removeClass('clicked1');
			}else if($("#san003").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#san001,#san002,#san003,#san004').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#san003").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#san003)').addClass('bigger');
				$('#san003').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#san003)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#san003)').removeClass('bigger');
				$('#san003').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#san001,#san002,#san003,#san004').addClass('clicked1');
			}
	});
	
	$('#san004').click(function() {
		if($("#san004").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#san001,#san002,#san003,#san004').addClass('clicked2').removeClass('clicked1');
			}else if($("#san004").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#san001,#san002,#san003,#san004').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#san004").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#san004)').addClass('bigger');
				$('#san004').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#san004)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#san004)').removeClass('bigger');
				$('#san004').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#san001,#san002,#san003,#san004').addClass('clicked1');
			}
	});
	
	$('#furiosa001').click(function() {
		if($("#furiosa001").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#furiosa001,#furiosa002,#furiosa003,#furiosa004,#furiosa005,#furiosa006').addClass('clicked2').removeClass('clicked1');
			}else if($("#furiosa001").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#furiosa001,#furiosa002,#furiosa003,#furiosa004,#furiosa005,#furiosa006').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#furiosa001").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#furiosa001)').addClass('bigger');
				$('#furiosa001').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#furiosa001)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#furiosa001)').removeClass('bigger');
				$('#furiosa001').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#furiosa001,#furiosa002,#furiosa003,#furiosa004,#furiosa005,#furiosa006').addClass('clicked1');
			}
	});
	
	$('#furiosa002').click(function() {
		if($("#furiosa002").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#furiosa001,#furiosa002,#furiosa003,#furiosa004,#furiosa005,#furiosa006').addClass('clicked2').removeClass('clicked1');
			}else if($("#furiosa002").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#furiosa001,#furiosa002,#furiosa003,#furiosa004,#furiosa005,#furiosa006').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#furiosa002").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#furiosa002)').addClass('bigger');
				$('#furiosa002').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#furiosa002)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#furiosa002)').removeClass('bigger');
				$('#furiosa002').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#furiosa001,#furiosa002,#furiosa003,#furiosa004,#furiosa005,#furiosa006').addClass('clicked1');
			}
	});
	
	$('#furiosa003').click(function() {
		if($("#furiosa003").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#furiosa001,#furiosa002,#furiosa003,#furiosa004,#furiosa005,#furiosa006').addClass('clicked2').removeClass('clicked1');
			}else if($("#furiosa003").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#furiosa001,#furiosa002,#furiosa003,#furiosa004,#furiosa005,#furiosa006').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#furiosa003").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#furiosa003)').addClass('bigger');
				$('#furiosa003').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#furiosa003)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#furiosa003)').removeClass('bigger');
				$('#furiosa003').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#furiosa001,#furiosa002,#furiosa003,#furiosa004,#furiosa005,#furiosa006').addClass('clicked1');
			}
	});
	
	$('#furiosa004').click(function() {
		if($("#furiosa004").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#furiosa001,#furiosa002,#furiosa003,#furiosa004,#furiosa005,#furiosa006').addClass('clicked2').removeClass('clicked1');
			}else if($("#furiosa004").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#furiosa001,#furiosa002,#furiosa003,#furiosa004,#furiosa005,#furiosa006').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#furiosa004").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#furiosa004)').addClass('bigger');
				$('#furiosa004').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#furiosa004)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#furiosa004)').removeClass('bigger');
				$('#furiosa004').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#furiosa001,#furiosa002,#furiosa003,#furiosa004,#furiosa005,#furiosa006').addClass('clicked1');
			}
	});
	
	$('#furiosa005').click(function() {
		if($("#furiosa005").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#furiosa001,#furiosa002,#furiosa003,#furiosa004,#furiosa005,#furiosa006').addClass('clicked2').removeClass('clicked1');
			}else if($("#furiosa005").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#furiosa001,#furiosa002,#furiosa003,#furiosa004,#furiosa005,#furiosa006').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#furiosa005").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#furiosa005)').addClass('bigger');
				$('#furiosa005').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#furiosa005)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#furiosa005)').removeClass('bigger');
				$('#furiosa005').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#furiosa001,#furiosa002,#furiosa003,#furiosa004,#furiosa005,#furiosa006').addClass('clicked1');
			}
	});
	
	$('#furiosa006').click(function() {
		if($("#furiosa006").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#furiosa001,#furiosa002,#furiosa003,#furiosa004,#furiosa005,#furiosa006').addClass('clicked2').removeClass('clicked1');
			}else if($("#furiosa006").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#furiosa001,#furiosa002,#furiosa003,#furiosa004,#furiosa005,#furiosa006').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#furiosa006").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#furiosa006)').addClass('bigger');
				$('#furiosa006').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#furiosa006)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#furiosa006)').removeClass('bigger');
				$('#furiosa006').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#furiosa001,#furiosa002,#furiosa003,#furiosa004,#furiosa005,#furiosa006').addClass('clicked1');
			}
	});
	
	$('#abby001').click(function() {
		if($("#abby001").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#abby001,#abby002').addClass('clicked2').removeClass('clicked1');
			}else if($("#abby001").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#abby001,#abby002').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#abby001").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#abby001)').addClass('bigger');
				$('#abby001').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#abby001)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#abby001)').removeClass('bigger');
				$('#abby001').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#abby001,#abby002').addClass('clicked1');
			}
	});
	
	$('#abby002').click(function() {
		if($("#abby002").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#abby001,#abby002').addClass('clicked2').removeClass('clicked1');
			}else if($("#abby002").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#abby001,#abby002').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#abby002").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#abby002)').addClass('bigger');
				$('#abby002').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#abby002)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#abby002)').removeClass('bigger');
				$('#abby002').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#abby001,#abby002').addClass('clicked1');
			}
	});
	
	$('#katniss001').click(function() {
		if($("#katniss001").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#katniss001,#katniss002,#katniss003,#katniss004,#katniss005,#katniss006').addClass('clicked2').removeClass('clicked1');
			}else if($("#katniss001").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#katniss001,#katniss002,#katniss003,#katniss004,#katniss005,#katniss006').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#katniss001").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#katniss001)').addClass('bigger');
				$('#katniss001').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#katniss001)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#katniss001)').removeClass('bigger');
				$('#katniss001').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#katniss001,#katniss002,#katniss003,#katniss004,#katniss005,#katniss006').addClass('clicked1');
			}
	});
	
	$('#katniss002').click(function() {
		if($("#katniss002").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#katniss001,#katniss002,#katniss003,#katniss004,#katniss005,#katniss006').addClass('clicked2').removeClass('clicked1');
			}else if($("#katniss002").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#katniss001,#katniss002,#katniss003,#katniss004,#katniss005,#katniss006').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#katniss002").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#katniss002)').addClass('bigger');
				$('#katniss002').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#katniss002)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#katniss002)').removeClass('bigger');
				$('#katniss002').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#katniss001,#katniss002,#katniss003,#katniss004,#katniss005,#katniss006').addClass('clicked1');
			}
	});
	
	$('#katniss003').click(function() {
		if($("#katniss003").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#katniss001,#katniss002,#katniss003,#katniss004,#katniss005,#katniss006').addClass('clicked2').removeClass('clicked1');
			}else if($("#katniss003").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#katniss001,#katniss002,#katniss003,#katniss004,#katniss005,#katniss006').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#katniss003").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#katniss003)').addClass('bigger');
				$('#katniss003').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#katniss003)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#katniss003)').removeClass('bigger');
				$('#katniss003').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#katniss001,#katniss002,#katniss003,#katniss004,#katniss005,#katniss006').addClass('clicked1');
			}
	});
	
	$('#katniss004').click(function() {
		if($("#katniss004").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#katniss001,#katniss002,#katniss003,#katniss004,#katniss005,#katniss006').addClass('clicked2').removeClass('clicked1');
			}else if($("#katniss004").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#katniss001,#katniss002,#katniss003,#katniss004,#katniss005,#katniss006').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#katniss004").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#katniss004)').addClass('bigger');
				$('#katniss004').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#katniss004)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#katniss004)').removeClass('bigger');
				$('#katniss004').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#katniss001,#katniss002,#katniss003,#katniss004,#katniss005,#katniss006').addClass('clicked1');
			}
	});
	
	$('#katniss005').click(function() {
		if($("#katniss005").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#katniss001,#katniss002,#katniss003,#katniss004,#katniss005,#katniss006').addClass('clicked2').removeClass('clicked1');
			}else if($("#katniss005").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#katniss001,#katniss002,#katniss003,#katniss004,#katniss005,#katniss006').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#katniss005").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#katniss005)').addClass('bigger');
				$('#katniss005').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#katniss005)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#katniss005)').removeClass('bigger');
				$('#katniss005').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#katniss001,#katniss002,#katniss003,#katniss004,#katniss005,#katniss006').addClass('clicked1');
			}
	});
	
	$('#katniss006').click(function() {
		if($("#katniss006").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#katniss001,#katniss002,#katniss003,#katniss004,#katniss005,#katniss006').addClass('clicked2').removeClass('clicked1');
			}else if($("#katniss006").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#katniss001,#katniss002,#katniss003,#katniss004,#katniss005,#katniss006').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#katniss006").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#katniss006)').addClass('bigger');
				$('#katniss006').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#katniss006)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#katniss006)').removeClass('bigger');
				$('#katniss006').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#katniss001,#katniss002,#katniss003,#katniss004,#katniss005,#katniss006').addClass('clicked1');
			}
	});
	
	$('#nausicaa001').click(function() {
		if($("#nausicaa001").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#nausicaa001,#nausicaa002,#nausicaa003,#nausicaa004,#nausicaa005,#nausicaa006,#nausicaa007').addClass('clicked2').removeClass('clicked1');
			}else if($("#nausicaa001").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#nausicaa001,#nausicaa002,#nausicaa003,#nausicaa004,#nausicaa005,#nausicaa006,#nausicaa007').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#nausicaa001").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#nausicaa001)').addClass('bigger');
				$('#nausicaa001').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#nausicaa001)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#nausicaa001)').removeClass('bigger');
				$('#nausicaa001').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#nausicaa001,#nausicaa002,#nausicaa003,#nausicaa004,#nausicaa005,#nausicaa006,#nausicaa007').addClass('clicked1');
			}
	});
	
	$('#nausicaa002').click(function() {
		if($("#nausicaa002").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#nausicaa001,#nausicaa002,#nausicaa003,#nausicaa004,#nausicaa005,#nausicaa006,#nausicaa007').addClass('clicked2').removeClass('clicked1');
			}else if($("#nausicaa002").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#nausicaa001,#nausicaa002,#nausicaa003,#nausicaa004,#nausicaa005,#nausicaa006,#nausicaa007').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#nausicaa002").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#nausicaa002)').addClass('bigger');
				$('#nausicaa002').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#nausicaa002)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#nausicaa002)').removeClass('bigger');
				$('#nausicaa002').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#nausicaa001,#nausicaa002,#nausicaa003,#nausicaa004,#nausicaa005,#nausicaa006,#nausicaa007').addClass('clicked1');
			}
	});
	
	$('#nausicaa003').click(function() {
		if($("#nausicaa003").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#nausicaa001,#nausicaa002,#nausicaa003,#nausicaa004,#nausicaa005,#nausicaa006,#nausicaa007').addClass('clicked2').removeClass('clicked1');
			}else if($("#nausicaa003").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#nausicaa001,#nausicaa002,#nausicaa003,#nausicaa004,#nausicaa005,#nausicaa006,#nausicaa007').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#nausicaa003").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#nausicaa003)').addClass('bigger');
				$('#nausicaa003').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#nausicaa003)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#nausicaa003)').removeClass('bigger');
				$('#nausicaa003').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#nausicaa001,#nausicaa002,#nausicaa003,#nausicaa004,#nausicaa005,#nausicaa006,#nausicaa007').addClass('clicked1');
			}
	});
	
	$('#nausicaa004').click(function() {
		if($("#nausicaa004").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#nausicaa001,#nausicaa002,#nausicaa003,#nausicaa004,#nausicaa005,#nausicaa006,#nausicaa007').addClass('clicked2').removeClass('clicked1');
			}else if($("#nausicaa004").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#nausicaa001,#nausicaa002,#nausicaa003,#nausicaa004,#nausicaa005,#nausicaa006,#nausicaa007').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#nausicaa004").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#nausicaa004)').addClass('bigger');
				$('#nausicaa004').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#nausicaa004)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#nausicaa004)').removeClass('bigger');
				$('#nausicaa004').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#nausicaa001,#nausicaa002,#nausicaa003,#nausicaa004,#nausicaa005,#nausicaa006,#nausicaa007').addClass('clicked1');
			}
	});
	
	$('#nausicaa005').click(function() {
		if($("#nausicaa005").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#nausicaa001,#nausicaa002,#nausicaa003,#nausicaa004,#nausicaa005,#nausicaa006,#nausicaa007').addClass('clicked2').removeClass('clicked1');
			}else if($("#nausicaa005").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#nausicaa001,#nausicaa002,#nausicaa003,#nausicaa004,#nausicaa005,#nausicaa006,#nausicaa007').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#nausicaa005").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#nausicaa005)').addClass('bigger');
				$('#nausicaa005').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#nausicaa005)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#nausicaa005)').removeClass('bigger');
				$('#nausicaa005').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#nausicaa001,#nausicaa002,#nausicaa003,#nausicaa004,#nausicaa005,#nausicaa006,#nausicaa007').addClass('clicked1');
			}
	});
	
	$('#nausicaa006').click(function() {
		if($("#nausicaa006").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#nausicaa001,#nausicaa002,#nausicaa003,#nausicaa004,#nausicaa005,#nausicaa006,#nausicaa007').addClass('clicked2').removeClass('clicked1');
			}else if($("#nausicaa006").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#nausicaa001,#nausicaa002,#nausicaa003,#nausicaa004,#nausicaa005,#nausicaa006,#nausicaa007').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#nausicaa006").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#nausicaa006)').addClass('bigger');
				$('#nausicaa006').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#nausicaa006)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#nausicaa006)').removeClass('bigger');
				$('#nausicaa006').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#nausicaa001,#nausicaa002,#nausicaa003,#nausicaa004,#nausicaa005,#nausicaa006,#nausicaa007').addClass('clicked1');
			}
	});
	
	$('#nausicaa007').click(function() {
		if($("#nausicaa007").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#nausicaa001,#nausicaa002,#nausicaa003,#nausicaa004,#nausicaa005,#nausicaa006,#nausicaa007').addClass('clicked2').removeClass('clicked1');
			}else if($("#nausicaa007").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#nausicaa001,#nausicaa002,#nausicaa003,#nausicaa004,#nausicaa005,#nausicaa006,#nausicaa007').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#nausicaa007").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#nausicaa007)').addClass('bigger');
				$('#nausicaa007').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#nausicaa007)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#nausicaa007)').removeClass('bigger');
				$('#nausicaa007').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#nausicaa001,#nausicaa002,#nausicaa003,#nausicaa004,#nausicaa005,#nausicaa006,#nausicaa007').addClass('clicked1');
			}
	});
	
	$('#wasp001').click(function() {
		if($("#wasp001").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#wasp001,#wasp002,#wasp003,#wasp004').addClass('clicked2').removeClass('clicked1');
			}else if($("#wasp001").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#wasp001,#wasp002,#wasp003,#wasp004').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#wasp001").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#wasp001)').addClass('bigger');
				$('#wasp001').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#wasp001)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#wasp001)').removeClass('bigger');
				$('#wasp001').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#wasp001,#wasp002,#wasp003,#wasp004').addClass('clicked1');
			}
	});
	
	$('#wasp002').click(function() {
		if($("#wasp002").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#wasp001,#wasp002,#wasp003,#wasp004').addClass('clicked2').removeClass('clicked1');
			}else if($("#wasp002").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#wasp001,#wasp002,#wasp003,#wasp004').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#wasp002").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#wasp002)').addClass('bigger');
				$('#wasp002').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#wasp002)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#wasp002)').removeClass('bigger');
				$('#wasp002').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#wasp001,#wasp002,#wasp003,#wasp004').addClass('clicked1');
			}
	});
	
	$('#wasp003').click(function() {
		if($("#wasp003").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#wasp001,#wasp002,#wasp003,#wasp004').addClass('clicked2').removeClass('clicked1');
			}else if($("#wasp003").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#wasp001,#wasp002,#wasp003,#wasp004').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#wasp003").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#wasp003)').addClass('bigger');
				$('#wasp003').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#wasp003)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#wasp003)').removeClass('bigger');
				$('#wasp003').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#wasp001,#wasp002,#wasp003,#wasp004').addClass('clicked1');
			}
	});
	
	$('#wasp004').click(function() {
		if($("#wasp004").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#wasp001,#wasp002,#wasp003,#wasp004').addClass('clicked2').removeClass('clicked1');
			}else if($("#wasp004").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#wasp001,#wasp002,#wasp003,#wasp004').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#wasp004").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#wasp004)').addClass('bigger');
				$('#wasp004').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#wasp004)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#wasp004)').removeClass('bigger');
				$('#wasp004').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#wasp001,#wasp002,#wasp003,#wasp004').addClass('clicked1');
			}
	});
			
	$('#marvel001').click(function() {
		if($("#marvel001").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#marvel001,#marvel002,#marvel003,#marvel004,#marvel005').addClass('clicked2').removeClass('clicked1');
			}else if($("#marvel001").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#marvel001,#marvel002,#marvel003,#marvel004,#marvel005').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#marvel001").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#marvel001)').addClass('bigger');
				$('#marvel001').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#marvel001)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#marvel001)').removeClass('bigger');
				$('#marvel001').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#marvel001,#marvel002,#marvel003,#marvel004,#marvel005').addClass('clicked1');
			}
	});
	
	$('#marvel002').click(function() {
		if($("#marvel002").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#marvel001,#marvel002,#marvel003,#marvel004,#marvel005').addClass('clicked2').removeClass('clicked1');
			}else if($("#marvel002").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#marvel001,#marvel002,#marvel003,#marvel004,#marvel005').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#marvel002").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#marvel002)').addClass('bigger');
				$('#marvel002').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#marvel002)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#marvel002)').removeClass('bigger');
				$('#marvel002').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#marvel001,#marvel002,#marvel003,#marvel004,#marvel005').addClass('clicked1');
			}
	});
	
	$('#marvel003').click(function() {
		if($("#marvel003").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#marvel001,#marvel002,#marvel003,#marvel004,#marvel005').addClass('clicked2').removeClass('clicked1');
			}else if($("#marvel003").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#marvel001,#marvel002,#marvel003,#marvel004,#marvel005').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#marvel003").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#marvel003)').addClass('bigger');
				$('#marvel003').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#marvel003)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#marvel003)').removeClass('bigger');
				$('#marvel003').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#marvel001,#marvel002,#marvel003,#marvel004,#marvel005').addClass('clicked1');
			}
	});
	
	$('#marvel004').click(function() {
		if($("#marvel004").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#marvel001,#marvel002,#marvel003,#marvel004,#marvel005').addClass('clicked2').removeClass('clicked1');
			}else if($("#marvel004").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#marvel001,#marvel002,#marvel003,#marvel004,#marvel005').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#marvel004").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#marvel004)').addClass('bigger');
				$('#marvel004').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#marvel004)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#marvel004)').removeClass('bigger');
				$('#marvel004').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#marvel001,#marvel002,#marvel003,#marvel004,#marvel005').addClass('clicked1');
			}
	});
	
	$('#marvel005').click(function() {
		if($("#marvel005").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#marvel001,#marvel002,#marvel003,#marvel004,#marvel005').addClass('clicked2').removeClass('clicked1');
			}else if($("#marvel005").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#marvel001,#marvel002,#marvel003,#marvel004,#marvel005').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#marvel005").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#marvel005)').addClass('bigger');
				$('#marvel005').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#marvel005)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#marvel005)').removeClass('bigger');
				$('#marvel005').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#marvel001,#marvel002,#marvel003,#marvel004,#marvel005').addClass('clicked1');
			}
	});
	
	$('#eleven001').click(function() {
		if($("#eleven001").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#eleven001,#eleven002,#eleven003,#eleven004').addClass('clicked2').removeClass('clicked1');
			}else if($("#eleven001").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#eleven001,#eleven002,#eleven003,#eleven004').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#eleven001").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#eleven001)').addClass('bigger');
				$('#eleven001').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#eleven001)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#eleven001)').removeClass('bigger');
				$('#eleven001').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#eleven001,#eleven002,#eleven003,#eleven004').addClass('clicked1');
			}
	});
	
	$('#eleven002').click(function() {
		if($("#eleven002").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#eleven001,#eleven002,#eleven003,#eleven004').addClass('clicked2').removeClass('clicked1');
			}else if($("#eleven002").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#eleven001,#eleven002,#eleven003,#eleven004').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#eleven002").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#eleven002)').addClass('bigger');
				$('#eleven002').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#eleven002)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#eleven002)').removeClass('bigger');
				$('#eleven002').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#eleven001,#eleven002,#eleven003,#eleven004').addClass('clicked1');
			}
	});
	
	$('#eleven003').click(function() {
		if($("#eleven003").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#eleven001,#eleven002,#eleven003,#eleven004').addClass('clicked2').removeClass('clicked1');
			}else if($("#eleven003").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#eleven001,#eleven002,#eleven003,#eleven004').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#eleven003").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#eleven003)').addClass('bigger');
				$('#eleven003').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#eleven003)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#eleven003)').removeClass('bigger');
				$('#eleven003').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#eleven001,#eleven002,#eleven003,#eleven004').addClass('clicked1');
			}
	});
	
	$('#eleven004').click(function() {
		if($("#eleven004").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#eleven001,#eleven002,#eleven003,#eleven004').addClass('clicked2').removeClass('clicked1');
			}else if($("#eleven004").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#eleven001,#eleven002,#eleven003,#eleven004').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#eleven004").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#eleven004)').addClass('bigger');
				$('#eleven004').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#eleven004)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#eleven004)').removeClass('bigger');
				$('#eleven004').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#eleven001,#eleven002,#eleven003,#eleven004').addClass('clicked1');
			}
	});
	
	$('#helen001').click(function() {
		if($("#helen001").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#helen001,#helen002,#helen003').addClass('clicked2').removeClass('clicked1');
			}else if($("#helen001").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#helen001,#helen002,#helen003').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#helen001").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#helen001)').addClass('bigger');
				$('#helen001').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#helen001)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#helen001)').removeClass('bigger');
				$('#helen001').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#helen001,#helen002,#helen003').addClass('clicked1');
			}
	});
	
	$('#helen002').click(function() {
		if($("#helen002").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#helen001,#helen002,#helen003').addClass('clicked2').removeClass('clicked1');
			}else if($("#helen002").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#helen001,#helen002,#helen003').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#helen002").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#helen002)').addClass('bigger');
				$('#helen002').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#helen002)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#helen002)').removeClass('bigger');
				$('#helen002').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#helen001,#helen002,#helen003').addClass('clicked1');
			}
	});
	
	$('#helen003').click(function() {
		if($("#helen003").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#helen001,#helen002,#helen003').addClass('clicked2').removeClass('clicked1');
			}else if($("#helen003").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#helen001,#helen002,#helen003').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#helen003").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#helen003)').addClass('bigger');
				$('#helen003').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#helen003)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#helen003)').removeClass('bigger');
				$('#helen003').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#helen001,#helen002,#helen003').addClass('clicked1');
			}
	});
	
	$('#ladybird001').click(function() {
		if($("#ladybird001").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#ladybird001,#ladybird002').addClass('clicked2').removeClass('clicked1');
			}else if($("#ladybird001").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#ladybird001,#ladybird002').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#ladybird001").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#ladybird001)').addClass('bigger');
				$('#ladybird001').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#ladybird001)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#ladybird001)').removeClass('bigger');
				$('#ladybird001').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#ladybird001,#ladybird002').addClass('clicked1');
			}
	});
	
	$('#ladybird002').click(function() {
		if($("#ladybird002").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#ladybird001,#ladybird002').addClass('clicked2').removeClass('clicked1');
			}else if($("#ladybird002").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#ladybird001,#ladybird002').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#ladybird002").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#ladybird002)').addClass('bigger');
				$('#ladybird002').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#ladybird002)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#ladybird002)').removeClass('bigger');
				$('#ladybird002').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#ladybird001,#ladybird002').addClass('clicked1');
			}
	});
	
	$('#laura001').click(function() {
		if($("#laura001").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#laura001,#laura002,#laura003').addClass('clicked2').removeClass('clicked1');
			}else if($("#laura001").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#laura001,#laura002,#laura003').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#laura001").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#laura001)').addClass('bigger');
				$('#laura001').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#laura001)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#laura001)').removeClass('bigger');
				$('#laura001').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#laura001,#laura002,#laura003').addClass('clicked1');
			}
	});
	
	$('#laura002').click(function() {
		if($("#laura002").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#laura001,#laura002,#laura003').addClass('clicked2').removeClass('clicked1');
			}else if($("#laura002").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#laura001,#laura002,#laura003').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#laura002").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#laura002)').addClass('bigger');
				$('#laura002').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#laura002)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#laura002)').removeClass('bigger');
				$('#laura002').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#laura001,#laura002,#laura003').addClass('clicked1');
			}
	});
	
	$('#laura003').click(function() {
		if($("#laura003").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#laura001,#laura002,#laura003').addClass('clicked2').removeClass('clicked1');
			}else if($("#laura003").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#laura001,#laura002,#laura003').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#laura003").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#laura003)').addClass('bigger');
				$('#laura003').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#laura003)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#laura003)').removeClass('bigger');
				$('#laura003').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#laura001,#laura002,#laura003').addClass('clicked1');
			}
	});
	
	$('#rey001').click(function() {
		if($("#rey001").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#rey001,#rey002,#rey003,#rey004,#rey005,#rey006,#rey007,#rey008').addClass('clicked2').removeClass('clicked1');
			}else if($("#rey001").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#rey001,#rey002,#rey003,#rey004,#rey005,#rey006,#rey007,#rey008').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#rey001").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#rey001)').addClass('bigger');
				$('#rey001').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#rey001)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#rey001)').removeClass('bigger');
				$('#rey001').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#rey001,#rey002,#rey003,#rey004,#rey005,#rey006,#rey007,#rey008').addClass('clicked1');
			}
	});
	
	$('#rey002').click(function() {
		if($("#rey002").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#rey001,#rey002,#rey003,#rey004,#rey005,#rey006,#rey007,#rey008').addClass('clicked2').removeClass('clicked1');
			}else if($("#rey002").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#rey001,#rey002,#rey003,#rey004,#rey005,#rey006,#rey007,#rey008').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#rey002").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#rey002)').addClass('bigger');
				$('#rey002').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#rey002)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#rey002)').removeClass('bigger');
				$('#rey002').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#rey001,#rey002,#rey003,#rey004,#rey005,#rey006,#rey007,#rey008').addClass('clicked1');
			}
	});
	
	$('#rey003').click(function() {
		if($("#rey003").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#rey001,#rey002,#rey003,#rey004,#rey005,#rey006,#rey007,#rey008').addClass('clicked2').removeClass('clicked1');
			}else if($("#rey003").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#rey001,#rey002,#rey003,#rey004,#rey005,#rey006,#rey007,#rey008').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#rey003").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#rey003)').addClass('bigger');
				$('#rey003').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#rey003)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#rey003)').removeClass('bigger');
				$('#rey003').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#rey001,#rey002,#rey003,#rey004,#rey005,#rey006,#rey007,#rey008').addClass('clicked1');
			}
	});
	
	$('#rey004').click(function() {
		if($("#rey004").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#rey001,#rey002,#rey003,#rey004,#rey005,#rey006,#rey007,#rey008').addClass('clicked2').removeClass('clicked1');
			}else if($("#rey004").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#rey001,#rey002,#rey003,#rey004,#rey005,#rey006,#rey007,#rey008').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#rey004").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#rey004)').addClass('bigger');
				$('#rey004').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#rey004)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#rey004)').removeClass('bigger');
				$('#rey004').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#rey001,#rey002,#rey003,#rey004,#rey005,#rey006,#rey007,#rey008').addClass('clicked1');
			}
	});
	
	$('#rey005').click(function() {
		if($("#rey005").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#rey001,#rey002,#rey003,#rey004,#rey005,#rey006,#rey007,#rey008').addClass('clicked2').removeClass('clicked1');
			}else if($("#rey005").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#rey001,#rey002,#rey003,#rey004,#rey005,#rey006,#rey007,#rey008').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#rey005").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#rey005)').addClass('bigger');
				$('#rey005').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#rey005)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#rey005)').removeClass('bigger');
				$('#rey005').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#rey001,#rey002,#rey003,#rey004,#rey005,#rey006,#rey007,#rey008').addClass('clicked1');
			}
	});
	
	$('#rey006').click(function() {
		if($("#rey006").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#rey001,#rey002,#rey003,#rey004,#rey005,#rey006,#rey007,#rey008').addClass('clicked2').removeClass('clicked1');
			}else if($("#rey006").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#rey001,#rey002,#rey003,#rey004,#rey005,#rey006,#rey007,#rey008').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#rey006").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#rey006)').addClass('bigger');
				$('#rey006').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#rey006)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#rey006)').removeClass('bigger');
				$('#rey006').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#rey001,#rey002,#rey003,#rey004,#rey005,#rey006,#rey007,#rey008').addClass('clicked1');
			}
	});
	
	$('#rey007').click(function() {
		if($("#rey007").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#rey001,#rey002,#rey003,#rey004,#rey005,#rey006,#rey007,#rey008').addClass('clicked2').removeClass('clicked1');
			}else if($("#rey007").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#rey001,#rey002,#rey003,#rey004,#rey005,#rey006,#rey007,#rey008').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#rey007").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#rey007)').addClass('bigger');
				$('#rey007').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#rey007)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#rey007)').removeClass('bigger');
				$('#rey007').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#rey001,#rey002,#rey003,#rey004,#rey005,#rey006,#rey007,#rey008').addClass('clicked1');
			}
	});
	
	$('#rey008').click(function() {
		if($("#rey008").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#rey001,#rey002,#rey003,#rey004,#rey005,#rey006,#rey007,#rey008').addClass('clicked2').removeClass('clicked1');
			}else if($("#rey008").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#rey001,#rey002,#rey003,#rey004,#rey005,#rey006,#rey007,#rey008').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#rey008").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#rey008)').addClass('bigger');
				$('#rey008').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#rey008)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#rey008)').removeClass('bigger');
				$('#rey008').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#rey001,#rey002,#rey003,#rey004,#rey005,#rey006,#rey007,#rey008').addClass('clicked1');
			}
	});
	
	$('#ghost001').click(function() {
		if($("#ghost001").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#ghost001,#ghost002,#ghost003').addClass('clicked2').removeClass('clicked1');
			}else if($("#ghost001").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#ghost001,#ghost002,#ghost003').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#ghost001").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#ghost001)').addClass('bigger');
				$('#ghost001').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#ghost001)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#ghost001)').removeClass('bigger');
				$('#ghost001').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#ghost001,#ghost002,#ghost003').addClass('clicked1');
			}
	});
	
	$('#ghost002').click(function() {
		if($("#ghost002").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#ghost001,#ghost002,#ghost003').addClass('clicked2').removeClass('clicked1');
			}else if($("#ghost002").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#ghost001,#ghost002,#ghost003').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#ghost002").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#ghost002)').addClass('bigger');
				$('#ghost002').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#ghost002)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#ghost002)').removeClass('bigger');
				$('#ghost002').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#ghost001,#ghost002,#ghost003').addClass('clicked1');
			}
	});
	
		$('#ghost003').click(function() {
		if($("#ghost003").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#ghost001,#ghost002,#ghost003').addClass('clicked2').removeClass('clicked1');
			}else if($("#ghost003").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#ghost001,#ghost002,#ghost003').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#ghost003").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#ghost003)').addClass('bigger');
				$('#ghost003').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#ghost003)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#ghost003)').removeClass('bigger');
				$('#ghost003').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#ghost001,#ghost002,#ghost003').addClass('clicked1');
			}
	});
	
	$('#roma001').click(function() {
		if($("#roma001").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#roma001,#roma002,#roma003,#roma004').addClass('clicked2').removeClass('clicked1');
			}else if($("#roma001").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#roma001,#roma002,#roma003,#roma004').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#roma001").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#roma001)').addClass('bigger');
				$('#roma001').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#roma001)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#roma001)').removeClass('bigger');
				$('#roma001').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#roma001,#roma002,#roma003,#roma004').addClass('clicked1');
			}
	});
	
	$('#roma002').click(function() {
		if($("#roma002").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#roma001,#roma002,#roma003,#roma004').addClass('clicked2').removeClass('clicked1');
			}else if($("#roma002").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#roma001,#roma002,#roma003,#roma004').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#roma002").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#roma002)').addClass('bigger');
				$('#roma002').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#roma002)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#roma002)').removeClass('bigger');
				$('#roma002').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#roma001,#roma002,#roma003,#roma004').addClass('clicked1');
			}
	});
	
	$('#roma003').click(function() {
		if($("#roma003").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#roma001,#roma002,#roma003,#roma004').addClass('clicked2').removeClass('clicked1');
			}else if($("#roma003").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#roma001,#roma002,#roma003,#roma004').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#roma003").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#roma003)').addClass('bigger');
				$('#roma003').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#roma003)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#roma003)').removeClass('bigger');
				$('#roma003').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#roma001,#roma002,#roma003,#roma004').addClass('clicked1');
			}
	});
	
	$('#roma004').click(function() {
		if($("#roma004").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#roma001,#roma002,#roma003,#roma004').addClass('clicked2').removeClass('clicked1');
			}else if($("#roma004").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#roma001,#roma002,#roma003,#roma004').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#roma004").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#roma004)').addClass('bigger');
				$('#roma004').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#roma004)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#roma004)').removeClass('bigger');
				$('#roma004').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#roma001,#roma002,#roma003,#roma004').addClass('clicked1');
			}
	});
	
	$('#spy001').click(function() {
		if($("#spy001").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#spy001,#spy002,#spy003').addClass('clicked2').removeClass('clicked1');
			}else if($("#spy001").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#spy001,#spy002,#spy003').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#spy001").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#spy001)').addClass('bigger');
				$('#spy001').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#spy001)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#spy001)').removeClass('bigger');
				$('#spy001').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#spy001,#spy002,#spy003').addClass('clicked1');
			}
	});
	
	$('#spy002').click(function() {
		if($("#spy002").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#spy001,#spy002,#spy003').addClass('clicked2').removeClass('clicked1');
			}else if($("#spy002").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#spy001,#spy002,#spy003').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#spy002").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#spy002)').addClass('bigger');
				$('#spy002').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#spy002)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#spy002)').removeClass('bigger');
				$('#spy002').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#spy001,#spy002,#spy003').addClass('clicked1');
			}
	});
	
	$('#spy003').click(function() {
		if($("#spy003").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#spy001,#spy002,#spy003').addClass('clicked2').removeClass('clicked1');
			}else if($("#spy003").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#spy001,#spy002,#spy003').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#spy003").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#spy003)').addClass('bigger');
				$('#spy003').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#spy003)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#spy003)').removeClass('bigger');
				$('#spy003').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#spy001,#spy002,#spy003').addClass('clicked1');
			}
	});
	
	$('#heat001').click(function() {
		if($("#heat001").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#heat001,#heat002,#heat003').addClass('clicked2').removeClass('clicked1');
			}else if($("#heat001").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#heat001,#heat002,#heat003').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#heat001").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#heat001)').addClass('bigger');
				$('#heat001').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#heat001)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#heat001)').removeClass('bigger');
				$('#heat001').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#heat001,#heat002,#heat003').addClass('clicked1');
			}
	});
	
	$('#heat002').click(function() {
		if($("#heat002").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#heat001,#heat002,#heat003').addClass('clicked2').removeClass('clicked1');
			}else if($("#heat002").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#heat001,#heat002,#heat003').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#heat002").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#heat002)').addClass('bigger');
				$('#heat002').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#heat002)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#heat002)').removeClass('bigger');
				$('#heat002').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#heat001,#heat002,#heat003').addClass('clicked1');
			}
	});
	
	$('#heat003').click(function() {
		if($("#heat003").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#heat001,#heat002,#heat003').addClass('clicked2').removeClass('clicked1');
			}else if($("#heat003").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#heat001,#heat002,#heat003').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#heat003").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#heat003)').addClass('bigger');
				$('#heat003').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#heat003)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#heat003)').removeClass('bigger');
				$('#heat003').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#heat001,#heat002,#heat003').addClass('clicked1');
			}
	});
			
	$('#jyn001').click(function() {
		if($("#jyn001").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#jyn001,#jyn002,#jyn003').addClass('clicked2').removeClass('clicked1');
			}else if($("#jyn001").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#jyn001,#jyn002,#jyn003').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#jyn001").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#jyn001)').addClass('bigger');
				$('#jyn001').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#jyn001)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#jyn001)').removeClass('bigger');
				$('#jyn001').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#jyn001,#jyn002,#jyn003').addClass('clicked1');
			}
	});
	
	$('#jyn002').click(function() {
		if($("#jyn002").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#jyn001,#jyn002,#jyn003').addClass('clicked2').removeClass('clicked1');
			}else if($("#jyn002").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#jyn001,#jyn002,#jyn003').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#jyn002").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#jyn002)').addClass('bigger');
				$('#jyn002').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#jyn002)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#jyn002)').removeClass('bigger');
				$('#jyn002').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#jyn001,#jyn002,#jyn003').addClass('clicked1');
			}
	});
	
	$('#jyn003').click(function() {
		if($("#jyn003").hasClass("clicked1")==true){ //만약 이미지를 두 번 클릭을 했을 때
				$('#jyn001,#jyn002,#jyn003').addClass('clicked2').removeClass('clicked1');
			}else if($("#jyn003").hasClass("clicked2")==true){ //만약 이미지를 세 번 클릭 했을 때
				$('#jyn001,#jyn002,#jyn003').addClass('clicked3').removeClass('clicked2'); 
			}else if($("#jyn003").hasClass("clicked3")==true){ //만약 이미지를 네 번 클릭 했을 때
				$('li:has(#jyn003)').addClass('bigger');
				$('#jyn003').removeClass('clicked3').addClass('zoomout');
			}else if($("li:has(#jyn003)").hasClass("bigger")==true){ //만약 li에 .bigger를 가질때
				$('li:has(#jyn003)').removeClass('bigger');
				$('#jyn003').removeClass('zoomout').addClass('clicked3');
			}else{ //이 모든 경우가 아니고 처음 클릭한다면
				$('#jyn001,#jyn002,#jyn003').addClass('clicked1');
			}
	});
	