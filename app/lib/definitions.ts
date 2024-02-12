export interface BlogCardTypes {
  id: number;
  name?: string;
  title: string;
  body: string;
  user_id: number;
}

export interface CommentTypes {
  id?: string;
  post_id?: string;
  body: string;
  name: string;
  email: string;
}

export interface UsersTypes {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}
