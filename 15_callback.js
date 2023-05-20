const allVideo = {
  video1: "This is video 1",
  video2: "This is video 2",
  video3: "This is video 3",
};

let userLogin1 = (email, password, callback) => {
  setTimeout(() => {
    console.log("we have the data now");
    callback({ userEmail: email });
  }, 3000);
};
let getUserVideo = (email, callback) => {
  setTimeout(() => {
    console.log("we got the videos");
    callback(Object.keys(allVideo));
  }, 2000);
};
console.log("Start");

let getvideoDetail = (video, callback) => {
  setTimeout(() => {
    console.log("Title of video " + video + " is: ");
    callback(allVideo[Object.keys(allVideo)[video - 1]]);
  }, 2000);
};

const user2 = userLogin1("Avidjsfa@gmmail.com", "9022hgks", (user) => {
  console.log(user);
  getUserVideo(user.userEmail, (videos) => {
    console.log(videos);
    getvideoDetail(2, (detail) => {
      console.log(detail);
    });
  });
});

console.log("End");
