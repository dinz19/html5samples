console.log ('Hello World');
var x =10;

function ValidateForm()
{
   let status = true;  
   var n1 = document.getElementById("na1").value;
   if (n1 == ""||n1 == null)
   {
   document.getElementById('na1.err').innerHTML='First name requird';
   status=false;
   }
   else
   {
   document.getElementById("na1.err").innerHTML="";
   }

   var n2 = document.getElementById("na2").value;
   if (n2 == ""||n2 == null)
   {
   document.getElementById('na2.err').innerHTML='Last name requird';
   status=false;
   }
   else
   {
   document.getElementById("na2.err").innerHTML="";
   }
   return status
}

