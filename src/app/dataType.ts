export interface SignUp{
    name:string,
    email:string,
    password:string,
}

export interface login{
    email:string,
    password:string,
}

export interface Product{
    name:string,
    color:string,
    price:number,
    category:string,
    description:string,
    image:string,
    id:number,
    quantity:undefined | number,
}

export interface userSignup{
    username: string,
    email: string,
    password: string
}