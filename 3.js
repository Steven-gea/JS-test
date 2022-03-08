const userIds = ['U01', 'U02', 'U03'] 
const orderIds = ['T01', 'T02', 'T03','T04'] 
const userOrders = [			
{ userId: 'U01', orderIds: ['T01', 'T02'] },
{ userId: 'U02', orderIds: [] },
{ userId: 'U03', orderIds: ['T03'] },
]
const userData = { 'U01':'Tom', 'U02':'Sam', 'U03':'Joh' } 
const orderData = {						
'T01': { name: 'A',price: 499 }, 
'T02': { name: 'B',price: 599 },
'T03': { name: 'C',price: 699 }, 
'T04': { name: 'D',price: 799 }
} 


const result = [
{
    user: { id: userIds[0], name: userData["U01"] }, 
    orders: [
        { id: orderIds[0], name: orderData["T01"].name, price:orderData["T01"].price },
        { id: orderIds[1], name: orderData["T02"].name, price:orderData["T02"].price }, 
        ],
    }
]
console.log(JSON.stringify(result,null,2))