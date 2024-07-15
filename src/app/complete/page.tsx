import HeaderText from '@/components/header-text';
import { SkillSyncLogo } from '@/components/logo-adjustable';

export default function Complete() {

  return (
    <div>

      <SkillSyncLogo className="pl-12 pt-12 pb-12" size="large" />

      <HeaderText text="Thank You For Using SkillSync!" size="large"/>
      <div className="my-3"></div>

      <div className="py-2 px-2 flex flex-row items-center text-center justify-center">
        <h1 className="font-neue-haas font-normal tracking-wide text-gray-800 text-3xl leading-tight">
          Thank You For Using SkillSync!
        </h1>
      </div>

      <div className="my-3"></div>
    </div>
  );
}