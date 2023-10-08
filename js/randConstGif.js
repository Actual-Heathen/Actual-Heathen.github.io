function setGIF()
{
    switch(Math.floor(Math.random() * 6))
    {
        case 0:
            document.getElementById("constructionGIF").innerHTML = "<img src=\"https://thecuriousquilter.files.wordpress.com/2010/08/prewash-fabric-jackhammer.gif\"></img>";
            break;
        case 1:
            document.getElementById("constructionGIF").innerHTML = "<img src=\"https://i.gifer.com/YVPE.gif\"></img>";
            break;
        case 2:
            document.getElementById("constructionGIF").innerHTML = "<img src=\"https://i.gifer.com/YzDB.gif\"></img>";
            break;
        case 3:
            document.getElementById("constructionGIF").innerHTML ="<img src=\"https://i.gifer.com/FI0q.gif\"></img>" ;
            break;
        case 4:
            document.getElementById("constructionGIF").innerHTML = "<img src=\"https://i.gifer.com/RqTW.gif\"></img>";
            break;
        case 5:
            document.getElementById("constructionGIF").innerHTML = "<img src=\"https://i.gifer.com/ZSj2.gif\"></img>";
            break;
    }
}

window.onload = function()
{
    setGIF();
}