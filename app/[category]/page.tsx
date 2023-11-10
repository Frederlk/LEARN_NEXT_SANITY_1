import Category, { getCategoryProducts } from '@/components/Category';

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const data = await getCategoryProducts(params.category);

  return <Category products={data} categoryName={params.category} />;
}
