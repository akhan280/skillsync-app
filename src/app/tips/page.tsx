'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { SkillSyncLogo } from '@/components/logo-adjustable';
import HeaderText from '@/components/header-text';
import ContinueButton from '@/components/continue-button';

export default function Tips() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">

      <SkillSyncLogo className="pl-12 pt-12" size="medium" />

      <div className="pt-6 pb-6">
        <HeaderText
          text="Here are some tips for success in your new role"
          size="large"
        />
      </div>

      <div className="flex w-full justify-between px-12">

        <ShadedBox
          title="Interview Tips"
          text="Some helpful tips for interviews"
          width="1/4"
          height="200"
        />

        <ShadedBox
          title="Networking Tips"
          text="Build a strong professional network"
          width="3/4"
          height="1/2"
        />

        <ShadedBox
          title="Words of Encouragement!"
          text="It takes the average job seeker 300 applications to get an interview. Don’t give up!"
          width="3/4"
          height="1/2"
        />
      </div>

      <div className="mt-4">
        <Link href="/7-complete">
          <ContinueButton number="6" />
        </Link>
      </div>
    </div>
  );
}

interface ShadedBoxProps {
  title: string;
  text: string;
  width: string;
  height: string;
}

const ShadedBox: React.FC<ShadedBoxProps> = ({ title, text, width, height }) => {
  return (
    <div className={`bg-gray-100 p-6 rounded-lg w-${width} h-${height}`}>
      <p className="text-center font-bold">{title}</p>
      <p className="text-center">{text}</p>
    </div>
  );
};