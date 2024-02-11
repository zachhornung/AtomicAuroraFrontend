import { useState } from 'react';
import { ProductType } from '../state/services/productsApi';
import { Picture } from '../../../state/services/picturesApi';

type ProductCardProps = {
  product: ProductType;
};

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const { product } = props
  const [selectedPicture, setSelectedPicture] = useState(product.pictures?.[0]);

  const openModal = (picture: Picture) => {
    setSelectedPicture(picture);
  };

  const closeModal = () => {
    setSelectedPicture(undefined);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg">
      <div className="relative">
        <div className="carousel">
          {product.pictures?.map((picture, index) => (
            <img
              key={index}
              src={picture.picture}
              alt={picture.description}
              className="w-full cursor-pointer"
              onClick={() => openModal(picture)}
            />
          ))}
        </div>
        {selectedPicture && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
            <div className="relative max-w-full max-h-full">
              <img
                src={selectedPicture.picture}
                alt={selectedPicture.description}
                className="max-w-full max-h-full"
              />
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white hover:text-gray-300 focus:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
