export const profile = {
  name: "Niel Vince Nangcas",
  username: "@bongskie",
  avatar: require("../../assets/images/3caadbd5-4273-464c-a58d-cd06460cd6ff.jpg"),
  bio: "Designer, storyteller, and coffee enthusiast building a more creative daily rhythm.",
  location: "Lisbon, Portugal",
  website: "bongskie.co",
  role: "Product designer",
  stats: {
    followers: "12.4k",
    following: "842",
    posts: "284",
  },
  gallery: [
    require("../../assets/images/591d604f-882d-4452-91f3-e982ee041da3 (1).jpg"),
    require("../../assets/images/698f9e58-917b-480b-bcd9-54df8ba1bb6f.jpg"),
    require("../../assets/images/d612bb4b-a1d3-4ecd-abeb-b7a0e7c4d5c6.jpg"),
  ],
};

export const feedPosts = [
  {
    id: "1",
    name: profile.name,
    username: profile.username,
    avatar: profile.avatar,
    text:
      "Sunset walks, soft music, and good energy. Sometimes the best ideas arrive when you slow down.",
    image: require("../../assets/images/5f62e96e-8b2e-43fe-b050-1431e616ee92 (1).jpg"),
    likes: "2.4k",
    comments: "351",
    shares: "96",
  },
  {
    id: "2",
    name: "Leo Hart",
    username: "@leohart",
    avatar: require("../../assets/images/698f9e58-917b-480b-bcd9-54df8ba1bb6f.jpg"),
    text:
      "A little progress every day changes everything. Building something meaningful, one step at a time.",
    image: require("../../assets/images/b266a3cc-fb82-41a0-af0f-64d16341552d.jpg"),
    likes: "1.8k",
    comments: "220",
    shares: "84",
  },
  {
    id: "3",
    name: "Mila Stone",
    username: "@milastone",
    avatar: require("../../assets/images/d612bb4b-a1d3-4ecd-abeb-b7a0e7c4d5c6.jpg"),
    text:
      "Coffee, creativity, and cozy corners. This is my perfect Tuesday reset.",
    image: require("../../assets/images/591d604f-882d-4452-91f3-e982ee041da3 (1).jpg"),
    likes: "3.1k",
    comments: "412",
    shares: "105",
  },
];
