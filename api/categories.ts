import axios from 'axios';

interface catData {
    foodCategory:string
}
class CategoryApi {
    public getCategories(foodCategory:catData){
        return axios.post(`api/v1/user/signup/${foodCategory}`)
    }
}

export default CategoryApi