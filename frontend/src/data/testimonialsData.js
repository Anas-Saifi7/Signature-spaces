const names = [
  "Amit Sharma",
  "Neha Verma",
  "Rohit Mehta",
  "Pooja Singh",
  "Vikas Malhotra",
  "Ankit Jain",
  "Riya Kapoor",
  "Sandeep Yadav",
  "Nitin Bansal",
  "Rahul Gupta",
  "Priya Arora",
  "Karan Singh",
  "Simran Kaur",
  "Mohit Jain",
  "Anjali Verma",
  "Deepak Yadav",
  "Manish Kumar",
  "Sneha Kapoor",
  "Abhishek Sharma",
  "Harsh Gupta",
];

const cities = [
  "Delhi",
  "Noida",
  "Gurgaon",
  "Faridabad",
  "Ghaziabad",
  "Lucknow",
  "Jaipur",
  "Chandigarh",
  "Mumbai",
  "Pune",
];

const reviews = [
  "Excellent craftsmanship and premium finishing. Highly recommended.",
  "Very professional team with timely project delivery.",
  "Amazing interior work. My home looks luxurious now.",
  "Outstanding modular kitchen design and execution.",
  "Beautiful office interiors with modern aesthetics.",
  "Quality furniture and excellent customer support.",
  "Highly satisfied with the complete interior solution.",
  "Creative designers and affordable pricing.",
  "Excellent attention to detail throughout the project.",
  "Very happy with the final results and professionalism.",
];

export const testimonials = Array.from({ length: 400 }, (_, i) => ({
  name: names[i % names.length],
  city: cities[i % cities.length],
  text: reviews[i % reviews.length],
  rating: i % 7 === 0 ? 4 : 5,
}));