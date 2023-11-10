import { client } from '@/lib/sanity';
import { ISimplifiedProduct } from './interfaces';

export async function getNewestProducts() {
  const query = `*[_type == 'product'][0...4] | order(_createdAt desc) {
    _id,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url,
  }`;

  const data: ISimplifiedProduct[] = await client.fetch(query);

  return data;
}
