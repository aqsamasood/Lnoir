function showFooter()
{
	$("footer p").animate({bottom:'10px'},500);
}
function hideFooter()
{
	$("footer p ").animate({bottom:'-40px'},800);
}
function hideHeader()
{
	$("nav ul li").each(function(i){
	$(this).find('a').delay(70*i).animate({top:'100px',opacity:'0'},500);
	});
}
function showHeader()
{
	$("nav ul li").each(function(i)
	{
		if(i%2) {
			$(this).find('a').animate({top:'60px',opacity:'1'},500);
			$(this).find('a').animate({top:'52px'},250);
		}
		else 
		{
			$(this).find('a').delay(50*i).animate({top:'60px',opacity:'1'},500);
			$(this).find('a').animate({top:'52px'},250);
		}
	});
}
function showText()
{
	$(".text p").each(function(i){
		$(this).delay(i*150).animate({opacity:"1"}, 1200);
	});
}




/***************** Home Page************************/

function homePage()
{		
	animateHeader();
	showFooter();
	$("a").on("click", function(){
		var href = $(this).attr("href");
		if(href){
			hideHeader();
			hideFooter();
			setTimeout(function(){
				window.location = href;},800)
			}
			return false;
		});
		
}

function animateHeader()
{
	$("#homepage nav").animate({opacity:'1'},800);
	$("#homepage nav ul li a").animate({marginLeft:'40px'},0).animate(
		{marginRight:'20px'},500);
}



/**********   InfoPage Animation ***************/


function infoPage()
{
	$('.titleinfo').append("<div class='box'></div>");
	$(".titleinfo").animate(
		{width:'172px',height:'166px'},500).animate(
		{marginTop:"0%"},500).animate ({
			height:"100%"},500, function(){
			$(".box").animate ({bottom:'-200px'},400,function(){
					$(".titleinfo").animate(
						{marginLeft:'73px'},500);
					$("#contents").animate(
						{width:"620px"},500,function(){
							showHeader();
							showText();
							showFooter();
						});
				});
		});
	$('nav a').on("click",function(){
		var href = $(this).attr("href");
		if(href){
			hideHeader();
			hideFooter();
			$(".text").delay(100).animate({marginLeft:"800px"},500);
			$("#contents").delay(100).animate({marginLeft:"900px" ,width:"0px"},800);
			$(".titleinfo").delay(800).animate({left:"300px" ,width:"0px"},500);
			setTimeout(function(){
				 window.location = href;},1800)
			}
			return false;
		});

}


/**********  Company Page Animation *********/

function companyPage()
{
	showHeader();
	var position, pos_left;
	
	$('#companypage #contents').delay(100).animate(
		{width:"100%"},1200,function(){
			$('#companypage #contents').css({"min-width":"750px"});
			$('.text p').delay(0);showText();
			$("#bottom-border").animate(
				{width:"1500px"},1500,function(){showFooter();});
		});

	$("a").on("click", function()
	{
		var href = $(this).attr("href");
		if(href)
		{
			hideHeader();
			$('#top-border h2').animate({marginLeft:"-2000px"},1000,function(){
			$('.text').slideUp(700);
			$('#top-border').animate({marginTop:"+=200px"},800,function(){	
			$('.Wrapper').animate(
			{width:"90px"},100);
			$('#bottom-border').animate({left:"0px"},100,function(){
			$('#contents').css({"overflow":"hidden"});
			$('.Wrapper').css({"overflow":"hidden"});
			$('#top-border').animate({height:'0px'},1000,function(){
			$('#contents').css({"min-width":"900px"});
			$('.Wrapper').animate({width:"45px"},500);
			$('#bottom-border').animate({width:"45px"},500,function(){
			$('#bottom-border').animate(
			{height:"25px"},100,function(){
			$('#bottom-border').animate({width:"25px"},100,function(){
			$('#bottom-border').animate(
			{height:"5px"},100,function(){
			$('#bottom-border').animate({width:"0px"},100,function(){});
			
								});
								});
							});
						});
					});
				});
			});
			});	
			hideFooter();
			setTimeout(function(){
			window.location = href},3800)
			return false;
			}
		});

}



/******************** Clients Page Animation***************************/

function clientsPage()
{
		showHeader();
		el = document.querySelector("#background").getElementsByTagName('p');
		var str=String(el[0].innerHTML);
		var final_str="";
		for(i=0;i<str.length;i++)
			final_str+="<span>"+str[i]+"</span>";
		el[0].innerHTML=final_str;
		obj2=el[0].getElementsByTagName('span');
		align_images(obj2,0,str.length,0,-2);
		show_title(obj2,0,str.length,300,-150,0.2);
	    showFooter();
	    setTimeout(function()
	    {
	    showImages();
         },1000);
        $("a").on("click", function(){
			var href = $(this).attr("href");
			if(href){
				hideHeader();
				hideFooter();
			    hideImages();
			
				setTimeout(function () {
						hideTitle();
				 	window.location = href;
					},1000);
				}
					return false; 
			});
}

function showImages()
{
	$("#clients1 img").each(function(i)
	{
		$(this).delay(60*i).animate({marginLeft:'50px', opacity:'1'},1000);
		
	});
	$("#clients2 img").each(function(i)
	{
		$(this).delay(60*(i)).animate({marginRight:'40px', opacity:'1'},1000);
		
	});
	
	
}
function hideImages()
{

	$("#clinets1 img").each(function(i)
	{
		$(this).delay(50*i).animate({marginLeft:'100px', opacity:'0'},500);
	});
	$("#clinets2 img").each(function(i)
	{
		$(this).delay(50*i).animate({marginRight:'-100px', opacity:'0'},500);
	});
}
function hideTitle()
{
	$("#background p").animate({opacity:'0'},500);
}
function show_title(obj,start,count,top,offset,speed)
{
	var property ="all";
	var duration =0.5;
	var timing_func="ease";
	var delay =0.1;
	var pos_top=top;
	var translate='translate(0px,'+offset+'px)';
	for(var i=start;i<start+count;i++)
	{
		value = property+" "+duration+"s"+" "+timing_func+" "+delay+'s';//transition: property duration timing-function delay;
		obj[i].style.visibility= "visible";
		obj[i].style.top= pos_top+'px';
		obj[i].style.MozTransition= value;
		obj[i].style.MozTransform= translate;
		obj[i].style.WebkitTransition= value;
		obj[i].style.WebkitTransform= translate;
		delay=delay+speed;
	}
}


/**************************  ContactPage Animation***************************************/
function contactPage()
{
	    showHeader();
	    var el = document.querySelector("#title");
		 el.addEventListener("animationend",function()
		{alert('hi')
			img_animation();
			mail_list_animation();
			setTimeout(function()
			{
			adress_animation();
			showFooter();
			},1500);
		return false;
		});
}
function img_animation()
{
		var elem = document.querySelector(".images");
		var img = elem.getElementsByTagName('img');
		align_images(img,0,3,0,-1);
		align_images(img,3,4,0,-1);
		$(".images img").each(function(i)
		{
			if(i<3)
			{
			$(this).delay(300*i).animate({top:"0px"},500);
			}
			else
			{	
				if(i == 3)
				{
					elem = document.querySelector("#curtain");
					elem.style.display="none";
				}
				if(i == 6)
				{	
					$(this).css({left:"377px"});				
				}
				$(this).delay(300*i).animate({top:"190px"},500);
			}
		});
}  
function mail_list_animation()
{
    $("#mail li").each(function(i){
	   $(this).delay(100*(i)).animate({width:'400px'},500);	
	});
	setTimeout(function(){ 
	$("#details").delay(100).animate({opacity:1},500);},500);
	$("#mail li").each( function(i){
    		$(this).delay(100*(i)).animate({top:'-30px'},500);
     	});
}

function adress_animation()
{
	var elem = document.querySelector("div#address").getElementsByTagName('p');
	var len=elem.length;
	for(var i=0;i<len;i++)
	{
		var str=String(elem[i].innerHTML);
	 	var final_str="";
		for(j=0;j<str.length;j++)
		{
			final_str+="<span>"+str[j]+"</span>";
		}
		elem[i].innerHTML=final_str;
		Cufon.replace('#address p span');
		$("#address p span").each(function(i)
		{
			$(this).delay(10*i).animate({opacity:'1'},50);
		});
	}

}
function align_images(obj,start,count,left,spacing)
{
	
	for(var i=start;i<start+count;i++)
	{
		obj[i].style.left=left+'px';
		if(spacing===-1)
		{
			left+=obj[i].width;
		}
		else if(spacing===-2)
		{
			left+=obj[i].offsetWidth;
		}
		else
		left+=spacing;	
	}
}

  


