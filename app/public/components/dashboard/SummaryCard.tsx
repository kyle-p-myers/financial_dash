'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/SummaryCardUI';
import { HoverCard, HoverCardContent } from '@radix-ui/react-hover-card';
import { HoverCardTrigger } from '@/components/ui/hover-card';


export function SummaryCard() {
  return (
    <Card className="w-[30%]">
      <CardHeader>
        <CardTitle>Note Summary</CardTitle>
      </CardHeader>
      <CardContent className="">
        <div className="grid w-full gap-2">
          <div className="flex h-10 items-center justify-between rounded-xl bg-purple-200">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link">Personal</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-white p-4 rounded-lg border border-purple-200">
                <div className="flex justify-between">
                  <div className="">
                    <h4 className="text-md font-semibold text-black">Top Creators</h4>
                    <ul className=' text-sm font-light text-black pb-2'>
                      <li>Kyle Myers</li>
                      <li>Cris Arendell</li>
                      <li>Tim Myers</li>
                    </ul>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <div className='flex p-2'>
              85
            </div>
          </div>
          <div className="flex h-10 items-center justify-between rounded-xl bg-purple-300">
          <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link">Team</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-white p-4 rounded-lg border border-purple-200">
                <div className="flex justify-between">
                  <div className="">
                    <h4 className="text-md font-semibold text-black">Top Creators</h4>
                    <ul className=' text-sm font-light text-black pb-2'>
                      <li>Development</li>
                      <li>Accouting</li>
                      <li>Marketing</li>
                    </ul>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <div className='flex p-2'>
              347
            </div>
          </div>
          <div className="flex h-10 items-center justify-between rounded-xl bg-purple-400">
          <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link">Organization</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-white p-4 rounded-lg border border-purple-200">
                <div className="flex justify-between">
                  <div className="">
                    <h4 className="text-md font-semibold text-black">Top Creators</h4>
                    <ul className=' text-sm font-light text-black pb-2'>
                      <li>Pidge</li>
                      <li>Microsoft</li>
                      <li>Aires</li>
                    </ul>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <div className='flex p-2'>
              851
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
