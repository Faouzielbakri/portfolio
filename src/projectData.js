// import todos from "./images/projects/todoster.png";
import portfolio from "./images/projects/portfolio.png";
import metflixy from "./images/projects/metflixy.png";
import my_google from "./images/projects/my_google.png";
import prostudent from "./images/projects/prostudent.png";
import db from "./firebase";

// console.log(metflixy);
const images = {
  portfolio: portfolio,
  my_google: my_google,
  metflixy: metflixy,
  prostudent: prostudent,
};

const me = (async () => {
  const project = await db
    .collection("projects")
    .get()
    .then((data) => {
      return data.docs.map((doc) => {
        console.log(
          images[doc.data().title?.replace(" ", "_").toLowerCase()],
          doc.data().title?.toLowerCase()
        );
        return {
          ...doc.data(),
          date_created: doc
            .data()
            .date_created.toDate()
            .toISOString()
            .slice(0, 10),
          image: images[doc.data().title?.replace(" ", "_").toLowerCase()],
        };
      });
    });
  // console.log(project);
  return project;
})(); // eslint-disable-line
let projectDatas = [];
me.then((data) => {
  projectData = data.map((obj) => {
    console.log(obj);
    return obj;
  });
});
export let projectData = projectDatas;
