export type Post = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
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
  slug: {
    _type: string;
    current: string;
  };
  title: string;
};
