import axios from 'axios';


class HomeApi {
    public searchFood(name: string){
        return axios.get(`api/v1/food/getFood/${name}`)
    }
}

export default HomeApi