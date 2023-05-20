//* JavaScript is a bad reader.It reads the callstack line by line. If the information you wanted is not fetched then it ignores and moves forward.
//* so we use callback, which send the thing which are not fetched from callstack to web-API(which keep these for thing untill they get there data and then send it back to callstack and reads it.)
const allVideos = {
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
    console.log(email);
    callback(Object.keys(allVideos));
  }, 2000);
};

let getvideoDetail = (video, callback) => {
  setTimeout(() => {
    console.log("Title of video " + video + " is: ");
    callback(allVideos[Object.keys(allVideos)[video - 1]]);
  }, 2000);
};

console.log("Start");

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
