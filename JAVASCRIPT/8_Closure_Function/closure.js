
function outer(){

    document.write(`Function Outer <br>`);
    
    function inner(){
        document.write(`Function Inner <br>`);
    }
    return inner;
}

outer()();

function fun(num1){


    function fun2(num2){

        function fun3(num3){

            prod = num1*num2*num3;
            return prod;
        }
        return fun3;

    }
    return fun2;
}

var product=fun(10)(20)(30);
document.write(`Product is : ${product}`)
