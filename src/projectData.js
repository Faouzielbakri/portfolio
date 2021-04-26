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
          date_created: doc
            .data()
            .date_created.toDate()
            .toISOString()
            .slice(0, 10),
        };
      });
    });
  // console.log(project);
  return project;
})(); // eslint-disable-line
let projectDatas = [];
me.then((data) => {
  projectData = data.map((obj) => {
    return {
      ...obj,
      image: images[obj.title.replace(" ", "_")] || images["metflixy"],
    };
  });
});
export let projectData = projectDatas;
