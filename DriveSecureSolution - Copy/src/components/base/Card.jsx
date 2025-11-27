import React, { Children } from "react";

const Card = ({ children }) => {
  return (
    <section className=" w-full bg-light py-5 flex justify-center">
      <div className="w-full max-w-6xl bg-[#00000012] rounded-2xl shadow-xl border border-muted">
        {children}
      </div>
    </section>
  );
};

export default Card;
