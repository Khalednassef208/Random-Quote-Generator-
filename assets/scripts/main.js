function getWisdom(){
    var wisdom = wisdomList [Math.floor(Math.random()* wisdomList.length)];
    document.getElementById("wisdom").innerHTML=wisdom;
}
    var wisdomList=[
        "“The fool doth think he is wise, but the wise man knows himself to be a fool.”",
        "“The only true wisdom is in knowing you know nothing.”",
        "“May you live every day of your life.”",
        "“Think before you speak. Read before you think.”",
        "“Never let your sense of morals prevent you from doing what is right.”",
    ];

    getWisdom()

