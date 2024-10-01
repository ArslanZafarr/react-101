import { useEffect } from "react";
import { useGetProductsQuery } from "../../../redux/api/public/publicApi"
import ProductCard from "../ProductCard/ProductCard"
import "./productsList.css"

const ProductList = () => {
    const { data, isLoading, } = useGetProductsQuery();

    useEffect(() => {
        return () => {
            console.log("Cleaning up...");
        };
    }, []);

    if (isLoading) {
        return (
            <>
                <h1>Loading..</h1>
            </>
        );
    }

    return (
        <section>
            <div className="container">
                <div className="product-list">
                    {
                        data?.products?.map((product) => {
                            return <ProductCard key={product.id} data={product} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default ProductList;
