import Product from '@/app/components/Product';

export default function ProductPage({ params }: { params: { slug: string } }) {
  return <Product slug={params.slug} />;
}
