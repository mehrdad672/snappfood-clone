import CategoriItem from "./CategoriItem";
const Categories = () => {
  const Items = [
    {
      image: "../Assets/Categories/website_image_irani_1.jpg",
      tag: "ایرانی",
    },
    {
      image: "../Assets/Categories/website_image_fastfood_1.jpg",
      tag: "فست فود",
    },
    {
      image: "../Assets/Categories/website_image_asian_1.jpg",
      tag: "آسیایی",
    },
    {
      image: "../Assets/Categories/website_image_burger_1.jpg",
      tag: "برگر",
    },
    {
      image: "../Assets/Categories/website_image_gilani_1.jpg",
      tag: "گیلانی",
    },
    {
      image: "../Assets/Categories/website_image_italy_1.jpg",
      tag: "پاستا",
    },
    {
      image: "../Assets/Categories/website_image_kebab_1.jpg",
      tag: "کباب",
    },
    {
      image: "../Assets/Categories/website_image_pizza_1.jpg",
      tag: "پیتزا",
    },
    {
      image: "../Assets/Categories/website_image_salad_1.jpg",
      tag: "سالاد",
    },
    {
      image: "../Assets/Categories/website_image_sandwich_1.jpg",
      tag: "ساندویچ",
    },
    {
      image: "../Assets/Categories/website_image_seafood_1.jpg",
      tag: "دریایی",
    },
    {
      image: "../Assets/Categories/website_image_sokhari_1.jpg",
      tag: "سوخاری",
    },
  ];
  return (
    <>
      <div className=" grid grid-cols-6 space-x-1 mt-96 max-w-full">
        <CategoriItem />
        <CategoriItem />
        <CategoriItem />
        <CategoriItem />
        <CategoriItem />
        <CategoriItem />
      </div>
    </>
  );
};

export default Categories;
