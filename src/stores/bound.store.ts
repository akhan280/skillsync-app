import { create } from "zustand";
import createChatSlice, { chatSliceType } from "./chat.slice";
import { createExperienceSlice, experienceSliceType } from "./experiences.slice";
import { createResumeSlice, resumeSliceType } from "./resume.slice";

type boundStore = chatSliceType & experienceSliceType & resumeSliceType;

export const useBoundStore = create<boundStore>((set, get) => ({
  ...createChatSlice(set, get),
  ...createExperienceSlice(set, get),
  ...createResumeSlice(set, get),
}));
