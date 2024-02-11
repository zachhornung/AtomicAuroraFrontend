import { FormEventHandler } from "react";
import { Sizes } from "../../constants";


export interface SelectSizeProps {
  handleOptionChange: FormEventHandler<HTMLSelectElement>;
}

export const SelectSize = (props: SelectSizeProps) => {
  const { handleOptionChange } = props
  return (
    <select 
      className="select"
      onChange={handleOptionChange}
    >
      {Object.entries(Sizes).map(([displayVal, val]) => (
        <option 
          value={val}
        >
          {displayVal}
        </option>
      ))}
    </select>
  );
};
