var x=xmlDom.documentElement.childNode;
var text="";
for(var i=0;i<x.length;i++)
{
    if(x[i].nodeType==1){
        text=text + x[i].nodeName +"<br>"
    }
}