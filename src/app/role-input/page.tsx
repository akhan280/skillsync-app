import { SkillSyncLogo } from '@/components/logo-adjustable';
import HeaderText from '@/components/header-text';
import RoleInput from "./role-input";

export default function InputYourRole() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <SkillSyncLogo className="absolute top-0 pt-12" size="medium" />
      <HeaderText text="What brings you here?" size="large" />
      <div className="my-4"></div>
      <RoleInput />
    </div>
  );
}