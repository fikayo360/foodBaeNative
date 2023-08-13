type food = {
    name:string;
    foodImg:any;
    price:number;
}

const popularMeals:food[] = [
    {
        name:'poundo',
        foodImg:'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        price:1500
    },
    {
        name:'juicy-burgers',
        foodImg:'https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price:5000
    },
    {
        name:'spicy-tacos',
        foodImg:'https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price:1000
    },
    {
        name:'ramen',
        foodImg:'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price:1500
    },
    {
        name:'currylicious curry',
        foodImg:'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price:2000
    },
    {
        name:'hot-pizza',
        foodImg:'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price:4000
    }
]

export default popularMeals