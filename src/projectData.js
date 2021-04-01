// import todos from "./images/projects/todoster.png";
import portfolio from "./images/projects/portfolio.png";
import metflixy from "./images/projects/metflixy.png";
import My_google from "./images/projects/My_google.PNG";
import db from "./firebase";
// console.log(metflixy);
const images = {
  Portfolio: portfolio,
  My_google: My_google,
  metflixy: metflixy,
};
// const Data = db.collection("projects");
// let projectData = [];
const me = (async () => {
  const project = await db
    .collection("projects")
    .get()
    .then((data) => {
      return data.docs.map((doc) => {
        return {
          ...doc.data(),
          date_created: new Date(
            doc.data().date_created * 1000
          ).toLocaleString(),
        };
      });
    });
  // console.log(project);
  return project;
  // const prodata = documents;
  // console.log(projectData);
})(); // eslint-disable-line
let projectDatas = [];
me.then((data) => {
  // const titles = data.map((obj) => {
  //   return obj.title.replace(/ /g, "_");
  // });
  projectData = data.map((obj) => {
    console.log(images["metflixy"]);
    return {
      ...obj,
      image: images[obj.title.replace(" ", "_")] || images["metflixy"],
    };
  });
});
// console.log(he);
export let projectData = projectDatas;
// export { projectData };
// export const projectData = [
//   {
//     title: "Metflixy",
//     description: `Metflixy is a clone of Netflix's web interface. This app was created using React
//     functional components, Redux state management, axios async/await requests, and deployed on Google Firebase.
//     Firebase Authentication allows user account creation, and Firebase Firestore is the database used to store
//     customer and product records. Additional functionality includes customer subscription checkout powered by
//     the Stripe Firebase Extension and Stripe API integration. Once a user is subscribed, movie data is pulled
//     from The Movie Database (TMDB) for trending movies and movie poster images. Movie trailers are integrated
//     from YouTube if one is successfully found.`,
//     technologies:
//       "React, Redux, Stripe API, Firebase Authentication, Firebase Firestore, JavaScript, HTML, CSS, GitHub",
//     image: flixer,
//     date_created: "March 2021",
//     link: "https://metflixy.web.app",
//     github: "https://github.com/faouzielbakri/Metflixy",
//     test_user: "faouzi@gmail.com",
//     test_password: "12345678",
//     cc: {
//       number: "4242 4242 4242 4242",
//       expiration: "04/24",
//       cvv: "424",
//       billing: "Anything",
//     },
//   },
//   {
//     title: "Portfolio",
//     description: `This portfolio was created using React. The inspiration for the theme
//         was based on 80's retro arcade games. The site is mobile and desktop responsive, with
//         additional functionality including an app-wide music player that is saved in the app state. `,
//     technologies: "React, JavaScript, HTML, CSS, GitHub, Netlify",
//     image: portfolio,
//     date_created: "Febuary 2021",
//     link: "https://www.Faouzielbakri.ga",
//     github: "https://github.com/faouzielbakri/portfolio",
//   },
// ];
