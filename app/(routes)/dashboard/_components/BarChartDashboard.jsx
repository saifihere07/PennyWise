'use client';

import React from 'react'
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function BarChartDashboard({ budgetList }) {
    return (
        <div className='border p-5 rounded-lg shadow-md'>
            <h2 className='font-bold text-lg'>Activity</h2>
            {budgetList.length > 0 ? <ResponsiveContainer width={'80%'} height={300}>
                <BarChart className='z-[999]'
                    width={500}
                    height={300}
                    data={budgetList}
                    margin={{
                        top: 7
                    }}>
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='totalSpend' stackId='a' fill='#4845d2' />
                    <Bar dataKey='amount' stackId='a' fill='#C3C2FF' />
                </BarChart>
            </ResponsiveContainer> :
                <div className='flex flex-row gap-8 ml-5'>
                    <div className='h-[250px] w-[600px] mt-2 bg-slate-200 rounded-md  grid grid-cols-4 gap-2 items-end'>
                        <div className='h-[230px] w-[80px] max-sm:w-[40px] bg-slate-300  self-end ml-9 '></div>
                        <div className='h-[130px] w-[80px] max-sm:w-[40px] bg-slate-300  self-end ml-9'></div>
                        <div className='h-[170px] w-[80px] max-sm:w-[40px] bg-slate-300  self-end ml-9'></div>
                        <div className='h-[200px] w-[80px] max-sm:w-[40px] bg-slate-300  self-end ml-9 max-sm:hidden md:hidden '></div>

                    </div>

                </div>



            }
        </div>
    )
}

export default BarChartDashboard