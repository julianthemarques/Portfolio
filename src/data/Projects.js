import pokemonimg from "../img/projImages/pokemonimg.png";
import todoimg from "../img/projImages/todoimg.jpg";
import sneakersimg from "../img/projImages/sneakersimg.jpg";

const projects = [
  {
    id: 1,
    category: "React",
    image: todoimg,
    link1: "https://github.com/juulmrqs/To-Do-List-Project",
    title: "To do list",
    text: "Created with React",
  },
  {
    id: 2,
    category: "React",
    image: pokemonimg,
    link1: "https://github.com/juulmrqs/Using-Pokemon-API",
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
