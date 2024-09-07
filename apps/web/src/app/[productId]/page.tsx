import React from "react";

export default function page({ params }: { params: { productId: string } }) {
  return (
    <div className="container">
      <span className="font-semibold">Product slug is:</span>{" "}
      {decodeURI(params.productId)}
    </div>
  );
}
