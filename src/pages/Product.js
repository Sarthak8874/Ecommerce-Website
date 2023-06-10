import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../components/loader";

function Product(props) {
  const [products, setProducts] = useState([]);
  const [hastofetchmore, sethastofetchmore] = useState(true);
  const [skip, setskip] = useState(0);
  const fetchmore = () => {
    setskip(skip + 6);
  };
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
  return (
    <>
      <div className="product">
        <section className="filter">hbj</section>
        <InfiniteScroll
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
        </InfiniteScroll>
      </div>
    </>
  );
}

export default Product;
