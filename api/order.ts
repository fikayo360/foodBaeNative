import axios from 'axios';

interface order {
    products:any,amount:number,address:string
}

class Order {
    public createOrder(OrderData:order){
        return axios.post('api/v1/order/createOrder',OrderData)
    }
}

export default Order