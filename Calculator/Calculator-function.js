function insert(num)
{
	document.getElementById('viewer').value = document.getElementById('viewer').value + num;
}

function c()
{
	document.getElementById('viewer').value = "";
}

function count()
{
	var exp = document.getElementById('viewer').value;
	if(exp)
	{
		document.getElementById('viewer').value = eval(exp);
	}
}

function back()
{
	var exp = document.getElementById('viewer').value;
	document.getElementById('viewer').value =  exp.substring(0,exp.length-1);
}