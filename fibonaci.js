export  const fibonacci = (num) =>{

    var one_num =parseInt(prompt("enter a number: "));
    var second_num =parseInt(prompt("enter a number: "));

    var array =(one_num,second_num);

    for(var i = 1; i<=300;i++){

        var new_number = one_num + second_num;
        array.push(new_numer);
        one_num = second_num;
        second_num = new_number;
    }
console.log(array);
for(x of array){

   document.write(x + "<br>");

}

}