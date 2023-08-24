import axios from 'axios';

interface order {
    products:any,amount:number,address:string
}

class Order {
    public createOrder(OrderData:order){
        return axios.post('api/v1/order/createOrder',OrderData)
    }
    public getUserOrders(id:string){
        return axios.get(`api/v1/order/getOrdersByUserid/${id}`)
    }
}

export default Order