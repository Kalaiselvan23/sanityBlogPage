export type Post = {
  _createdAt: string;
  _id: string;
  _updatedAt: string;
  author: {
    _ref: string;
    _type: string;
  };
  body: {
    _key: string;
    _type: string;
    children: {
      _key: string;
      _type: string;
      marks: string[];
      text: string;
    }[];
    markDefs: any[];
    style: string;
  }[];
  categories: {
    _key: string;
    _ref: string;
    _type: string;
  }[];
  mainImage: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  publishedAt: string;
  description:string;
  title: string;
  comments:Comment[]
};
export type Comment={
  _id:string,
  _createdAt:string,
  _rev:string,
  type:string,
  _updatedAt:string,
  approved:boolean,
  comment:string,
  email:string,
  name:string,
  post:{
    _ref:string,
    type:string,
  }
}