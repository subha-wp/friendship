export type Profile = {
  id: string;
  name: string;
  age: number;
  location: string;
  distance: string;
  imageUrl: string;
  matchPercentage: number;
  about: string;
  interests: Array<{
    emoji: string;
    label: string;
  }>;
};

export const profiles: Profile[] = [
  {
    id: "1",
    name: "James",
    age: 20,
    location: "Hanover",
    distance: "1.3 km",
    imageUrl:
      "https://scontent.frdp1-2.fna.fbcdn.net/v/t39.30808-6/480483944_1713288779271909_8420843227327565013_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1Pmd1ERb3D0Q7kNvgFs2nZt&_nc_oc=Adju7OieV5L23EUy9pK2bIKb3yWfSgkQnsWL-h6LN9EMnzFA8TWiyf-jynuVcPoPJMk47kMst54k9ugiajjGW5Xh&_nc_zt=23&_nc_ht=scontent.frdp1-2.fna&_nc_gid=AFaDF0Ga-_QsDqKVsNQbMfq&oh=00_AYAcsZxhE9cvev8EI4Ac8rZ36Ju-JqqiWy72OOkG0DSFGg&oe=67BDE201",
    matchPercentage: 100,
    about:
      "Love exploring new places and meeting new people. Always up for an adventure! 🌟",
    interests: [
      { emoji: "🌍", label: "Travel" },
      { emoji: "📚", label: "Reading" },
      { emoji: "🎨", label: "Art" },
      { emoji: "🏃‍♂️", label: "Fitness" },
      { emoji: "🎵", label: "Music" },
    ],
  },
  {
    id: "2",
    name: "Sarah",
    age: 23,
    location: "Downtown",
    distance: "0.8 km",
    imageUrl:
      "https://scontent.frdp1-2.fna.fbcdn.net/v/t51.75761-15/474137787_18033781010577723_3925083839983978154_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_Nr8HWUD0iIQ7kNvgFY_k_4&_nc_oc=Adj1TlMjv1MSH43QEED6fy_CChGvRzD85zGofqYsdqyw1I9k-PaKL7iyMLQdf9jkA5AfFC12ZWoZ5ek4lIOj1FGL&_nc_zt=23&_nc_ht=scontent.frdp1-2.fna&_nc_gid=AyyrGnhxl34W50TtDNDtszr&oh=00_AYAKPayY2rcw3QnChRjwX031sSkdOmF8YvK0h9SB719B5A&oe=67BDC97D",
    matchPercentage: 95,
    about:
      "Creative soul with a passion for photography and design. Looking for meaningful connections 📸",
    interests: [
      { emoji: "📸", label: "Photography" },
      { emoji: "🎨", label: "Design" },
      { emoji: "☕", label: "Coffee" },
      { emoji: "🎭", label: "Arts" },
      { emoji: "✈️", label: "Travel" },
    ],
  },
  {
    id: "3",
    name: "Michael",
    age: 25,
    location: "Riverside",
    distance: "2.5 km",
    imageUrl:
      "https://scontent.frdp1-1.fna.fbcdn.net/v/t39.30808-6/294832283_472344174895273_8502455424701204341_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=paeNrNhuIeoQ7kNvgHdxsWX&_nc_oc=Adje4ZynAXb9IJSAb7f26Ju7uCaXunkepfcDlxDylPGoKU-L1Qpk_ev6wPRa3tzorjXsoHRdLDEpAT1o_BravsB4&_nc_zt=23&_nc_ht=scontent.frdp1-1.fna&_nc_gid=AKucEwaqmlY9Pm06NB5Bqiq&oh=00_AYAD3rzafhZITTPJsEiQV2mXEEn61lDZlcHjaI--2v0v9A&oe=67BDC764",
    matchPercentage: 89,
    about:
      "Tech enthusiast and fitness freak. Always learning something new! 💪",
    interests: [
      { emoji: "💻", label: "Tech" },
      { emoji: "🏋️‍♂️", label: "Gym" },
      { emoji: "🎮", label: "Gaming" },
      { emoji: "📱", label: "Gadgets" },
      { emoji: "🏃‍♂️", label: "Running" },
    ],
  },
  {
    id: "4",
    name: "Emma",
    age: 22,
    location: "West End",
    distance: "3.7 km",
    imageUrl:
      "https://scontent.frdp1-1.fna.fbcdn.net/v/t39.30808-6/465040647_8958560684156683_1944472094225915560_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=JeewB9yRaFQQ7kNvgHxg3Aj&_nc_oc=AdjvZ4yXRma1Cexa6aGIy4qGpfqVBgJ_WeeTJgYRqzPLCZomRy55Ah4uyLveVEaiUMo64sM0YhKekOl93UTxzF9n&_nc_zt=23&_nc_ht=scontent.frdp1-1.fna&_nc_gid=APRdkN92UcnzaDuiYYjJXAL&oh=00_AYCU263qGXJAWjFnk610aApirqMNI6pTVj3h7jX7pNPFSw&oe=67BDC729",
    matchPercentage: 92,
    about:
      "Food lover and aspiring chef. Let's cook something amazing together! 🍳",
    interests: [
      { emoji: "🍳", label: "Cooking" },
      { emoji: "🍷", label: "Wine" },
      { emoji: "🌱", label: "Gardening" },
      { emoji: "📚", label: "Books" },
      { emoji: "🎵", label: "Music" },
    ],
  },
  {
    id: "5",
    name: "Alex",
    age: 24,
    location: "Eastside",
    distance: "4.1 km",
    imageUrl:
      "https://w0.peakpx.com/wallpaper/553/219/HD-wallpaper-girl-red-bengali-beautiful-stunning-cute.jpg",
    matchPercentage: 85,
    about:
      "Nature enthusiast and yoga instructor. Finding peace in the little things 🧘‍♀️",
    interests: [
      { emoji: "🧘‍♀️", label: "Yoga" },
      { emoji: "🌿", label: "Nature" },
      { emoji: "🎨", label: "Art" },
      { emoji: "🍵", label: "Tea" },
      { emoji: "✨", label: "Meditation" },
    ],
  },
];
