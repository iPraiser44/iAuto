var $ = window.jQuery;
function all(){
function forever(){
document.querySelector("#txtSkin").value="foreveralone";
document.querySelector("#nick").value="wwwwwwwwwwwwwww";
onClickPlay();
};
setTimeout(forever, 5000);

function dimen(){
document.querySelector("#txtSkin").value="3dimension";
document.querySelector("#nick").value="iPraiser!👑";
onClickPlay();
}
setTimeout(dimen, 10000);
}
//setInterval(all , 10000)

var x=1
function nickadd (number) {


	$('#helloDialog').prepend(`

			<input onchange="localStorage.setItem('botNick', this.value);" id="nickid" maxlength="15" class="form-control" placeholder="Nick"></input>

		`);
	$("#nickid").attr("placeholder","Nick" + x)
$("#nickid").attr("id","Nick" + x)


	x++
}




var y=1
function skinadd (number) {


	$('#helloDialog').prepend(`

			<input onchange="localStorage.setItem('botNick', this.value);" id="skinid" maxlength="45" class="form-control" placeholder="Skin"></input>

		`);
	$("#skinid").attr("placeholder","Skin" + y)
$("#skinid").attr("id","Skin" + y)


	y++
}



//wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww


function nickrem (number) {


	$('#Nick'+x).remove();



	x--
}





function skinrem (number) {


	$('#Skin'+y).remove();



	y--
}





	

		var nik
		var ski

		var nikval
		var	skival


$('#helloDialog').prepend(`

			<center><button id="ekle" onclick="ekle()" class="btn btn-success">EKLE</button></center>

		`);


$('#helloDialog').prepend(`

			<input onchange="skival = ski.value" id="addtimesskin" maxlength="3" class="form-control" placeholder="Kac Tane Skin"></input>

		`);
		


$('#helloDialog').prepend(`

			<input onchange="nikval = nik.value" id="addtimesnick" maxlength="3" class="form-control" placeholder="Kac Tane Nick"></input>

		`);




		ski = document.getElementById('addtimesskin')
		nik = document.getElementById('addtimesnick')
		

$("#nickid").attr("id","Nick" + x)
$("#nickid").attr("placeholder","Nick" + x)


		function ekle(){
  for (; x < nikval;)
     {
            nickadd() 
     }


  for (; y < skival;)
     {
            skinadd()
     }



       for (; x > nikval;)
     {
            nickrem() 
     }


  for (; y > skival;)
     {
            skinrem()
     }
}




/*

        $('#idFacebookPage').replaceWith(`
        <input onchange="localStorage.setItem('botNick', this.value);" id="botNick" maxlength="15" class="form-control" placeholder="Name1"></input>
        <input onchange="localStorage.setItem('botAmount', this.value);" id="BotAmount" maxlength="3" class="form-control" placeholder="Name2"></input>
        <center><button id="toggleButton" onclick="window.client.startBots(localStorage.getItem('botAmount'));" class="btn btn-success">Start Bots</button></center>
        `);
        if (!localStorage.getItem('botAmount')) localStorage.setItem('botAmount', 10);
        if (!localStorage.getItem('botNick')) localStorage.setItem('botNick', 'Sanik');
        console.log('[AgarUnlimited] Ready!');




        */
