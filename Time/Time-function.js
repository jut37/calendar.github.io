window.onload = function()
{
	function toDou(n)
	{
		if(n < 10)
		{
			return '0'+n;
		}
		else
		{
			return ''+n;
		}
	}
	
	var aImg = document.getElementsByTagName('img');
	
	function run()
	{
		var oDate = new Date();
		var str = toDou(oDate.getHours())+toDou(oDate.getMinutes())+toDou(oDate.getSeconds());
		
		
		for(var i=0;i<aImg.length;i++)
		{
			aImg[i].src = str[i]+'.png';
		}
	}
	
	setInterval(run,500);
	run();
}