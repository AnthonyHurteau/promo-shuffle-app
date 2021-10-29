module.exports = {
  getCardProps,
};

const imageAmmount = 10;

const promos = [
  { title: "Promo1", description: "This is a test that describes promo1." },
  { title: "Promo2", description: "This is a test that describes promo2." },
  { title: "Promo3", description: "This is a test that describes promo3." },
  { title: "Promo4", description: "This is a test that describes promo4." },
  { title: "Promo5", description: "This is a test that describes promo5." },
  { title: "Promo6", description: "This is a test that describes promo6." },
  { title: "Promo7", description: "This is a test that describes promo7." },
  { title: "Promo8", description: "This is a test that describes promo8." },
];

function getCardProps() {
  const imageNumberArray = getImagePathNumber();

  promos.forEach(
    (p, i) => (p.image = `images/image${imageNumberArray[i]}.jpg`)
  );

  return promos;
}

function getImagePathNumber() {
  const imageNumberArray = Array(imageAmmount)
    .fill()
    .map((_, index) => index + 1);
  return imageNumberArray.sort(() => Math.random() - 0.5);
}
