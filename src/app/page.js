"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      setProducts(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div>content is loading...</div>;
  }

  if (error) {
    return <div>something went wrong!</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>პროდუქტები</h1>

      <div className={styles.productList}>
        {products.map((item) => (
          <div
            className={styles.card}
            key={item.id}
            onClick={() => router.push(`/productDetails/${item.id}`)}
          >
            <Image
              src={item.image}
              width={50}
              height={50}
              alt="Picture of the author"
            />
            <h2 className={styles.cardTitle}>{item.title}</h2>
            <p className={styles.cardDescription}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
