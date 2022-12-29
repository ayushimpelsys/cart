import React, { useState } from "react";

function StudentForm(props) {
  const [productname, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const changePrice = (event) => {
    


    setPrice(event.target.value);
  };
  

  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      productname,
      quantity,
      price
    };
    props.func(val);
    clearState();
  };

  const clearState = () => {
    setName("");
    setQuantity("");
    setPrice("");
  };
  
  

  return (
    <div>
      <br />
      <div className="form">
      <label>Product Name</label>&nbsp; &nbsp;
      <input type="text" value={productname} onChange={changeName} />
      &nbsp; &nbsp;
      <label>Quantity</label>&nbsp; &nbsp;
      <input type="text" value={quantity} onChange={changeQuantity} />
      &nbsp; &nbsp;
      <label>Price</label>&nbsp; &nbsp;
      <input type="text" value={price} onChange={changePrice} />
      &nbsp; &nbsp;
      <button onClick={transferValue}> Add To Cart</button>
      <br />
      <br />
      <button  >Total Price </button>
      <br />
      </div>
      
      
      
    </div>
  );
}

export default StudentForm;
