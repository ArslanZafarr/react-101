
// import PropTypes from 'prop-types';
// import "./productCard.css"

// const ProductCard = ({ data }) => {

//     return (
//         <div className="product-card">
//             <div className="product-card-top">
//                 <img
//                     className="product-card-image"
//                     src={data?.featured_image || ""}
//                     alt={data?.title || "Product"}
//                 />
//             </div>
//             <div className="product-card-body">
//                 <h4 className="product-card-title">{data?.title || "Title"}</h4>
//                 <p className="product-price">{data?.price ? `Rs ${data.price}` : "Price"}</p>
//             </div>
//         </div>
//     )
// }


// ProductCard.propTypes = {
//     data: PropTypes.shape({
//         featured_image: PropTypes.string,
//         title: PropTypes.string,
//         price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     }).isRequired,
// };

// export default ProductCard;


import PropTypes from 'prop-types';
import LazyImage from './LazyImage'; // Import the LazyImage component
import "./productCard.css";

const ProductCard = ({ data }) => {
    return (
        <div className="product-card">
            <div className="product-card-top">
                <LazyImage
                    className="product-card-image"
                    src={data?.featured_image || ""}
                    alt={data?.title || "Product"}
                />
            </div>
            <div className="product-card-body">
                <h4 className="product-card-title">{data?.title || "Title"}</h4>
                <p className="product-price">{data?.price ? `Rs ${data.price}` : "Price"}</p>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    data: PropTypes.shape({
        featured_image: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }).isRequired,
};

export default ProductCard;
