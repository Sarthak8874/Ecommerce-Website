import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/loader";
import Filter from "./Filter";
import FilterProductContext from "../context/FilterProductContext";
import SearchContext from "../context/SearchContext";
import CartContext from "../context/CartContext";

function Searchbar() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, updateProduct] = useState([]);
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);
  const { query } = useContext(SearchContext);
  const {
    selectedPriceRange,
    selectedRatingRange,
    selectPriceSort,
    handlePriceSort,
  } = useContext(FilterProductContext);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const [minPrice, maxPrice] = selectedPriceRange.split("-");
      const [minRating, maxRating] = selectedRatingRange.split("-");
      return (
        product.price >= Number(minPrice) &&
        product.price <= Number(maxPrice) &&
        product.rating >= Number(minRating) &&
        product.rating <= Number(maxRating)
      );
    });
    handlePriceSort("none");
    updateProduct(filtered);
  }, [products, selectedPriceRange, selectedRatingRange]);

  useEffect(() => {
    if (selectPriceSort === "incr") {
      updateProduct([...filteredProducts].sort((a, b) => a.price - b.price));
    }
    if (selectPriceSort === "decr") {
      updateProduct([...filteredProducts].sort((a, b) => b.price - a.price));
    }
  }, [selectPriceSort]);
  useEffect(() => {
    const fetchdata = () => {
      axios
        .get(`https://dummyjson.com/products/search?q=${query}`)
        .then((res) => {
          setProducts(res.data.products);
        });
    };
    fetchdata();
  }, [query]);
  return (
    <>
      <div className="product">
        <Filter />
        {products.length === 0 ? (
          <section className="InfiniteScroll">
            <Loader />
          </section>
        ) : (
          <>
            {" "}
            <section className="carditems InfiniteScroll">
              {filteredProducts.map((item) => {
                return (
                  <>
                    <div className="card" key={item.id}>
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
                        <div className="button flex justify-center">
                          {cart.some((c) => c.id === item.id) ? (
                            <button
                              className="w-auto addremovebutton"
                              onClick={() => {
                                dispatch({ type: "REMOVE", payload: item });
                              }}
                            >
                              Remove From Cart
                            </button>
                          ) : (
                            <button
                              className="w-auto addremovebutton "
                              onClick={() => {
                                dispatch({ type: "ADD", payload: item });
                              }}
                            >
                              Add to Cart
                            </button>
                          )}
                          {/* <button>Wishlist</button> */}
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
