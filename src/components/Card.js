import React from "react";

function Card({ name, email, id }) {
  const imgUrl = `https://robohash.org/${id}?size=200x200`;
  return (
    <div className="bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={imgUrl} alt="robot" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
