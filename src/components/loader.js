import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function loader() {
  const arr = [1, 2, 3, 4, 5,6];
  return (
    
      <SkeletonTheme>
        <section className="carditems">
        {arr.map((e) => {
          return(<div className="card" key={e}>
            <Skeleton className="image">
              <img src="" alt="loading" />
            </Skeleton>
            <div className="description">
              <h2>
                <Skeleton></Skeleton>
              </h2>
              <h1>
                <Skeleton></Skeleton>
              </h1>
              <p>
                <Skeleton></Skeleton>
              </p>
              <div className="button">
                <button>
                  <Skeleton></Skeleton>
                </button>
                <button>
                  <Skeleton></Skeleton>
                </button>
              </div>
            </div>
          </div>);
        })}
          </section>
      </SkeletonTheme>
  
  );
}

export default loader;
