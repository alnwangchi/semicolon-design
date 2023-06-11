export const calcOrders = (data : any[]) => {

  return data.reduce((acc, {price, manufacturingCost, otherCost, invoiceCost, ...rest}) => {
    acc.totalManufacturingCost += manufacturingCost
    acc.totalPrice += price

    acc.totalBenefit += (price - manufacturingCost - otherCost - invoiceCost)
    return acc
  },{
    totalManufacturingCost: 0,
    totalPrice: 0,
    totalBenefit: 0
  })

}



  