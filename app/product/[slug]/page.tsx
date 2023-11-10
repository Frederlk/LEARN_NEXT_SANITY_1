import Product, { getProduct } from '@/components/Product';

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getProduct(params.slug);

  return <Product product={data} />;
}
