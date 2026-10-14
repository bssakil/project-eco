import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

function Home() {

  const products = [
    {
      id: 1,
      name: "Smart Watch",
      price: 50,
      image: "https://picsum.photos/300/200?1"
    },
    {
      id: 2,
      name: "Head Phone",
      price: 35,
      image: "https://picsum.photos/300/200?2"
    },
    {
      id: 3,
      name: "Laptop",
      price: 500,
      image: "https://picsum.photos/300/200?3"
    }
  ];

  return (

    <>
      <Navbar />

      <Hero />

      <section className="products">

        <h2>Featured Products</h2>

        <div className="product-grid">

          {products.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </section>

    </>

  );
}

export default Home;