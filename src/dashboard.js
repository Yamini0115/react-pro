import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie,Cell } from "recharts";


const data = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 7000 },
  { name: "May", sales: 6000 },
];


const data1 = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 7000 },
    { name: "May", sales: 6000 },
  ];

  const COLORS = ["#4F46E5", "#6366F1", "#818CF8", "#A5B4FC", "#C7D2FE"];
export default function Dashboard() {
  return (
    <div className="p-6 max-w-4xl mx-auto" style={{backgroundColor:"black",height:"900px",marginTop:"-30px"}}>
        <div style={{backgroundColor:"purple"}}>
      <h2 className="text-2xl font-bold text-center mb-4" style={{color:"white",textAlign:"center",fontSize:"50px"}}>Sales Dashboard</h2>
      <div className="bg-white p-4 shadow rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Sales Overview</h3>
        <ResponsiveContainer width="80%" height={300} style={{color:"white",textAlign:"center"}}>
          <BarChart data={data} style={{color:"white"}}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="gray" />
          </BarChart>
        </ResponsiveContainer>
        </div>
      </div>
      
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data1}
              dataKey="sales"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#4F46E5"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
    </div>
  );
}
