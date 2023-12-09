// function showProfile(userProfile) {
//     const {name, tag, location, avatar, ...restProps} = userProfile;
//     console.log(name, tag, location, avatar, restProps);
// }

const profile = {
  name: "Niko",
  tag: "Yuta_06",
  location: "Cyprus",
  avatar: "http://sdecsdfs.com/images/",
  stats: {
    followers: 5064,
    views: 245084,
    likes: 3245,
  },
};

// showProfile(profile);

const { name, tag, ...restProps } = profile;
console.log(restProps);
