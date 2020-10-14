import React, { useState, useEffect } from 'react';

export default function PageHome(props) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // Update the document title using the browser API
        console.log(12345);
        fetch('/api/products')
            .then((response) => response.json())
            .then((data) => setProducts(data));
    });
    return (
        <React.Fragment>
            <h1> интернет магазин </h1>

            <div>
                {products.map((el) => {
                    return (
                        <div>
                            Status: {el.status}, Id: {el._id}
                        </div>
                    );
                })}
            </div>
        </React.Fragment>
    );
}
