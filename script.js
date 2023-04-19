
function changeColor()
{
    var hex_number = ["0","1", "2", "3","4", "5", "6", "7", "8","9", "A", "B", "C","D", "E", "F"]
    var hex = '';

    for(var i = 0; i < 6; i++)
    {
        var random_number = Math.floor(Math.random() * hex_number.length);
        hex += hex_number[random_number];
    }
    document.getElementById("hex-code").innerHTML = hex;
    document.getElementsByTagName("body")[0].style.background = '#' + hex;
}