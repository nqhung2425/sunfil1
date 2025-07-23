import { MainCategory } from "../types/Category";
import { Product } from "../types/Product";
import { categories } from "./category";
import { bestSellers } from "./products";

export const PAGE_SIZE = 8;

export async function getProducts(page: number, pageSize: number = PAGE_SIZE): Promise<Product[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const start = page * pageSize;
            const end = start + pageSize;
            const data = bestSellers.slice(start, end);
            resolve(data);
        }, 1000);
    });
}

export async function getCategories(): Promise<MainCategory[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categories);
        }, 2000);
    });
}

export async function getTrendingProducts(): Promise<Product[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(bestSellers.slice(0, 5));
        }, 2000);
    });
}
