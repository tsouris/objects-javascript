const playlist = {
  name: "My top playlist",
  rating: "5",
  tracks: ["track1", "track2", "track3"],
  trackCount: 3,

  changeName(newName) {
    this.name = newName;
    console.log(this.name);
  },

  changeRating(newRating) {
    this.rating = newRating;
    console.log(this.rating);
  },

  addTrack(newTrack) {
    this.tracks.push(newTrack);
    this.trackCount = this.tracks.length;
    console.log(`Track "${newTrack}" added. Total tracks: ${this.trackCount}`);
  },
};

playlist.addTrack("track4");
playlist.changeName("My worst playlist");
playlist.changeRating("7");
