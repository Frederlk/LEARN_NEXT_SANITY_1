import { client } from '@/lib/sanity';
import { IProduct } from './interfaces';

export async function getProduct(slug: string) {
  const query = `*[_type == 'product' && slug.current == "${slug}"][0] {
    _id,
    price,
    name,
    description,
    "slug": slug.current,
    "categoryName": category->name,
    images,
  }`;

  const data: IProduct = await client.fetch(query);

  return data;
}
