"use client";

import { useAppSelector } from "@/lib/hooks";
import styles from "./page.module.css";
import Image from "next/image";
import { addToCart, decreaseQuantity } from "@/lib/slices/cartSlice";
import { useAppDispatch } from "@/lib/hooks";

function page() {
  const cartProducts = useAppSelector((state) => state.cart.cartProducts);
  const dispatch = useAppDispatch();

  const handleIncrease = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrease = (item) => {
    dispatch(decreaseQuantity(item));
  };
  return (
    <main className={styles.main}>
      {cartProducts?.map((item) => (
        <div key={item.id}>
          <Image
            src={item.image}
            width={100}
            height={80}
            objectFit="contain"
            alt="random"
          />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <button onClick={() => handleIncrease(item)}>plus 1</button>
          <p>quantity {item.quantity}</p>
          <button onClick={() => handleDecrease(item)}>minus 1</button>
          <hr />
        </div>
      ))}
    </main>
  );
}

export default page;
