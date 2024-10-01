import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const LazyImage = ({ src, alt, className }) => {
    const [isVisible, setIsVisible] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '0px',
                threshold: 0.1,
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, []);

    return (
        <div ref={imgRef} className={className}>
            {isVisible ? <img src={src} alt={alt} className={className} /> : <div className="placeholder">Loading...</div>}
        </div>
    );
};

LazyImage.propTypes = {
    src: PropTypes.string.isRequired, // Mark src as required
    alt: PropTypes.string,
    className: PropTypes.string,
};

export default LazyImage;
