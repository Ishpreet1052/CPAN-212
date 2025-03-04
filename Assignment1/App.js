const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cors());


const education = [
  { College: 'Humber Polytechnic', Degree: 'Advanced-Diploma', Field: 'Computer Programming'                                                 , Duration: '3 years' },
];

const skills = [
  { category: 'Programming Languages', skills: 'C++, Python, Java, TypeScript' },
  { category: 'Operating Systems', skills: 'Windows, Linux' },
  { category: 'Web Development', skills: 'React, Angular, Node.js' },
  { category: 'Database Management', skills: 'MySQL, PostgreSQL, Firebase' },
  { category: 'Data Visualization', skills: 'Tableau, Google Data Studio' },
  { category: 'Machine Learning', skills: 'Deep learning models, model optimization, data preprocessing using TensorFlow, Keras, NumPy, Pandas' },
  { category: 'Agile Methodology', skills: 'Scrum methodologies, sprint planning, daily stand-ups, and retrospective meetings for iterative software development' },
  { category: 'Soft Skills', skills: 'Critical thinking, leadership, adaptability, strong collaboration, and time management in dynamic environments' },
];

const experience = [
  { company: 'Loblaws', role: 'Customer Service Associate', years: '2022-2024' },
];

const overview = {
  name: 'Ishpreet Singh',
  about: 'Software developer passionate about backend development and cloud computing, currently studying Software Development and Networking at Seneca College.',
};

const projects = [
  {
    name: 'AI Chatbot',
    description:
      'Developed an AI-powered chatbot for customer support, leveraging natural language processing (NLP) techniques. Enhanced response accuracy by 20% through continuous training on real user queries and feedback.',
  },
  {
    name: 'Cloud-Based Inventory System',
    description:
      'Built a scalable cloud-based inventory management system using AWS and Firebase. Integrated real-time analytics to help businesses track stock levels, reducing inventory waste by 25%.',
  },
];
  
  app.get('/getProjects', (req, res) => {
    res.json(projects);
  });
  

app.get('/getEdu', (req, res) => {
  res.json(education);
});
app.get('/getSkills', (req, res) => {
  res.json(skills);
});

app.get('/getExp', (req, res) => {
  res.json(experience);
});

app.get('/getOverview', (req, res) => {
  res.json(overview);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
