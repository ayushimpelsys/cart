import React, { useState } from "react";
import "./custom.css";
const _defaultCosts = [
  {
    name: "",
    quantity: "",  
    price: "",
  },
];

const Custom = () => {
  const [costs, setCosts] = useState(_defaultCosts);

  const handleCostsChange = (event) => {
    const _tempCosts = [...costs];
    _tempCosts[event.target.dataset.id][event.target.name] = event.target.value;

    setCosts(_tempCosts);
  };

  const addNewCost = () => {
    setCosts((prevCosts) => [...prevCosts, { name: "", price: 0 }]);
  };

  const getTotalCosts = () => {
    return costs.reduce((total, item) => {
      return total + Number(item.quantity)*Number(item.price);
    }, 0);
  };

  let removeFormFields = (event) => {
    let newFormValues = [...costs];
    newFormValues.splice(event, 1);
    setCosts(newFormValues);
  };

  return (
    <div className="inp">
      <form>
        {costs.map((item, index) => (
          <div className="form-inline" key={index}>
            <label>Brand name</label>
            <input
              name="name"
              data-id={index}
              type="text"
              value={item.name}
              onChange={handleCostsChange}
            />
            <label>Quantity</label>
            <input
              name="quantity"
              data-id={index}
              type="text"
              value={item.quantity}
              onChange={handleCostsChange}
            />
            <label>Price</label>
            <input
              name="price"
              data-id={index}
              type="number"
              value={item.price}
              onChange={handleCostsChange}
            />

            {index ? (
              <button
                type="button"
                className="button remove"
                onClick={() => removeFormFields(index)}
              >
                Remove
              </button>
            ) : null}
          </div>
        ))}
        <div className="button-section">
          <button className="button add" type="button" onClick={addNewCost}>
            Add More
          </button>
          <button className="button" type="submit">
            Clear
          </button>
        </div>
        <div className="ttl">
          <span>Total Price of your Cart: </span>
          <span> {getTotalCosts()}₹</span>
        </div>
      </form>
    </div>
  );
};

export default Custom;