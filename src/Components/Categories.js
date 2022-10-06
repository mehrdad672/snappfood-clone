import CategoriItem from "./CategoriItem";
import irani from "../Assets/Categories/website_image_irani_1.jpg" 
import fastfood from "../Assets/Categories/website_image_fastfood_1.jpg"
import asian from "../Assets/Categories/website_image_asian_1.jpg"
import burger from "../Assets/Categories/website_image_burger_1.jpg"
import gilani from "../Assets/Categories/website_image_gilani_1.jpg"
import italy from "../Assets/Categories/website_image_italy_1.jpg"
import kebab from "../Assets/Categories/website_image_kebab_1.jpg"
import pizza from "../Assets/Categories/website_image_pizza_1.jpg"
import salad from "../Assets/Categories/website_image_salad_1.jpg"
import sandwich from "../Assets/Categories/website_image_sandwich_1.jpg"
import seafood from "../Assets/Categories/website_image_seafood_1.jpg"
import sokhari from "../Assets/Categories/website_image_sokhari_1.jpg"

const Categories = () => {
  const Items = [
    {
      image: irani,
      tag: "ایرانی",
    },
    {
      image: fastfood,
      tag: "فست فود",
    },
    {
      image: asian,
      tag: "آسیایی",
    },
    {
      image: burger,
      tag: "برگر",
    },
    {
      image: gilani,
      tag: "گیلانی",
    },
    {
      image: italy,
      tag: "پاستا",
    },
    {
      image: kebab,
      tag: "کباب",
    },
    {
      image: pizza,
      tag: "پیتزا",
    },
    {
      image: salad,
      tag: "سالاد",
    },
    {
      image: sandwich,
      tag: "ساندویچ",
    },
    {
      image: seafood,
      tag: "دریایی",
    },
    {
      image: sokhari,
      tag: "سوخاری",
    },
  ];
  const categorilist= Items.map(item => <CategoriItem imgurl={item.image} imgtag={item.tag} />);
  return (
    <>
      <div className="px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 space-x-1 mt-24 mb-20 max-w-full">
        {categorilist}
      </div>
    </>
  );
};

export default Categories;
