const recommendationCard = [
  {
    id: 0,
    name: 'Shahmir Minhas',
    image: "images/user.png",
    designation: 'React JS | NEXT JS | Node | GraphQL',
    view: "Hey everyone! I wanted to take a moment to recommend Ahtsham Ali for any React.js opportunities. I had the pleasure of working with him on multiple projects where he showcased a strong understanding of React.js and Next.js concepts and delivered high-quality code. He consistently demonstrated a willingness to learn and grow, and his enthusiasm for tackling new challenges was contagious. Osama is a reliable and dedicated team member who would be a great asset to any React.js team. Highly recommended! 👍! 🌟",
    linkednURL: "#"
  },
  {
    id: 1,
    name: 'Sikandar Hayat',
    image: "images/user.png",
    designation: 'Data Scientist | Machine Learning Engineer | Python Developer',
    view: "I had the privilege of working alongside Ahtsham on multiple university projects, and I must say, his talent and work ethic truly stood out. Recently, we were both part of the dynamic team at JMM Technologies, where Osama's professionalism and attention to detail shone brightly. I wholeheartedly endorse Osama for any opportunity that calls for a highly skilled and dedicated individual.",
    linkednURL: "#"
  },
  {
    id: 2,
    name: 'Nasir Khan',
    image: "images/user.png",
    designation: 'MERN | JavaScript | Tailwind | Sass | Bootstrap',
    view: "I wholeheartedly recommend Ahtsham as a talented React frontend developer with an incredible flair for UI/UX design. His proficiency in Node.js further enhances his capabilities, allowing him to build robust and scalable applications. Osama's attention to detail, problem-solving skills, and dedication to delivering exceptional results make him a valuable addition to any development team.",
    linkednURL: "#"
  },
  {
    id: 3,
    name: 'Muhammad Ullah',
    image: "images/user.png",
    designation: 'MERN Stack Developer',
    view: "I highly recommend Ahtsham Ali for web frontend development positions. Their expertise in ReactJS and Next.js, combined with their professionalism and dedication, make them an invaluable asset to any team.",
    linkednURL: "#"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
