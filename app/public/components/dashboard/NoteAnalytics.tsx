'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/SummaryCardUI';
import { HoverCard, HoverCardContent } from '@radix-ui/react-hover-card';
import { HoverCardTrigger } from '@/components/ui/hover-card';


export function AnalyticCard() {
  return (
    <Card className="w-[30%]">
      <CardHeader>
        <CardTitle>Top Notes by Interactions</CardTitle>
        <div className='text-center pt-3'>
        <CardDescription className='pt-4'>Total Interactions</CardDescription>
        <CardTitle className='text-2xl'>2,985</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="">
      </CardContent>
    </Card>
  );
}
