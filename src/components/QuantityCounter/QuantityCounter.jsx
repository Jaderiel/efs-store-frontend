import { useState } from "react";

const QuantityCounter = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col space-y-2">
      <p className=" font-medium">Quantity</p>
      <div className="flex items-center space-x-4 p-2 rounded-lg">
        <button
          onClick={decreaseQuantity}
          className="bg-black text-white px-3 py-1 rounded-md hover:bg-zinc-600 cursor-pointer"
        >
          −
        </button>
        <span className="text-lg font-semibold">{quantity}</span>
        <button
          onClick={increaseQuantity}
          className="bg-black text-white px-3 py-1 rounded-md hover:bg-zinc-600 cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantityCounter;
