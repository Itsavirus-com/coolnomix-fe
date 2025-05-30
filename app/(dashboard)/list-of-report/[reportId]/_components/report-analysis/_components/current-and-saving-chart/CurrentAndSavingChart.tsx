import { useTranslations } from 'next-intl'
import {
  Bar,
  CartesianGrid,
  LabelList,
  BarChart as RechartsBarChart,
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

import { useCurrentAndSavingChart } from './current-and-saving-chart.hook'

export const CurrentAndSavingChart = () => {
  const t = useTranslations('report')

  const { ticks, apiResponse, chartConfig } = useCurrentAndSavingChart()

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('current_usage_vs_savings_potential')}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='relative h-full w-full'>
          <ResponsiveContainer className='absolute top-0 left-0 h-full w-full'>
            <ChartContainer
              config={chartConfig}
              style={{ height: ' -webkit-fill-available', width: ' -webkit-fill-available' }}
            >
              <RechartsBarChart accessibilityLayer data={apiResponse.data}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey='label' tickLine={false} axisLine={false} tickMargin={16} />
                <YAxis
                  ticks={ticks}
                  domain={[ticks[0], ticks[ticks.length - 1]]}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => value.toLocaleString('id-ID')}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent indicator='dashed' />} />
                <ChartLegend verticalAlign='top' content={<ChartLegendContent />} />
                <Bar dataKey='yearly_current_usage_kw' fill='var(--color-orange)' radius={4}>
                  <LabelList
                    position='top'
                    offset={8}
                    fill='var(--color-orange)'
                    fontSize={10}
                    className='font-medium'
                  />
                </Bar>
                <Bar dataKey='yearly_saving_potentials_kw' fill='var(--color-blue-dark)' radius={4}>
                  <LabelList
                    position='top'
                    offset={8}
                    fill='var(--color-blue-dark)'
                    fontSize={10}
                    className='font-medium'
                  />
                </Bar>
              </RechartsBarChart>
            </ChartContainer>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export default CurrentAndSavingChart
