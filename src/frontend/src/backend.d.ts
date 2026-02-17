import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface EmailMessage {
    name: string;
    email: string;
    message: string;
}
export interface Product {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    category: string;
    rating?: number;
    price: number;
}
export interface backendInterface {
    addProduct(id: string, title: string, price: number, category: string, rating: number | null, description: string, imageUrl: string): Promise<void>;
    getInquiry(): Promise<EmailMessage>;
    getProducts(): Promise<Array<Product>>;
    initializeDemoProducts(): Promise<void>;
    submitInquiry(name: string, email: string, message: string): Promise<void>;
}
