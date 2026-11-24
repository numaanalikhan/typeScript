// aliases

type vehicle = {
    brand: string,
    model: number,
    price:number
}

interface Employees {
    name:string,
    id:number,
    salary:number,
    isDeath:boolean
}

interface Students {
    id:number,
    name:string,
    marks:number,
    email:string
}

export {vehicle,Employees, Students}