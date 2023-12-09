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

function createProfileMarkup(userProfile) {
  const {
    avatar,
    name,
    tag,
    location,
    stats: { followers, views, likes },
  } = userProfile;
  return `<img src="${avatar}">
  <p>${name}<span>@${tag}</span></p>
  <p>Location: ${location}</p>
  <ul>
  <li>Followers: ${followers}</li>
  <li>Views: ${views}</li>
  <li>Likes: ${likes}</li>
  </ul>`;
}

const markup = createProfileMarkup(profile);
console.log(markup);
document.body.insertAdjacentHTML('afterbegin', markup);
