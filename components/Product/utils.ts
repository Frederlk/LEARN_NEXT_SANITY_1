import { client } from '@/lib/sanity';
import { IFullProduct } from './interfaces';

export async function getProduct(slug: string) {
  const query = `*[_type == 'product' && slug.current == "${slug}"][0] {
    _id,
    price,
    price_id,
    name,
    description,
    "slug": slug.current,
    "categoryName": category->name,
    images,
  }`;

  const data: IFullProduct = await client.fetch(query);

  return data;
}
