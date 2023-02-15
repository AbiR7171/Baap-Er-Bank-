document.getElementById('deposite-btn').addEventListener('click', function(){
  
   const depositeFeild = document.getElementById('deposite-No');
   const depositeValueString = depositeFeild.value;
   const depostiValue = parseFloat(depositeValueString);
   

   const depositeBalance = document.getElementById('depostieBalance');
   const preivousDepositeString = depositeBalance.innerText;
   const previousDeposite = parseFloat(preivousDepositeString);

   const totalDepositeBalance  = previousDeposite + depostiValue;
   depositeBalance.innerText = totalDepositeBalance;

const myBalance = document.getElementById('MyBalance');
const myBalanceString = myBalance.innerText;
const myBalanceNo = parseFloat(myBalanceString);

const myTotalBalance = myBalanceNo + totalDepositeBalance ;
myBalance.innerText = myTotalBalance;




   depositeFeild.value = '';
   



   
  
})