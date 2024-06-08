import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'html & css', level: 4 },
  { name: 'javascript', level: 9 },
  { name: 'ES6 & React', level: 6 },
  { name: 'Node.js and Express.js', level: 8 },
  { name: 'python', level: 5 },
  { name: 'Django', level: 6 },
  { name: 'Rasa', level: 4 },
];


const SkillsBarChart = () => {
  return (
    <>
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="level" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
    </>
  );
};

export default SkillsBarChart;
