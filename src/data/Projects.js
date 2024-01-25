import pokemonimg from "../assets/img/projImages/pokemonimg.png";
import todoimg from "../assets/img/projImages/todoimg.jpg";
import sneakersimg from "../assets/img/projImages/sneakersimg.jpg";

const projects = [
  {
    id: 1,
    category: "React",
    image: todoimg,
    link1: "https://to-do-list-project-two.vercel.app/",
    title: "To do list",
    text: "Created with React",
  },
  {
    id: 2,
    category: "React",
    image: pokemonimg,
    link1: "https://using-pokemon-api.vercel.app/",
    title: "Pokedex consuming API",
    text: "Created with React",
  },
  {
    id: 3,
    category: "Next",
    image: sneakersimg,
    link1: "https://sneakers-e-commerce-dusky.vercel.app/",
    title: "Sneakers Landing Page",
    text: "Created with Next",
  },
];

export default projects;
