import React from "react";
import { motion } from "framer-motion";
import certificates from "./certificatesData";
import "../styles/certificates.css";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: (i) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: i * 0.08,
      duration: 0.5,
    },
  }),
};

export default function CertificatesGrid() {
  return (
  <div className="certificates-page">

<div className="certificates-container">

{certificates.map((item)=>(

<div
key={item.id}
className="certificate-card"
>

<div className="certificate-preview">

<iframe
title={item.title}
src={item.file}
/>

</div>

<div className="certificate-info">

<h3 className="certificate-title">
{item.title}
</h3>

<a
href={item.file}
target="_blank"
rel="noreferrer"
>

<button className="certificate-btn">
VIEW CERTIFICATE
</button>

</a>

</div>

</div>

))}

</div>

</div>
  );
}