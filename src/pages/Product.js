import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../components/loader";
import Filter from "./Filter";
import FilterProductContext from "../context/FilterProductContext";
import CartContext from "../context/CartContext";

function Product(props) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, updateProduct] = useState([]);
  const {
    selectedPriceRange,
    handlePriceRangeChange,
    selectedRatingRange,
    handleRatingRangeChange,
    selectPriceSort,
    handlePriceSort,
  } = useContext(FilterProductContext);
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);
  const [hastofetchmore, sethastofetchmore] = useState(true);
  const [skip, setskip] = useState(0);

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
    axios
      .get(`https://dummyjson.com/${props.url}?limit=6&skip=0`)
      .then((res) => {
        setProducts(res.data.products);
        sethastofetchmore(res.data.total - products.length - 6 > 0);
        handlePriceSort("none");
        handlePriceRangeChange("0-20000");
        handleRatingRangeChange("0-5");
      });
  }, [props.url]);
  useEffect(() => {
    const fetchdata = () => {
      axios
        .get(`https://dummyjson.com/${props.url}?limit=6&skip=${skip}`)
        .then((res) => {
          setProducts(products.concat(res.data.products));
          sethastofetchmore(res.data.total - products.length - 6 > 0);
          handlePriceSort("none");
          handlePriceRangeChange("0-20000");
          handleRatingRangeChange("0-5");
        });
    };
    fetchdata();
  }, [skip]);
  document.title = `ShopSmart${props.title ? props.title : ""}`;
  const fetchmore = () => {
    setskip(skip + 6);
  };
  return (
    <>
      <div className="product">
        <Filter />
        <InfiniteScroll
          className="InfiniteScroll"
          dataLength={products.length}
          next={fetchmore}
          hasMore={hastofetchmore}
          loader={<Loader />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <section className="carditems">
            {filteredProducts.map((item) => {
              return (
                <>
                  <div className="card" key={item.thumbnail + item.id}>
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
        </InfiniteScroll>
      </div>
    </>
  );
}

export default Product;
