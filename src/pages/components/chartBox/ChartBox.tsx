import { Link } from "react-router-dom";
import "./chartBox.scss";
import { Line, LineChart, ResponsiveContainer } from "recharts";


export default function ChartBox() {

 const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 4500,
        pv: 1400,
        amt: 3400,
    },
    {
        name: 'Page C',
        uv: 4050,
        pv: 4400,
        amt: 2400,
    },
    {
        name: 'Page D',
        uv: 2050,
        pv: 4400,
        amt: 5400,
    },
    {
        name: 'Page E',
        uv: 6050,
        pv: 2400,
        amt: 1400,
    }
 ]



  return (
    <div className="chartBox">
       <div className="boxInfo">
            <div className="title">
                <img src="/user.svg" alt="" />
                <span>Total Users</span>
            </div>
            <h1>1,600</h1>
            <Link to="/">View All</Link>
       </div>
       <div className="chartInfo">
          <div className="chart">
        
        <ResponsiveContainer width="100%" height="100%"> 
         <LineChart width={300} height={100} data={data}> 
            <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
         </LineChart>
        </ResponsiveContainer>




          </div>
          <div className="texts">
             <span className="percentage">45%</span>
             <span className="duration">this month</span>
          </div>
       </div>
    </div>
  )
}
