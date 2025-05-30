import { useTranslations } from 'next-intl'
import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  XAxis,
  YAxis
} from 'recharts'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart'
import { toCurrencyString } from '@/utils/to-currency-string'

import { useOwnRoiChart } from './own-roi-chart.hook'

const OwnRoiChart = () => {
  const t = useTranslations('report')

  const { ticks, apiResponse, chartConfig } = useOwnRoiChart()

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('rent_2_own_roi_over_5_years')}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='relative h-full w-full'>
          <ResponsiveContainer className='absolute top-0 left-0 h-full w-full'>
            <ChartContainer
              config={chartConfig}
              style={{ height: ' -webkit-fill-available', width: ' -webkit-fill-available' }}
            >
              <RechartsLineChart
                accessibilityLayer
                data={apiResponse.data}
                margin={{
                  left: 20,
                  right: 20
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey='label'
                  tickLine={false}
                  axisLine={false}
                  tickMargin={16}
                  offset={-50}
                  padding={{
                    left: 50,
                    right: 40
                  }}
                />
                <YAxis
                  ticks={ticks}
                  domain={[ticks[0], ticks[ticks.length - 1]]}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => toCurrencyString(value)}
                />
                <ChartLegend verticalAlign='top' content={<ChartLegendContent />} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Line dataKey='fee' stroke='var(--color-orange)' strokeWidth={2} dot={false}>
                  <LabelList
                    position='top'
                    fill='var(--color-orange)'
                    content={({ value, x, y, fill }) => {
                      const text = toCurrencyString(Number(value))
                      return (
                        <g>
                          <rect
                            x={Number(x) - 40}
                            y={Number(y) - 22}
                            width={75}
                            height={14}
                            fill='white'
                            rx={4}
                          />
                          <text
                            x={x}
                            y={y}
                            fill={fill}
                            className='-translate-y-3 text-[10px] font-medium'
                            textAnchor='middle'
                          >
                            {text}
                          </text>
                        </g>
                      )
                    }}
                  />
                </Line>
                <Line dataKey='roi' stroke='var(--color-blue-dark)' strokeWidth={2} dot={false}>
                  <LabelList
                    position='top'
                    fill='var(--color-blue-dark)'
                    content={({ value, x, y, fill }) => {
                      const text = toCurrencyString(Number(value))
                      return (
                        <g>
                          <rect
                            x={Number(x) - 40}
                            y={Number(y) - 22}
                            width={75}
                            height={14}
                            fill='white'
                            rx={4}
                          />
                          <text
                            x={x}
                            y={y}
                            fill={fill}
                            className='-translate-y-3 text-[10px] font-medium'
                            textAnchor='middle'
                          >
                            {text}
                          </text>
                        </g>
                      )
                    }}
                  />
                </Line>
              </RechartsLineChart>
            </ChartContainer>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export default OwnRoiChart
