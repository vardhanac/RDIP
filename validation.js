function dis(val) 
{ 
	document.getElementById("result").value+=val 
	return val;
} 	
function solve() 
{ 
	let x = document.getElementById("result").value 
	let y = eval(x) 
	document.getElementById("result").value = y 
	return y;
} 		
function clr() 
{ 
	document.getElementById("result").value = "" 
	return result;
} 
function squareroot() 
{
	let z=document.getElementById("result").value
	let a=Math.sqrt(z)
	document.getElementById("result").value =a 
    return a;
}
function absolute() 
{
	let b=document.getElementById("result").value
	let c=Math.abs(b)
	document.getElementById("result").value =c
	return c;
}

function validateForm() {
  var x = document.forms["myForm"]["fname"].value;

  var email = document.getElementById('email');
     var num = document.forms["myForm"]["phone"].value;
    
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  
  else if(!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
  }
     else if(isNaN(num) && num.length < 10 ) {
    alert("Enter valid number");
    return false;
  }
    else{
        document.write("Submitted Successfully")
    }
       
}
		   	   
function palindromecheck(string){
	document.getElementById('pal').style.color = '#5de310';
	var result;
	var s1 = string.value;
	var s = s1.toLowerCase();
	var rev = "";
	for(i = s.length-1 ; i>=0 ; i-- ){
		rev+=s[i];
	}
	if(s == rev){
		document.getElementById('pal').innerHTML = s1+" is a palindrome!";
		return  s1+" is a palindrome!";
	}
	else{
		document.getElementById('pal').style.color = '#db0b00';
		document.getElementById('pal').innerHTML = s1+" is a not palindrome!"; 
		return s1+" is not a palindrome!";
	}
}

function anagramcheck(words,ana){
	document.getElementById('anagram').style.color = '#5de310';
	var sentence = words.value;
	var word = ana.value;
	var a = sentence.split(' ').join('');
	var b = word.split(' ').join('');
	var an1 = a.toLowerCase().split('').sort().join('');
	var an2 = b.toLowerCase().split('').sort().join('');
	if(an1 == an2){
		document.getElementById('anagram').innerHTML = word+" is an anagram!";
		return word+" is an anagram!";
	}
	else{
		document.getElementById('anagram').style.color = '#db0b00';
		document.getElementById('anagram').innerHTML = word+" is a not an anagram!";
		return word+" is a not an anagram!";
	}
}
		 
function winner(){
    var num1 = Math.floor(Math.random() * (1001));;
    document.getElementById('number1').innerHTML=num1;

    var num2 = Math.floor(Math.random() * (1001));;
    document.getElementById('number2').innerHTML=num2;

    num1 = num1 % 3;
    num2 = num2 % 3;

    if((num1 === 0 && num2 === 1) || (num1 === 1 && num2 === 0))
    {
       document.getElementById('result').innerHTML = "Human wins";
    }
    if((num1 === 1 && num2 === 2) || (num1 === 2 && num2 === 1))
    {
        document.getElementById('result').innerHTML = "Cockroach wins";
    }
    if((num1 === 0 && num2 === 2) || (num1 === 2 && num2 === 0))
    {
        document.getElementById('result').innerHTML = "Nuclear bomb wins";
    }
}