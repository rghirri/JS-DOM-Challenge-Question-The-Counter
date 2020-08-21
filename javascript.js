var tag = document.getElementsByTagName("p")
document.getElementById("demo").innerHTML = TagCounter(tag);

function TagCounter(x){
    var tagCount = 0;
    var tagName = "";
    for (i=0;i<x.length;i++){
        tagCount = x.length-1;
        tagName = x[i].tagName;
    }
    return `There are ${tagCount}  tags of type ${tagName} on the page`;
}

