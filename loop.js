var i;
var start=parseInt(prompt("Enter the starting number"));
var end=parseInt(prompt("Enter the end number"));

document.write("<u>"+"Even Numbers between"+" "+start+" "+"and"+" "+end+" "+ ":"+" "+"<br>"+"</u>"+"<br>");
for(i=start;i<=end;i++)
{
    if(i%2==0)
    {
     document.write(i+"<br>");
    }
    
}
document.write("Successfully Completed!");

