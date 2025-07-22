import { Product } from "../types/Product";
import { bestSellers } from "./products";

const PAGE_SIZE = 8;

export async function getMockDataProduct(page: number): Promise<Product[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const start = page * PAGE_SIZE;
            const end = start + PAGE_SIZE;
            const data = bestSellers.slice(start, end);
            resolve(data);
        }, 1000);
    });
}
