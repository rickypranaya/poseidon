import React, { PureComponent } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  CartesianAxis,
} from 'recharts'

const dataa = [
  {
    name: '6:00 am',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '7:00 am',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '8:00 am',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '9:00 am',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '10:00 am',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '11:00 am',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '12:00 pm',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '1:00 pm',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2:00 pm',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '3:00 pm',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '4:00 pm',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '5:00 pm',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '6:00 pm',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '7:00 pm',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '8:00 pm',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '9:00 pm',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '10:00 pm',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '11:00 pm',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '12:00 am',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '1:00 am',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '2:00 am',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '3:00 am',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '4:00 am',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '5:00 am',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
]

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

export default function Chart(props: {
  value: any
  data: any
  type: any
  range: any
}) {
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
