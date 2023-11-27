// save to variables instead of importing
// to avoid webpack error
const serengeti_mp4 =
  "videos/project-walkthoughs/mp4/serengeti_walkthrough.mp4";
const crispycanvas_mp4 =
  "videos/project-walkthoughs/mp4/crispycanvas_walkthrough.mp4";
const globetracer_mp4 =
  "videos/project-walkthoughs/mp4/globetracer_walkthrough.mp4";
const serengeti_webm =
  "videos/project-walkthoughs/webm/serengeti_walkthrough.webm";
const crispycanvas_webm =
  "videos/project-walkthoughs/webm/crispycanvas_walkthrough.webm";
const globetracer_webm =
  "videos/project-walkthoughs/webm/globetracer_walkthrough.webm";

export type Project = {
  name: string;
  description: string;
  tags: Array<{ name: string }>;
  mp4: any;
  webm: any;
  source_code_link: string;
  live_site_link?: string;
};

export const projects: Project[] = [
  {
    name: "Serengeti Sky Lodges",
    description:
      "A Next.js-powered website offering luxurious escapes amidst untamed wilderness, secure authentication with Supabase, and seamless CRUD functionality for a truly enchanting user experience. Adventure awaits! 🏞️🛂",
    tags: [
      {
        name: "react",
      },
      {
        name: "nextjs",
      },
      {
        name: "supabase",
      },
      {
        name: "tailwind",
      },
    ],
    mp4: serengeti_mp4,
    webm: serengeti_webm,
    source_code_link: "https://github.com/PresidentIsmail/Serengeti-Sky-Lodges",
    live_site_link: "https://serengeti-sky-lodges.vercel.app/",
  },
  {
    name: "Crispy Canvas",
    description:
      "A React ordering application that lets you order your favourite pizzas while effortlessly managing orders and accessing order history. With my expertise, I crafted a seamless user experience that tantalizes taste buds and showcases my skills in front-end development. 🍕🎨",
    tags: [
      {
        name: "react",
      },
      {
        name: "restapi",
      },
      {
        name: "css",
      },
    ],
    mp4: crispycanvas_mp4,
    webm: crispycanvas_webm,
    source_code_link: "https://github.com/PresidentIsmail/Crispy-Canvas",
    live_site_link: "https://crispy-canvas.netlify.app/",
  },
  {
    name: "Globe Tracer",
    description:
      "Globe Tracer is a web application that allows users to track all the places they have traveled to around the world. With an interactive map and a user-friendly interface, users can easily record their travel experiences and view them at any time.",
    tags: [
      {
        name: "React",
      },
      {
        name: "Jsonserver",
      },
      {
        name: "css",
      },
      {
        name: "Mapbox",
      },
    ],
    mp4: globetracer_mp4,
    webm: globetracer_webm,
    source_code_link: "https://github.com/PresidentIsmail/Globe-Tracer",
  },
];
