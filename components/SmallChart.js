import React from 'react'
import { AreaChart, Area, ResponsiveContainer, YAxis } from 'recharts'

export default function Chart(props) {
  const { value, data, range } = props
  const color = value == 'increase' ? '#81C995' : '#F8533F'
  return (
    <ResponsiveContainer width="99%" height="100%">
      <AreaChart width={730} height={250} data={data}>
        <defs>
          <linearGradient id="increase" x1="0" y1="-1" x2="0" y2="1">
            <stop offset="5%" stopColor="#81C995" stopOpacity={1} />
            <stop offset="95%" stopColor="#2CD399" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="decrease" x1="0" y1="-1" x2="0" y2="1">
            <stop offset="5%" stopColor="#F8533F" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#F8533F" stopOpacity={0} />
          </linearGradient>
        </defs>
        <YAxis type="number" domain={range} hide={true} />

        <Area
          type="natural"
          dataKey="amt"
          stroke={color}
          fillOpacity={1}
          fill={value == 'increase' ? 'url(#increase)' : 'url(#decrease)'}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
