import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/loader";

function Searchbar(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchdata = () => {
      axios
        .get(`https://dummyjson.com/products/search?q=${props.url}`)
        .then((res) => {
          setProducts(res.data.products);
        });
    };
    fetchdata();
  });
  return (
    <>
      <div className="product">
        <section className="filter">hbj</section>
        {products.length == 0 ? (
          <Loader />
        ) : (
          <>
            {" "}
            <section className="carditems">
              {products.map((item) => {
                return (
                  <>
                    <div className="card">
                      <div className="image">
                        <img src={item.thumbnail} alt="loading" />
                      </div>
                      <div className="description">
                        <h2>
                          {item.title.length > 20
                            ? item.title.substr(0, 20) + "..."
                            : item.title}
                        </h2>
                        <h1>${item.price}</h1>
                        <p>
                          {item.description.length > 50
                            ? item.description.substr(0, 50) + "..."
                            : item.description}
                        </p>
                        <div className="button">
                          <button>Add to Cart</button>
                          <button>Wishlist</button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </section>
          </>
        )}
      </div>
    </>
  );
}

export default Searchbar;
