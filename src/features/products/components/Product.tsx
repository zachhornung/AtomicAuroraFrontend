import { ProductType } from "../state/services/productsApi";
import { PictureCarousel } from "../../../shared/components/Pictures/PictureCarousel";
import { SelectSize } from "../../../shared/components/select/Sizes";
import { ChangeEvent, useState } from "react";
import { Sizes } from "../../../shared/constants";
import { SelectQuantity } from "../../../shared/components/select/Quantity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../../../state/store";
import { addItemToCart } from "../../cart/state/cart";

type ProductProps = {
  product: ProductType;
};

export const Product = (props: ProductProps) => {
  const { product } = props;

  return <ProductCard product={product} />;
};

type ProductCardProps = {
  product: ProductType;
};
export const ProductCard = (props: ProductCardProps) => {
  const { product } = props;
  const dispatch = useAppDispatch()
  const [size, setSize] = useState<Sizes>()
  const [quantity, setQuantity] = useState(1)
  console.log("size: ", size)

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSize(event.target.value as Sizes)
  }

  const handleAddToCart = () => {
    dispatch(addItemToCart({ id: product.id, quantity }))
  }

  return (
    <div className="p-1 m-1 card">
      {product.pictures?.length
        ? <PictureCarousel pictures={product.pictures} />
        : null}
      <p>{<FontAwesomeIcon icon={faDollarSign} />}{product.price.toFixed(2)}</p>
      <div className="card-body">
        <h2 className="card-header">{product.name}</h2>
        <p className="text-content2">
          {product.description}
        </p>
        <div className="card-footer">
          <button 
            className="btn-secondary btn mr-1"
            onClick={handleAddToCart}
          >
            <FontAwesomeIcon 
              icon={faCartPlus}
            />
          </button>
          <SelectSize handleOptionChange={handleOptionChange} />
          <SelectQuantity setQuantity={setQuantity} />
        </div>
      </div>
    </div>
  );
};
