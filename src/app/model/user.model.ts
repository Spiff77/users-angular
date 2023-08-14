import { Address } from "./address.model";

export interface User{
    name: string,
    username:string,
    email: string,
    address?: Address
}