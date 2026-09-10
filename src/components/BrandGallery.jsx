const images = [
  ["autora-brands.webp","Japanese brands, one destination."],
  ["autora-brand.webp","A name to keep you moving."],
  ["autora-sign.webp","Find us in Kesbewa."],
  ["autora-contact.webp","Let’s talk truck parts."]
];
export default function BrandGallery() {
  return <section className="brand-gallery"><p className="section-kicker">THIS IS AUTORA</p><h2>Our identity. Your next stop.</h2><div>{images.map(([image,caption])=><figure key={image}><a href={"/images/"+image} target="_blank" rel="noreferrer"><img src={"/images/"+image} alt={caption} loading="lazy"/></a><figcaption>{caption}</figcaption></figure>)}</div></section>;
}
