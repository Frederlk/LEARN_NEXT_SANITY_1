'use client';

import { useShoppingCart } from 'use-shopping-cart';
import { Button } from '@/components/ui/button';
import { ICartProduct } from './interfaces';
import { urlFor } from '@/lib/sanity';

export default function AddToCart({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ICartProduct) {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };

  const onClick = () => {
    addItem(product);
    handleCartClick();
  };

  return <Button onClick={onClick}>Add To Cart</Button>;
}
