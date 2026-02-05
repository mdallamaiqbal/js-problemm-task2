/* 
My task is to calculate the total budget required to buy electronics:
    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
*/
function calculateElectronicsBudget(laptop,tablet,mobile){
  const laptopPrice=35000;
  const tabletPrice=15000;
  const mobilePrice=20000;
  const laptopRequired=laptopPrice*laptop;
  const tabletRequired=tabletPrice*tablet;
  const mobileRequired=mobilePrice*mobile;
  const totalMoneyRequired=laptopRequired+tabletRequired+mobileRequired;
  return totalMoneyRequired
}
const totalMoney=calculateElectronicsBudget(0,1,1);
console.log(totalMoney);
