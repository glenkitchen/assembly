type State = {
  hideNavigationBar: boolean;
  hideStatusBar: boolean;
  currentWorkSpaceId: string;
};

export const state: State = {
  hideNavigationBar: false,
  hideStatusBar: false,
  currentWorkSpaceId: 'tenantInfo',
};
