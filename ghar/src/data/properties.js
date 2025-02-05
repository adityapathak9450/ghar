
const properties = [
  
  {
    id: 1,
    title: "Office Space for Rent in Kammanahalli, Bangalore.",
  
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300", 
    updatedInfo: "Updated today",
    ownerName: "John Doe",
    isPremium: true,
    bathrooms: 1,
    rooms: 2,
    ownerExpectation: "Bachelors/Family",
    availability: "Immediately",
    amenities: ["Wet Pantry/Cafeteria", "Covered Parking", "Parking Ratio"],
    size: 1000,
    price: "₹80,000",
    securityDeposit: "₹1,60,000",
    type: "Buy",

  },
  {
    id: 2,
    title: "Luxury 3 BHK Flat for Rent in Whitefield, Bangalore.",
    image: "https://images.unsplash.com/photo-1599642324514-f46a705a922f?w=400&h=300",
    updatedInfo: "Updated today",
    ownerName: "Anita Sharma",
    isPremium: true,
    bathrooms: 3,
    rooms: 3,
    ownerExpectation: "Families, Professionals",
    availability: "Available now",
    amenities: ["Swimming Pool", "Gym", "24/7 Security"],
    size: 1500,
    price: "₹1,50,000",
    securityDeposit: "₹3,00,000",
    type: "Buy",
  },
  {
    id: 3,
    title: "Commercial Office for Rent in Koramangala, Bangalore.",
    image: "https://images.unsplash.com/photo-1597756310849-8c8b3f6a98f4?w=400&h=300",
    updatedInfo: "Updated today",
    ownerName: "Vikram Gupta",
    isPremium: true,
    bathrooms: 2,
    rooms: 4,
    ownerExpectation: "Business owners, Startups",
    availability: "Available immediately",
    amenities: ["High-speed Internet", "Conference Room", "Security"],
    size: 2000,
    price: "₹1,00,000",
    securityDeposit: "₹2,00,000",
    type: "Buy",
  },
  {
    id: 4,
    title: "2 BHK for Rent in Jayanagar, Bangalore.",
    image: "https://images.unsplash.com/photo-1603384140366-91de90c430ef?w=400&h=300",
    updatedInfo: "Updated today",
    ownerName: "Suresh Kumar",
    isPremium: false,
    bathrooms: 2,
    rooms: 2,
    ownerExpectation: "Families, Individuals",
    availability: "Available now",
    amenities: ["Power Backup", "Parking"],
    size: 1000,
    price: "₹40,000",
    securityDeposit: "₹80,000",
    type: "Buy",
  },
  {
    id: 5,
    title: "Furnished 1 BHK Apartment for Rent in Marathahalli, Bangalore.",
    image: "https://images.unsplash.com/photo-1594322281510-fcdc15d2311f?w=400&h=300",
    updatedInfo: "Updated today",
    ownerName: "Priya Reddy",
    isPremium: false,
    bathrooms: 1,
    rooms: 1,
    ownerExpectation: "Bachelors, Couples",
    availability: "Available now",
    amenities: ["Wi-Fi", "Air Conditioning", "Furnishing"],
    size: 600,
    price: "₹25,000",
    securityDeposit: "₹50,000",
    type: "Buy",
  },
  {
    id: 6,
    title: "Spacious 3 BHK Flat for Sale in HSR Layout, Bangalore.",
    image: "https://images.unsplash.com/photo-1551821454-9b5c3a4f06ac?w=400&h=300",
    updatedInfo: "Updated today",
    ownerName: "Neelam Patil",
    isPremium: true,
    bathrooms: 3,
    rooms: 3,
    ownerExpectation: "Families, Professionals",
    availability: "Available now",
    amenities: ["Swimming Pool", "Gym", "Clubhouse", "Power Backup"],
    size: 1800,
    price: "₹2,50,00,000",
    securityDeposit: "₹5,00,000",
    type: "Buy",
  },
  {
    id: 7,
    title: "Office Space for Rent in Indiranagar, Bangalore.",
    image: "https://images.unsplash.com/photo-1601834192734-77d34de8c057?w=400&h=300",
    updatedInfo: "Updated today",
    ownerName: "Ravi Kumar",
    isPremium: false,
    bathrooms: 1,
    rooms: 5,
    ownerExpectation: "Businesses, Corporate",
    availability: "Available immediately",
    amenities: ["Internet", "Conference Room", "Security"],
    size: 2500,
    price: "₹1,50,000",
    securityDeposit: "₹3,00,000",
    type: "Buy",
  },
  {
    id: 8,
    title: "2 BHK Flat for Rent in Electronic City, Bangalore.",
    image: "https://images.unsplash.com/photo-1600358076791-70f61a0be59b?w=400&h=300",
    updatedInfo: "Updated today",
    ownerName: "Rahul Mehta",
    isPremium: false,
    bathrooms: 2,
    rooms: 2,
    ownerExpectation: "Families, Students",
    availability: "Available now",
    amenities: ["Power Backup", "Parking", "24/7 Security"],
    size: 1100,
    price: "₹35,000",
    securityDeposit: "₹70,000",
    type: "Buy",
  },
  {
    id: 9,
    title: "Luxury Penthouse for Sale in MG Road, Bangalore.",
    image: "https://images.unsplash.com/photo-1532097657344-d863a6898c42?w=400&h=300",
    updatedInfo: "Updated today",
    ownerName: "Kiran Yadav",
    isPremium: true,
    bathrooms: 5,
    rooms: 5,
    ownerExpectation: "Elite buyers",
    availability: "Available now",
    amenities: ["Private Pool", "Garden", "Jacuzzi", "Gym"],
    size: 4000,
    price: "₹8,00,00,000",
    securityDeposit: "₹16,00,000",
    type: "Buy",
  },
  {
    id: 10,
    title: "3 BHK Flat for Sale in Banashankari, Bangalore.",
    image: "https://images.unsplash.com/photo-1574742235194-c72294a4693d?w=400&h=300",
    updatedInfo: "Updated today",
    ownerName: "Arvind Rao",
    isPremium: true,
    bathrooms: 3,
    rooms: 3,
    ownerExpectation: "Families",
    availability: "Available now",
    amenities: ["Swimming Pool", "Gym", "Play Area", "Parking"],
    size: 1500,
    price: "₹1,20,00,000",
    securityDeposit: "₹2,50,000",
    type: "Buy",
  },
   {
    id: 11,
    title: "1 BHK Apartment for Rent in Pune",
    description: "Cozy 1 BHK apartment in a prime location.",
    price: 15000,
    type: "Rent",
    rooms: 1,
    bathrooms: 1,
    owner: "Ravi Kumar",
    contact: "9988776655",
    image: "https://images.unsplash.com/photo-1560185007-b3e85c63efc5?w=400&h=300",
  },
  {
    id: 12,
    title: "2 BHK Apartment for Rent in Bangalore",
    description: "Spacious 2 BHK in a gated community.",
    price: 25000,
    type: "Rent",
    rooms: 2,
    bathrooms: 2,
    owner: "Kavita Iyer",
    contact: "9988776650",
    image: "https://images.unsplash.com/photo-1592595896551-12d4ddf40593?w=400&h=300",
  },
  {
    id: 13,
    title: "3 BHK Apartment for Rent in Delhi",
    description: "Well-furnished apartment near metro.",
    price: 35000,
    type: "Rent",
    rooms: 3,
    bathrooms: 3,
    owner: "Pooja Mehra",
    contact: "9988776649",
    image: "https://images.unsplash.com/photo-1615873968403-89f920b3d1cc?w=400&h=300",
  },
  {
    id: 14,
    title: "4 BHK Villa for Rent in Chennai",
    description: "Beautiful villa with spacious interiors.",
    price: 45000,
    type: "Rent",
    rooms: 4,
    bathrooms: 4,
    owner: "Rohit Sharma",
    contact: "9988776648",
    image: "https://images.unsplash.com/photo-1598228723793-52759a7ff3e6?w=400&h=300",
  },
  {
    id: 15,
    title: "5 BHK Penthouse for Rent in Hyderabad",
    description: "Penthouse with rooftop garden and pool.",
    price: 55000,
    type: "Rent",
    rooms: 5,
    bathrooms: 5,
    owner: "Anusha Rao",
    contact: "9988776647",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300",
  },
    {
    id: 11,
    title: "1 BHK Apartment for Rent in Pune",
    description: "Cozy 1 BHK apartment in a prime location.",
    price: 15000,
    type: "Rent",
    rooms: 1,
    bathrooms: 1,
    owner: "Ravi Kumar",
    contact: "9988776655",
    image: "https://images.unsplash.com/photo-1560185007-b3e85c63efc5?w=400&h=300",
  },
  {
    id: 12,
    title: "2 BHK Apartment for Rent in Bangalore",
    description: "Spacious 2 BHK in a gated community.",
    price: 25000,
    type: "Rent",
    rooms: 2,
    bathrooms: 2,
    owner: "Kavita Iyer",
    contact: "9988776650",
    image: "https://images.unsplash.com/photo-1592595896551-12d4ddf40593?w=400&h=300",
  },
  {
    id: 13,
    title: "3 BHK Apartment for Rent in Delhi",
    description: "Well-furnished apartment near metro.",
    price: 35000,
    type: "Rent",
    rooms: 3,
    bathrooms: 3,
    owner: "Pooja Mehra",
    contact: "9988776649",
    image: "https://images.unsplash.com/photo-1615873968403-89f920b3d1cc?w=400&h=300",
  },
  {
    id: 14,
    title: "4 BHK Villa for Rent in Chennai",
    description: "Beautiful villa with spacious interiors.",
    price: 45000,
    type: "Rent",
    rooms: 4,
    bathrooms: 4,
    owner: "Rohit Sharma",
    contact: "9988776648",
    image: "https://images.unsplash.com/photo-1598228723793-52759a7ff3e6?w=400&h=300",
  },
  {
    id: 15,
    title: "5 BHK Penthouse for Rent in Hyderabad",
    description: "Penthouse with rooftop garden and pool.",
    price: 55000,
    type: "Rent",
    rooms: 5,
    bathrooms: 5,
    owner: "Anusha Rao",
    contact: "9988776647",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300",
  },
];

export default properties;










