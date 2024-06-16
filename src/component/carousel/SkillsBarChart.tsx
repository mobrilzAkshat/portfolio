import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "html & css", level: 4 },
  { name: "javascript", level: 11 },
  { name: "ES6 & React", level: 6 },
  { name: "Node.js and Express.js", level: 10 },
  { name: "python", level: 7 },
  { name: "Django", level: 6 },
  { name: "Rasa", level: 4 },
];

const SkillsBarChart = () => {
  return (
    <>
      <div className="flex">
        <div className="flex-1 ">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="level" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex-1">
          <ol>
            <li className="border-b-2 text-3xl border-r-black border-r-4 pt-8">I'm <span className="font-semibold">master</span> of the universe</li>
            <li className="border-b-2 text-3xl border-r-green-500 border-r-4 pt-8"><span className="font-semibold">High.</span>I'm preety good</li>
            <li className="border-b-2 text-3xl border-r-lime-500 border-r-4 pt-8"><span className="font-semibold">Medium.</span>I'm trying to improve</li>
            <li className="border-b-2 text-3xl border-r-yellow-500 border-r-4 pt-8"><span className="font-semibold">Basic.</span>You can't always win</li>
            <li className="border-b-2 text-3xl border-r-red-500 border-r-4 pt-8"><span className="font-semibold">Uh!</span>Next Question?</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default SkillsBarChart;
