const allVideos = {
  video1: "This is video 1",
  video2: "This is video 2",
  video3: "This is video 3",
};

let userLogin = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("we have the data now");
      resolve({ userEmail: email });
    }, 3000);
  });
};
let getUserVideo = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("we got the videos");
      resolve(Object.keys(allVideos));
    }, 2000);
  });
};

let getvideoDetail = (video) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Title of video " + video + " is: ");
      resolve(allVideos[Object.keys(allVideos)[video - 1]]);
    }, 2000);
  });
};

console.log("Start");

userLogin("avisekh.213@goomail.com", "mrBombastic")
  .then((user) => {
    console.log(user);
    return getUserVideo(user.userEmail);
  })
  .then((video) => {
    console.log(video);
    return getvideoDetail(2);
  })
  .then((detail) => {
    console.log(detail);
  });

console.log("End");
