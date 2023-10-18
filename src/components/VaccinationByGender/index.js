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

export default class VaccinationByGender extends Component {
  render() {
    const {data} = this.props
    return (
      <div className="vaccinationByGender-main-container">
        <h1 className="vaccinationByGender-main-head">Vaccination by gender</h1>
        <ResponsiveContainer width="100%" height={360}>
          <PieChart>
            <Pie
              data={data}
              startAngle={180}
              endAngle={0}
              innerRadius="40%"
              outerRadius="70%"
              dataKey="count"
            >
              <Cell name="Male" fill=" #f54394" />
              <Cell name="Female" fill="#5a8dee" />
              <Cell name="Others" fill="#2cc6cc" />
            </Pie>
            <Legend iconType="circle" />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
