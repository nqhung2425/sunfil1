export type MainCategory = {
    id: string;
    name: string;
    imageUrl: string
    subcategories?: MainCategory[]
}