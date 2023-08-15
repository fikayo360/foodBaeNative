import axios from 'axios';

interface catData {
    foodCategory:string
}
class CategoryApi {
    public getCategories(foodCategory:catData){
        return axios.get(`api/v1/food/allFood/${foodCategory}`)
    }
}

export default CategoryApi