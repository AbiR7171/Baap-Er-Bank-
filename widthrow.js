document.getElementById('btn-widthrow').addEventListener('click', function(){
    const widthrowFeild = document.getElementById('plz-widthrow');
    const widthrowAmounString = widthrowFeild.value;
    const widthrowAmount = parseFloat(widthrowAmounString);

    const widthrowBalance = document.getElementById('widthrowAmount');
    const widthrowBalnceString = widthrowBalance.innerText;
    const widthrowBalanceTK = parseFloat(widthrowBalnceString);

    const totalWidthrowAmount = widthrowBalanceTK + widthrowAmount;
    widthrowBalance.innerText = totalWidthrowAmount;

    const myBalance = document.getElementById('MyBalance');
    const myBalanceString = myBalance.innerText;
    const myBalanceAmount = parseFloat(myBalanceString);
    const myTotalBalance = myBalanceAmount - widthrowAmount;
    myBalance.innerText = myTotalBalance;


    widthrowFeild.value = '';
})