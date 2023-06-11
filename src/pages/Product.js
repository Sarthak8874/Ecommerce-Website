import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../components/loader";
import Filter from "./Filter";

function Product(props) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState("0-20000");
  const [selectedRatingRange, setSelectedRatingRange] = useState("0-5");
  const [selectPriceSort, setselectPriceSort] = useState("");
  const [hastofetchmore, sethastofetchmore] = useState(true);
  const [skip, setskip] = useState(0);


  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => {
        const [minPrice, maxPrice] = selectedPriceRange.split("-");
        const [minRating, maxRating] = selectedRatingRange.split("-");
        return (
          product.price >= Number(minPrice) &&
          product.price <= Number(maxPrice) &&
          product.rating >= Number(minRating) &&
          product.rating <= Number(maxRating)
        );
      })
    );
  }, [products, selectedPriceRange, selectedRatingRange]);
  
  useEffect(() => {
    if (selectPriceSort === "incr") {
      setFilteredProducts(
        [...filteredProducts].sort((a, b) => a.price - b.price)
      );
    }
    if (selectPriceSort === "decr") {
      setFilteredProducts(
        [...filteredProducts].sort((a, b) => b.price - a.price)
      );
    }
  }, [selectPriceSort]);
  useEffect(() => {
    const fetchdata = () => {
      axios
        .get(`https://dummyjson.com/${props.url}?limit=6&skip=${skip}`)
        .then((res) => {
          setProducts(products.concat(res.data.products));
          sethastofetchmore(res.data.total - products.length - 6 > 0);
        });
    };
    fetchdata();
  }, [skip]);

  const fetchmore = () => {
    setskip(skip + 6);
  };

  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  const handleRatingRangeChange = (event) => {
    setSelectedRatingRange(event.target.value);
  };

  const handlePriceSort = (event) => {
    setselectPriceSort(event.target.value);
  };

  return (
    <>
      <div className="product">
        <section className="filter">
          <h3 className="text-center">Filter</h3>
          <div className="filter-container">
            <div className="filter-section mt-6 mb-6">
              <h4 className="font-bold mt-2 mb-2">Price Range</h4>
              <select
                className="price-range-select"
                value={selectedPriceRange}
                onChange={handlePriceRangeChange}
              >
                <option value="0-20000">All</option>
                <option value="0-250">0 - 250</option>
                <option value="250-500">250 - 500</option>
                <option value="500-20000">500+</option>
                {/* Add more price range options as needed */}
              </select>
            </div>
            <div className="filter-section mt-6 mb-6">
              <h4 className="font-bold mt-2 mb-2">Rating</h4>
              <select
                className="price-range-select"
                value={selectedRatingRange}
                onChange={handleRatingRangeChange}
              >
                <option value="0-5">All</option>
                <option value="0-1">0-1</option>
                <option value="1-2">1-2</option>
                <option value="2-3">2-3</option>
                <option value="3-4">3-4</option>
                <option value="4-5">4+</option>
                {/* Add more price range options as needed */}
              </select>
            </div>
            <div className="filter-section mt-6 mb-6">
              <h4 className="font-bold mt-2 mb-2">Price</h4>
              <select
                className="price-range-select"
                value={selectPriceSort}
                onChange={handlePriceSort}
              >
                <option value="">None</option>
                <option value="incr">Increase</option>
                <option value="decr">Decrease</option>
              </select>
            </div>
          </div>
        </section>

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
                      <div className="button flex justify-center">
                        <button>Add to Cart</button>
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
