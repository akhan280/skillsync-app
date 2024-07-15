export interface Role {
  role_name: string;
  description: string;
}

export interface SuggestedRolesData {
  roles: Role[];
}

export interface Tip {
  tip_number: string;
}

export interface TipsData {
  tips: Tip[];
}

export interface ChatStoreState {
  SuggestedRolesData: SuggestedRolesData | null;
  currentRole: Role | null;
  selectedRole: Role | null;
  tipsData: TipsData | null;
}

export interface ChatStoreActions {
  setSuggestedRolesData: (data: SuggestedRolesData) => void;
  setCurrentRole: (role: Role) => void;
  setSelectedRole: (role: Role) => void;
  setTipsData: (data: TipsData) => void;
}

export type chatSliceType = ChatStoreState & ChatStoreActions;

const createChatSlice = (set: any, get: any): chatSliceType => ({
  SuggestedRolesData: null,
  currentRole: null,
  selectedRole: null,
  tipsData: null,

  setTipsData: (data: TipsData) => set({ tipsData: data }),
  setCurrentRole: (role: Role) => set({ currentRole: role }),
  setSelectedRole: (role: Role) => set({ selectedRole: role }),
  setSuggestedRolesData: (data: SuggestedRolesData) => set({ SuggestedRolesData: data }),
});

export default createChatSlice;
