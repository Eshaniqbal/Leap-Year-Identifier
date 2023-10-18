function myfun() {


    num = parseInt(document.getElementById('year').value);
    if (num % 4 == 0)

        document.getElementById('output').innerHTML = true;
    else
        document.getElementById('output').innerHTML = false;

}