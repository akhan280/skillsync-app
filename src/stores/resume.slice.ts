import { Experience } from './experiences.slice';

export interface ResumeStoreState {
  imports: string;
  header: string;
  education: string;
  experiences: Experience[];
  skills: string;
}

export interface ResumeStoreActions {
  setImports: (imports: string) => void;
  setHeader: (header: string) => void;
  setEducation: (education: string) => void;
  setExperiences: (experiences: Experience[]) => void;
  setSkills: (skills: string) => void;
}

export type resumeSliceType = ResumeStoreState & ResumeStoreActions;

export const createResumeSlice = (set: any, get: any): resumeSliceType => ({
  imports: '',
  header: '',
  education: '',
  experiences: [],
  skills: '',

  setImports: (imports: string) => set({ imports }),
  setHeader: (header: string) => set({ header }),
  setEducation: (education: string) => set({ education }),
  setExperiences: (experiences: Experience[]) => set({ experiences }),
  setSkills: (skills: string) => set({ skills }),
});
