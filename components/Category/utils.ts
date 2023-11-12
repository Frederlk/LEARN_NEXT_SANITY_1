import { client } from '@/lib/sanity';
import { ISimplifiedProduct } from '@/components/Newest/interfaces';

export async function getCategoryProducts(category: string) {
  const query = `*[_type == 'product' && category->name == "${category}"] {
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
