import { PictureGrid } from "../../../shared/components/Pictures/PictureGrid";
import { ProductType } from "../../../state/services/productsApi";

type ProductProps = {
  product: ProductType;
};

export const Product = (props: ProductProps) => {
  const { product } = props;

  return <ProductCard product={product}/>
};

type ProductCardProps = {
  product: ProductType
}
export const ProductCard = (props: ProductCardProps) => {
  const { product } = props;

  return (
    <div className="w-1/4 p-4 m-5 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center items-center">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          {product.name}
        </h5>
        <div className="mx-4" />
      </div>
      <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
        {product.description}
      </p>
      <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        {product.pictures?.length
          ? <PictureGrid pictures={product.pictures} />
          : null}
      </div>
    </div>
  );
};
