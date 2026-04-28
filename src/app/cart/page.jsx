import Link from "next/link";
function page() {
  return (
    <div>
      this is cart page
      <Link href="/cart/cartDetals">Go to cart details</Link>
    </div>
  );
}

export default page;
