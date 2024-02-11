import { Dispatch, SetStateAction } from "react";


export interface SelectQuantityProps {
  setQuantity: Dispatch<SetStateAction<number>>
}

export const SelectQuantity = (props: SelectQuantityProps) => {
  const { setQuantity } = props

const quantityOptions = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <select 
      className="select w-20"
      onChange={(e) => setQuantity(parseInt(e.target.value))}
    >
      {quantityOptions.map(q => <option>{q}</option>)}
    </select>
  );
};
