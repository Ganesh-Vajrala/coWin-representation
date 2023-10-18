import {Component} from 'react'
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

export default class VaccinationByAge extends Component {
  render() {
    const {data} = this.props
    console.log(data)
    return (
      <div className="vaccinationByAge-main-container">
        <h1 className="vaccinationByAge-main-head">Vaccination by age</h1>
        <ResponsiveContainer width="100%" height={360}>
          <PieChart>
            <Pie
              data={data}
              startAngle={0}
              endAngle={360}
              outerRadius="70%"
              dataKey="count"
            >
              <Cell name="18-44" fill="#2d87bb" />
              <Cell name="44-60" fill="#a3df9f" />
              <Cell name="Above 60" fill="#64c2a6" />
            </Pie>
            <Legend iconType="circle" />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
