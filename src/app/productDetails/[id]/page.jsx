"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/hooks";
import { addToCart } from "@/lib/slices/cartSlice";

function page() {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [singleProduct, setSingleProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((result) => setSingleProduct(result))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div>single product is loading...</div>;
  }

  if (error) {
    return <div>მოხდა შეცდომა!!!</div>;
  }

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (result.id) {
        router.push("/");
      }
    } catch (error) {
      console.error("error", error);
      alert("მოხდა შეცდომა!");
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart(singleProduct));
  };

  return (
    <div>
      <h2>{singleProduct.title}</h2>
      <p>{singleProduct.description}</p>
      <button onClick={handleDelete}>delete</button>
      <button onClick={handleAddToCart}>add to cart</button>
    </div>
  );
}

export default page;
