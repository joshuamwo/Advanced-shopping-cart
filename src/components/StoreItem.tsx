import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const quantity = 9;
  return (
    <div className="flex flex-col max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img src={imgUrl} className={"object-cover h-52 w-full"} />
      <div className="px-2 py-4 flex flex-row justify-between items-baseline ">
        <span className="font-bold text-gray-700 text-xl">{name}</span>
        <span className="text-gray-700 text-base">
          Ksh {formatCurrency(price)}
        </span>
      </div>
      <div className="mx-auto mb-2 pb-4 block">
        {quantity === 0 ? (
          <button className="border-gray-700 ring-1 ring-gray-400 pt-1 pb-2 px-8 rounded-md hover:bg-blue-600 hover:text-white ">
            + Add To Cart
          </button>
        ) : (
          <div className="flex flex-col space-y-2">
            <div className="flex items-center flex-row space-x-3">
              <button className="border-gray-700 ring-1 ring-gray-400 pb-1 font-bold px-3 rounded-md hover:bg-blue-600 hover:text-white">
                {" "}
                -{" "}
              </button>

              <span className="text-gray-700 text-base ">
                {quantity} in cart
              </span>

              <button className="border-gray-700 ring-1 ring-gray-400 pb-1 px-3 rounded-md hover:bg-blue-600 hover:text-white">
                {" "}
                +{" "}
              </button>
            </div>

            <button className="bg-red-700 rounded pb-1">Remove</button>
          </div>
        )}
      </div>
    </div>
  );
}
