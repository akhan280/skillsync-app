export interface Experience {
  title: string;
  points: string[];
}

export interface Experiences {
  experiences: Experience[];
}

export interface ExperienceStoreState {
  experiences: Experience[];
}

export interface ExperienceStoreActions {
  updateTitle: (index: number, title: string) => void;
  updatePoint: (expIndex: number, pointIndex: number, point: string) => void;
  setSingleExperience: (inputExperience: Experience) => void;
  setExperiences: (inputExperiences: Experience[]) => void;
}

export type experienceSliceType = ExperienceStoreState & ExperienceStoreActions;

export const createExperienceSlice = (set: any, get: any): experienceSliceType => ({
  experiences: [],

  updateTitle: (index: number, title: string) => set(() => {
    const updatedExperiences = [...get().experiences];
    updatedExperiences[index] = { ...updatedExperiences[index], title };
    return { experiences: updatedExperiences };
  }),

  updatePoint: (expIndex: number, pointIndex: number, point: string) => set(() => {
    const updatedExperiences = [...get().experiences];
    const updatedPoints = [...updatedExperiences[expIndex].points];
    updatedPoints[pointIndex] = point;
    updatedExperiences[expIndex] = { ...updatedExperiences[expIndex], points: updatedPoints };
    return { experiences: updatedExperiences };
  }),

  setSingleExperience: (inputExperience: Experience) => set(() => ({
    experiences: [...get().experiences, inputExperience],
  })),

  setExperiences: (inputExperiences: Experience[]) => set(() => ({ experiences: inputExperiences })),
});
