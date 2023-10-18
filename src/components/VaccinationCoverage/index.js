import {Component} from 'react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'
import './index.css'

export default class VaccinationCoverage extends Component {
  render() {
    const {data} = this.props
    const DataFormatter = number => {
      if (number > 1000) {
        return `${(number / 1000).toString()}k`
      }
      return number.toString()
    }
    return (
      <div className="vaccinationCoverage-main-container">
        <h1 className="vaccinationCoverage-main-head">Vaccination Coverage</h1>
        <ResponsiveContainer width="100%" height={460}>
          <BarChart data={data} margin={{top: 2}} width={1000} height={400}>
            <XAxis
              dataKey="vaccine_date"
              tick={{
                stroke: 'gray',
                strokeWidth: 1,
              }}
            />
            <YAxis
              tickFormatter={DataFormatter}
              tick={{
                stroke: 'gray',
                strokeWidth: 0,
              }}
            />
            <Legend wrapperStyle={{padding: 30}} />
            <Tooltip />
            <Bar
              dataKey="dose_1"
              fill="#5a8dee"
              name="dose 1"
              className="custom-bar"
            />
            <Bar dataKey="dose_2" fill="#f54394" name="dose 2" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
