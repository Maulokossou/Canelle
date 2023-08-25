import {ref}from 'vue'
import image1 from "@/assets/images/santé2.png";
import image2 from "@/assets/images/loisirs2.jpeg";
import image3 from "@/assets/images/logement2.jpg";
import image4 from "@/assets/images/cafe.webp";
import image5 from "@/assets/images/cadeau2.avif";
import image6 from "@/assets/images/course2.jpeg";
import image7 from "@/assets/images/education2.avif";
import image8 from "@/assets/images/transport2.jpeg";

export const categories_users = ref([
    {
      image: image1,
     name: "santé",
    },
    {
      image: image2,
  
      name: "loisirs",
    },
  
    {
      image: image3,
     name: "maison",
    },
    {
      image: image4,
     name: "café",
    },
    {
      image: image5,
     name: "cadeaux",
    },
    {
      image: image6,
     name: "courses",
    },
    {
      image: image7,
     name: "education",
    },
    {
      image: image8,
     name: "transport",
    }
  ]
  )