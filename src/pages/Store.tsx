import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";

export function Store() {
  return (
    <div>
      <h1>Store</h1>
      <div className="row">
        {storeItems.map((item) => (
          <div className="col">
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
