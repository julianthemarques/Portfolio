import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      helloHome: "Hi I'm",
      apresentation: "I'm a Software Engineer and this is my website.",
      takeALook: "Take a Look!",
      aboutme: "About Me",
      skills: "Skills",
      myNameIs: "My Name is",
      myDescription:
        "I'm an analisys system student, my graduation forecast is settled for the end of 2023. I started coding when I was in Law School, after, I changed my major to be able to work as a Software Engineer. At this moment, I work as full-stack programmer in XP Educação company, althought I have preference and more efficiency in Front End area.",
      FullName: "Name",
      Age: "Age",
      Nationallity: "Nationallity",
      Languages: "Languages",
      Location: "Location",
      Service: "Service",
      Brazillian: "Brazillian",
      "Portuguese/ English/ French": "Portuguese/ English/ French",
      "Web Developer": "Web Developer",
      My: "My",
      Hobbies:
        "My hobbies consists in coding, hikings, camping, fishing and play music instruments.",
      curriculumButton: "Download CV",
      "These are my primary": "These are my primary",
      tools: "tools",
      Resume: "Resume",
      "Working Experience": "Working Experience",
      "Intern - Full Stack Developer": "Intern - Full Stack Developer",
      "Educational Qualifications": "Educational Qualifications",
      "System Analysis and Development - Universidade Estácio de Sá":
        "System Analysis and Development - Universidade Estácio de Sá",
      "Currently Major Course": "Currently Major Course",
      "Law School - Pontifícia Universidade Católica de Minas Gerais":
        "Law School - Pontifícia Universidade Católica de Minas Gerais",
      "Incompleted Law Course": "Incompleted Law Major",
      "High School": "High School",
      projects: "projects",
      Contact: "Contact",
      "Contact Me": "Contact Me",
      "Name*": "Name*",
      "Subject*": "Subject*",
      "Your message*": "Your message*",
      Phone: "Phone",
      Address: "Address",
      Home: "Home",
      About: "About",
      Projects: "Projects",
    },
  },
  pt: {
    translation: {
      helloHome: "Oi eu o",
      apresentation: "Eu sou um engenheiro de software e este é meu website",
      takeALook: "Dê uma olhada!",
      aboutme: "Sobre Mim",
      skills: "Habilidades",
      myNameIs: "Meu nome é",
      myDescription:
        "Eu sou um estudante de análise e desenvolvimento de sistema, minha graduação tem previsão para ocorrer no final de 2023. Eu comecei a programar quando estava na faculdade de Direito, após isto, troquei o meu curso para ser apto a trabalhar como um desenvolvedor de software. Neste momento, eu trabalho como programador full-stack na empresa XP Educação, entretanto com preferência e maior eficiência na área do Front End.",
      FullName: "Nome",
      Age: "Idade",
      Nationallity: "Nacionalidade",
      Languages: "Linguas",
      Location: "Localização",
      Service: "Serviços",
      Brazillian: "Brasileiro",
      "Portuguese/ English/ French": "Português/ Inglês/ Françês",
      "Web Developer": "Web Developer",
      My: "Meus",
      Hobbies:
        "Meus hobbies consistem em programar, realizar corridas, acampar, pescar e tocar instrumentos musicais.",
      curriculumButton: "Download Currículo",
      "These are my primary": "Essas são minhas principais",
      tools: "ferramentas",
      Resume: "Resumo",
      "Working Experience": "Experiência de Trabalho",
      "Intern - Full Stack Developer": "Estagiário - Desenvolvedor Full Stack",
      "Educational Qualifications": "Qualificações Educacionais",
      "System Analysis and Development - Universidade Estácio de Sá":
        "Análise e Desenvolvimento de Sistemas - Universidade Estácio de Sá",
      "Currently Major Course": "Curso superior atual",
      "Law School - Pontifícia Universidade Católica de Minas Gerais":
        "Direito - Pontifícia Universidade Católica de Minas Gerais",
      "Incompleted Law Course": "Curso superior incompleto",
      "High School": "Ensino Médio",
      projects: "projetos",
      Contact: "Contato",
      "Contact Me": "Entre em contato",
      "Name*": "Nome*",
      "Subject*": "Assunto*",
      "Your message*": "Sua Mensagem*",
      Phone: "Telefone",
      Address: "Endereço",
      Home: "Início",
      About: "Sobre",
      Projects: "Projetos",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
});

export default i18n;
