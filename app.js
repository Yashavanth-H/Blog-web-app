const express = require("express");
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static("public"));

//sample data
// Sample data
const stories = [
    {
      category: 'Science Today',
      date: 'Nov 15, 2023',
      title: 'Exploring the Depths of Marine Biology',
      desc: 'Dive into the fascinating world beneath the waves, where scientists uncover the secrets of underwater ecosystems.',
      image: '/images/marine.jpg',
    },
    {
      category: 'Creative Arts Daily',
      date: 'Nov 12, 2023',
      title: 'The Art of Calligraphy: Mastering the Written Word',
      desc: 'A journey through the elegant strokes and timeless beauty of calligraphy, with tips for beginners.',
      image: '/images/calligraphy.jpg',
    },
    {
      category: 'Green Living Magazine',
      date: 'Nov 10, 2023',
      title: 'The Rise of Sustainable Architecture',
      desc: 'Discover how architects are blending nature and design to create eco-friendly buildings that reduce environmental impact.',
      image: '/images/architecture.jpg',
    },
    {
      category: 'Astronomy Monthly',
      date: 'Nov 08, 2023',
      title: 'A Guide to Night Sky Photography',
      desc: 'Capture the splendor of the stars and constellations with expert techniques for stunning night sky photography.',
      image: '/images/sky.jpg',
    },
    {
      category: 'Tech Trends Today',
      date: 'Nov 05, 2023',
      title: 'The Evolution of Electric Vehicles',
      desc: 'Tracing the advancements in electric vehicle technology and the ongoing shift towards sustainable transportation.',
      image: '/images/ev.jpg',
    }
  ];

  app.get('/', (req, res)=>{
    res.render('index', {stories});
  });

  app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
  });