'use client';

import { useShoppingCart } from 'use-shopping-cart';

import { urlFor } from '@/lib/sanity';

import { Button } from '@/components/ui/button';
import { ICartProduct } from '@/components/AddToCart/interfaces';

export default function Checkout({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ICartProduct) {
  const { checkoutSingleItem } = useShoppingCart();

  const buyNow = (priceId: string) => () => {
    checkoutSingleItem(priceId);
  };

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };

  return (
    <Button variant="outline" onClick={buyNow(product.price_id)}>
      Checkout Now
    </Button>
  );
}
