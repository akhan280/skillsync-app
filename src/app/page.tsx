import { SkillSyncLogo } from '@/components/logo-adjustable';
import HeroText from '@/components/hero-text';
import ContinueButton from '@/components/continue-button';
import FeatureText from '@/components/feature-stills';


export default function Home() {

  return (
    <> 
      <div className="flex flex-col items-center justify-center">

        <SkillSyncLogo className ="py-24 my-24" size='large' />

        <div className="my-3">
          <HeroText/>
        </div>

        <ContinueButton route='role-input' number="1" />

        <div className = "flex flex-row items-center mt-24 lg:px-32" >
          <FeatureText/>
        </div>

        <div className="my-24 color-black">
          <div>Made with love by EECS 497 KTP</div>
        </div>
      </div>
    </>
  );
}