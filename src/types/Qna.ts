export interface IQna {
  id: number;
  memberId: number;
  title: string;
  content: string;
  createdAt: string;
  memberImageUrl: string;
  author: string;
  name: string;
}

export type ChildtagType = {
  childTagId: number;
  name: string;
};

export type ParenttagType = {
  parentTagId: number;
  name: string;
};

export interface ITag {
  childTags: ChildtagType[];
  questionPosts: IQna[];
}