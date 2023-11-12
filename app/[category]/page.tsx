import Category, { getCategoryProducts } from '@/components/Category';

export const dynamic = 'force-dynamic';

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const data = await getCategoryProducts(params.category);

  return <Category products={data} categoryName={params.category} />;
}
