'use client';

import React from 'react';
import { SquarePlus } from 'lucide-react';
import { Button } from '../../../../components/ui/button';

export default function FilePreview() {
  return (
    <div className="flex mt-2 h-40 w-40 rounded-sm border border-slate-400 items-center place-content-center">
    <Button variant="ghost">
      <SquarePlus />
    </Button>
    </div>
  );
}
