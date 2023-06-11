import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/loader";
import SearchContext from "../context/SearchContext";
import Filter from "./Filter";
import FilterProductContext from "../context/FilterProductContext";

function Searchbar(props) {
  const [products, setProducts] = useState([]);
  const { updateQuery } = useContext(SearchContext);
  const [filteredProducts, updateProduct] = useState([]);
  const {
    selectedPriceRange,
    selectedRatingRange,
    selectPriceSort,
    handlePriceSort,
  } = useContext(FilterProductContext);

  const savequery = localStorage.getItem("query");
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
    if (savequery) {
      updateQuery(savequery);
    }
    const fetchdata = () => {
      axios
        .get(`https://dummyjson.com/products/search?q=${savequery}`)
        .then((res) => {
          setProducts(res.data.products);
        });
    };
    fetchdata();
  }, []);
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
