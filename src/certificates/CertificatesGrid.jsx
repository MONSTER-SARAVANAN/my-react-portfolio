import React from "react";
import certificates from "./certificatesData";
import "../styles/certificates.css";


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