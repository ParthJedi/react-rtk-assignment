export interface IPayload {
  id: string;
  title?: string;
  actions?: IActionItem[];
  content?: string;
  completed?: boolean;
  createdAt?: string;
  updatedAt?: string;
  parentListId?: string;
}

export interface IActionType {
  payload: IPayload;
}

export interface IActionItem {
  id: string;
  content?: string;
  completed?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface IActionItemsList {
  id: string;
  title?: string;
  actions?: IActionItem[];
  createdAt?: string;
  updatedAt?: string;
}

export interface IActionItemsListState {
  actionItemsList: IActionItemsList[];
}

export const initialState: IActionItemsList[] = [
  {
    id: "1",
    title: "First List",
    actions: [
      {
        id: "1",
        content: "First action item",
        completed: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: "2",
        content: "Second action item",
        completed: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: "3",
        content: "Third action item",
        completed: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Second List",
    actions: [
      {
        id: "1",
        content: "Alpha action item",
        completed: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: "2",
        content: "Beta action item",
        completed: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
