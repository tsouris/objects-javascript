const playlist = {
  name: "My top playlist",
  rating: "5",
  tracks: [
    {
      id: "1",
      name: "Trais Scott",
      sub: "The best track",
      thumb_url: "http://www.",
    },
    {
      id: "2",
      name: "Trais Scott",
      sub: "The best track",
      thumb_url: "http://www.",
    },
    {
      id: "3",
      name: "Trais Scott",
      sub: "The best track",
      thumb_url: "http://www.",
    },
    {
      id: "4",
      name: "Trais Scott",
      sub: "The best track",
      thumb_url: "http://www.",
    },
    {
      id: "5",
      name: "Trais Scott",
      sub: "The best track",
      thumb_url: "http://www.",
    },
    {
      id: "6",
      name: "Trais Scott",
      sub: "The best track",
      thumb_url: "http://www.",
    },
  ],
  trackCount: 6,
};

console.log(playlist);

function logPlaylist(myObject) {
  console.log(myObject.name);
  console.log(myObject.rating);
  console.log(myObject.tracks[2]);
  console.log(myObject.trackCount);
  console.log(myObject.public);
}

// logPlaylist(playlist);
playlist.name = "Kanye West";
playlist.public = true;
logPlaylist(playlist);
// const x = {};
// console.dir(x);
