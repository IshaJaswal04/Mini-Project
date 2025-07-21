import React from 'react';
import './ProductType.css';

const products = [
  {
    label: 'Printers',
    img: process.env.PUBLIC_URL + '/images/L6270_SPT_C11CJ61301_support_home_hub_384x256 (1).png',
    alt: 'Epson Printer',
  },
  {
    label: 'Projectors',
    img: process.env.PUBLIC_URL + '/images/L735U_SPT_V11HA25120_support_home_hub_s310_384x256_v2.png',
    alt: 'Epson Projector',
  },
  {
    label: 'Scanners',
    img: process.env.PUBLIC_URL + '/images/WorkForce_ES-580W_SPT_B11B258201_support_home_hub_s200_384x256.png',
    alt: 'Epson Scanner',
  },
  {
    label: 'Point of Sale',
    img: process.env.PUBLIC_URL + '/images/support-pos-mobile-2-tile.png',
    alt: 'Epson Point of Sale',
  },
  {
    label: 'Robots',
    img: process.env.PUBLIC_URL + '/images/support-home-robots-s6-6-axis-rc3-a601st1-tile-home.png',
    alt: 'Epson Robot',
  },
  {
    label: 'Wearables',
    img: process.env.PUBLIC_URL + '/images/Support-Home-Wearables-Product-Type.png',
    alt: 'Epson Wearables',
  },
  {
    label: 'Other Products',
    img: process.env.PUBLIC_URL + '/images/support-printer-disc-producer-pp100-tile.png',
    alt: 'Epson Other Products',
  },
];

const ProductType = () => (
  <div className="product-type-container">
    <h2>Or Product Type</h2>
    <div className="product-type-grid">
      {products.map((product, idx) => (
        <div className="product-type-item" key={product.label}>
          <img src={product.img} alt={product.alt} className="product-type-image" />
          <div className="product-type-label">{product.label}</div>
        </div>
      ))}
    </div>
  </div>
);

export default ProductType; 