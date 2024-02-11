import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SparkleEffect } from "../../../shared/components/SparkleEffect";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { AnimatedModal } from "../../../shared/components/AnimatedModal";
import { CartComponent } from "./CartComponent";
import { AppState, useAppSelector } from "../../../state/store";
import { useState } from "react";

export const CartNavComponent = () => {
  const { products } = useAppSelector((state: AppState) => state.cart);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <li
        className="hover:cursor-pointer"
        onClick={toggleModal}
      >
        <SparkleEffect />
        <FontAwesomeIcon icon={faCartPlus} />
        {products.length}
      </li>
      <AnimatedModal
        isOpen={isOpen}
        onRequestClose={toggleModal}
      >
        <CartComponent />
      </AnimatedModal>
    </>
  );
};
