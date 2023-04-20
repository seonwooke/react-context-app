import React from 'react';

const Products = ({ name, imagePath }) => {
    return (
        <div style={{ textAlign: "center" }}>
            <img
                style={{ width: "75%" }}
                src={`http://localhost:4000/${imagePath}`}
                alt={`${name} product`}
            />
            <form style={{ marginTop: "10px" }}>
                <labe style={{ textAlign: "right" }}>{name}</labe>
                <input
                    style={{ marginLeft: "7px" }}
                    type="number"
                    name="quantity"
                    min="0"
                    defaultValue={0}
                />
            </form>
        </div>
    )
}

export default Products;