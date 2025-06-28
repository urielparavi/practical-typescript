let bike: { brand: string; year: number } = { brand: 'yanaha', year: 2010 };
// bike.year = 'old';

let laptop: { brand: string; year: number } = { brand: 'Dell', year: 2020 };
// let laptop2: { brand: string; year: number } = { brand: 'HP' };

let product1 = { title: 'shirt', price: 20 };
let product2 = { title: 'pants' };
let products: { title: string; price?: number }[] = [product1, product2];

products.push({ title: 'shoes' });
