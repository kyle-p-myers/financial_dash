'use client'

import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicBars() {
  return (
    <>
    <div className='ml-10'>
    <div className='text-center'>
        <h2>Top Note Creators</h2>
    </div>
    <BarChart
    layout="horizontal"
      yAxis={[{ scaleType:'band', data: ['Kyle', 'Cris', 'Tim']}]}
      series={[{ data: [21,18,20] }]}
      width={500}
      height={320}
      
    />
    </div>
    </>
  );
}