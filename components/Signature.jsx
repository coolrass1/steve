import Image from "next/image";
import React from "react";

const Signature = () => {
  return (
    <div className="text-sm flex justify-center items-center min-h-0">
      {" "}
      <Image
        src="/images/signature.jpeg"
        alt="Garnet"
        width={200}
        height={200}
        priority
        objectFit="cover"
      />
    </div>
  );
};

export default Signature;
