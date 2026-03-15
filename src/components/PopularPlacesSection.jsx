import PopularPlaces from "./PopularPlaces";

const hotelsData = [
  {
    id: 241,
    name: "Best Western Heritage",
    imageUrl:
      "https://otithee.sgp1.cdn.digitaloceanspaces.com/public/thumbnails/1736138175_677b5dbf3f848.webp",
    link: "/accommodations/241",
    price: "9,000 ৳",
    description:
      "Heritage Hotel, 173-01 Bypass Road, Kolatoli Circle, Cox's Bazar., Coxsbazar Sadar, Bangladesh",
  },
  {
    id: 71,
    name: "Ocean View Hotel & Convention",
    imageUrl:
      "https://otithee.sgp1.cdn.digitaloceanspaces.com/public/thumbnails/1736655908_67834424cb2e5.webp",
    price: "8,223 ৳",
    description:
      "East  Side of Rakhain Mohila Market Kuakata, Kalapara, Bangladesh",
    link: "/accommodations/71",
  },
  {
    id: 189,
    name: "The Castle Inn",
    imageUrl:
      "https://otithee.sgp1.cdn.digitaloceanspaces.com/public/thumbnails/1736139723_677b63cb51d4d.webp",
    price: "8,000 ৳",
    description:
      "House ,17,Rad 06,sector 09,Uttara,Dhaka-1230, Uttara, 1230 Dhaka, Bangladesh, Uttara, Bangladesh",
    link: "/accommodations/189",
  },
  {
    id: 293,
    name: "FARS Hotel & Resorts",
    imageUrl:
      "https://otithee.sgp1.cdn.digitaloceanspaces.com/public/thumbnails/1736140917_677b6875d6003.webp",
    price: "11,568 ৳",
    description:
      "212, Shahid Syed Nazrul Islam Sharani  Dhaka-1000, Bangladesh, Paltan, Bangladesh",
    link: "/accommodations/293",
  },
  {
    id: 257,
    name: "Hotel Sarina",
    imageUrl:
      "https://otithee.sgp1.cdn.digitaloceanspaces.com/public/thumbnails/1736139530_677b630a38925.webp",
    price: "11,000 ৳",
    description:
      "Plot #27, Road #17, Banani C/A, Dhaka 1213 Bangladesh., Gulshan, Bangladesh",
    link: "/accommodations/257",
  },
];

const resortsData = [
  {
    id: 30,
    name: "SKS INN Hotel & Resort",
    imageUrl:
      "https://otithee.sgp1.cdn.digitaloceanspaces.com/uploads/images/resort/1699858948-22636580.jpg",
    price: "6,900 ৳",
    description:
      "Dinajpur Sadar, College Road, Radha Krishnapur Gaibandha, Dinajpur Sadar, Bangladesh",
    link: "/accommodations/30",
  },
  {
    id: 8,
    name: "Sea Shell Park and Resort",
    imageUrl:
      "https://otithee.sgp1.cdn.digitaloceanspaces.com/uploads/images/resort/1638019667-75802440.jpg",
    price: "9,999 ৳",
    description:
      "300 ft attached Purbachal New Town, Purbachal, Dhaka, Gulshan, Bangladesh",
    link: "/accommodations/8",
  },
  {
    id: 22,
    name: "Palmyra's Resort",
    imageUrl:
      "https://otithee.sgp1.cdn.digitaloceanspaces.com/uploads/images/resort/1698065048-30036149.jpg",
    price: "20,000 ৳",
    description: "Gerua Road, Jamsing, Savar, Bangladesh, Uttara, Bangladesh",
    link: "/accommodations/22",
  },
  {
    id: 25,
    name: "Sea Gold Resort",
    imageUrl:
      "https://otithee.sgp1.cdn.digitaloceanspaces.com/uploads/images/resort/1698900438-94112959.jpg",
    price: "1,500 ৳",
    description:
      "Rakhain Market Road, Kuakata, Patuakhali, Kalapara, Bangladesh",
    link: "/accommodations/25",
  },
  {
    id: 28,
    name: "Grand Pearl Kuakata Hotel & Resort",
    imageUrl:
      "https://otithee.sgp1.cdn.digitaloceanspaces.com/uploads/images/resort/1699073078-30942287.jpg",
    price: "5,000 ৳",
    description:
      "206 Poshchim Veribad Road, Kuakata,  Patuakhali, Kalapara, Bangladesh",
    link: "/accommodations/28",
  },
];

const apartmentsData = [
  {
    id: 309,
    name: "Sorowar Vila Corporate Space",
    imageUrl:
      "https://otithee.sgp1.cdn.digitaloceanspaces.com/public/thumbnails/1733119470_674d4deea1f5a.webp",
    price: "60,000 ৳",
    description: "AftabNagor, Badda, Bangladesh",
    link: "/accommodations/309",
  },
  {
    id: 3636,
    name: "Equity Arunima G-6",
    imageUrl:
      "https://otithee.sgp1.cdn.digitaloceanspaces.com/public/thumbnails/1732686998_6746b496acbb7.webp",
    price: "35,500 ৳",
    description: "pred aria, Chawk Bazar, Bangladesh",
    link: "/accommodations/3636",
  },
  {
    id: 780,
    name: "Vubon vila 4th Floor",
    imageUrl:
      "https://otithee.sgp1.cdn.digitaloceanspaces.com/public/thumbnails/1732967660_674afcec2eac4.webp",
    price: "35,000 ৳",
    description: "bosundhora, Vatara, Bangladesh",
    link: "/accommodations/780",
  },
  {
    id: 255,
    name: "Biswas Showpnil Commercial floor 2nd",
    imageUrl:
      "https://otithee.sgp1.cdn.digitaloceanspaces.com/public/thumbnails/1733122030_674d57eea3f81.webp",
    price: "300,000 ৳",
    description: "jigatola bus stand, Dhanmondi, Bangladesh",
    link: "/accommodations/255",
  },
  {
    id: 464,
    name: "Tonim vila",
    imageUrl:
      "https://otithee.sgp1.cdn.digitaloceanspaces.com/public/thumbnails/1733039270_674c14a6ecdc2.webp",
    price: "65,000 ৳",
    description: "baridhara, Gulshan, Bangladesh",
    link: "/accommodations/464",
  },
];

const sharedRoomsData = [
  {
    id: 334,
    name: "Azharul Shared Room",
    imageUrl:
      "https://otithee.sgp1.cdn.digitaloceanspaces.com/uploads/images/sharedroom/1704133914-52998166.jpg",
    price: "400 ৳",
    description: "Bolonpur, Rajshahi, Bangladesh",
    link: "/accommodations/334",
  },
  {
    id: 2264,
    name: "Wodud Manson",
    imageUrl:
      "https://otithee.sgp1.cdn.digitaloceanspaces.com/uploads/images/sharedroom/1724931178-72738101.jpg",
    price: "3,000 ৳",
    description: "Banichong, Baniachong, Bangladesh",
    link: "/accommodations/2264",
  },
  {
    id: 80,
    name: "Bosila Chatrabus(Sit 701) 7th Floor",
    imageUrl:
      "https://otithee.sgp1.cdn.digitaloceanspaces.com/uploads/images/sharedroom/1699505051-19945737.jpg",
    price: "6,000 ৳",
    description: "Bosila, Mohammadpur, Bangladesh",
    link: "/accommodations/80",
  },
];

const conventionHallsData = [
  {
    id: 51,
    name: "ORCHARD CONVENTION HALL",
    imageUrl:
      "https://otithee.sgp1.cdn.digitaloceanspaces.com/uploads/images/conventionhall/1697361865-67186442.jpg",
    priceHall: {
      morning: { price: "50,000 ৳", shift: "Morning Shift" },
      evening: { price: "40,000 ৳", shift: "Evening Shift" },
    },
    description:
      "Plot 17, Road 7, Dhanmondi, Dhaka-1209, Dhanmondi, Bangladesh",
    link: "/accommodations/51",
  },
  {
    id: 35,
    name: "Jolsha Celebration Hall by Xpressmall Hotels - Restaurant & Convention Hall",
    imageUrl:
      "https://otithee.sgp1.cdn.digitaloceanspaces.com/uploads/images/conventionhall/1692021606-44834996.jpg",
    priceHall: {
      morning: { price: "50,000 ৳", shift: "Morning Shift" },
      evening: { price: "30,000 ৳", shift: "Evening Shift" },
    },
    description:
      "S.H Tower, House 35, Gausul Azam Ave, Sector 14, Uttara, Dhaka, Dhaka, Bangladesh, Uttara, Bangladesh",
    link: "/accommodations/35",
  },
  {
    id: 12,
    name: "Graver Inn Convention Hall",
    imageUrl:
      "https://otithee.sgp1.cdn.digitaloceanspaces.com/uploads/images/conventionhall/1608988850-88204837.jpg",
    priceHall: {
      morning: { price: "50,000 ৳", shift: "Morning Shift" },
      evening: { price: "25,000 ৳", shift: "Evening Shift" },
    },
    description: "East Rakhain Market,Kuakata., Kalapara, Bangladesh",
    link: "/accommodations/12",
  },
  {
    id: 20,
    name: "Crystal-2 Party Center at La Rose Hotel",
    imageUrl:
      "https://otithee.sgp1.cdn.digitaloceanspaces.com/uploads/images/conventionhall/1610208583-44476811.jpg",
    priceHall: {
      morning: { price: "50,000 ৳", shift: "Morning Shift" },
      evening: { price: "30,000 ৳", shift: "Evening Shift" },
    },
    description:
      "16 Ornob, Mirer Moidan, West Darga Gate, Sylhet Sadar, Bangladesh",
    link: "/accommodations/20",
  },
  {
    id: 40,
    name: "Kader's Convention Center",
    imageUrl:
      "https://otithee.sgp1.cdn.digitaloceanspaces.com/uploads/images/conventionhall/1694869334-33059468.jpg",
    priceHall: {
      morning: { price: "50,000 ৳", shift: "Morning Shift" },
      evening: { price: "30,000 ৳", shift: "Evening Shift" },
    },
    description:
      "Hazi Ashraf Ali Super Market, House#888/1, East Shewrapara, Mirpur, Mirpur, Bangladesh, Mirpur Model, Bangladesh",
    link: "/accommodations/40",
  },
];

const PopularPlacesSection = () => {
  return (
    <PopularPlaces
      hotels={hotelsData}
      resorts={resortsData}
      apartments={apartmentsData}
      sharedRooms={sharedRoomsData}
      conventionHalls={conventionHallsData}
    />
  );
};

export default PopularPlacesSection;
