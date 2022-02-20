import React, { PureComponent } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const CustomTooltip = ({ active, payload, label, type }) => {
  if (active && payload && payload.length && type) {
    let tooltip
    switch (type) {
      case 'Market Cap':
        tooltip = `${payload[0].value}M`
        break

      case 'Number of Sales':
        tooltip = Number(payload[0].value).toLocaleString()
        break

      case 'Sales USD':
        tooltip = `$${payload[0].value}M`
        break

      case 'Average USD':
        tooltip = `$${Number(payload[0].value).toLocaleString()}`
        break

      case 'Active Wallet':
        tooltip = Number(payload[0].value).toLocaleString()
        break

      default:
        break
    }
    return (
      <div className="flex items-center rounded bg-dark-darker px-3 py-0.5">
        <div>{tooltip}</div>
        <div className="pl-2 text-sm text-gray-400">{label} </div>
      </div>
    )
  }

  return null
}

export default function Chart(props) {
  const { value, data, type, range } = props
  const color = value == 'increase' ? '#81C995' : '#F8533F'
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={40}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
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
        <CartesianGrid vertical={false} stroke="gray" strokeWidth={0.3} />
        <YAxis
          type="number"
          domain={range}
          stroke="#989FAB"
          strokeWidth="0"
          fontSize={'14px'}
        />
        <XAxis
          dataKey="name"
          stroke="#989FAB"
          strokeWidth="0"
          fontSize={'14px'}
        />
        <Tooltip content={<CustomTooltip type={type} />} />
        <Area
          baseLine={8}
          dataKey="amt"
          stroke={color}
          fillOpacity={1}
          fill={value == 'increase' ? 'url(#increase)' : 'url(#decrease)'}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
