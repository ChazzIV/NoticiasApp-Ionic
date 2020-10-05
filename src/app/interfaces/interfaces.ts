export interface RespuestaToHeardlines {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: Source;
  author?: string;
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content?: string;
}

export interface Source {
  id?: string;
  name: string;
}


// cupolink
// interface RootObject {
//   id: number;
//   date: string;
//   date_gmt: string;
//   guid: Guid;
//   modified: string;
//   modified_gmt: string;
//   slug: string;
//   status: string;
//   type: string;
//   link: string;
//   title: Guid;
//   content: Content;
//   featured_media: number;
//   comment_status: string;
//   ping_status: string;
//   template: string;
//   'coupon-category': number[];
//   'coupon-store': number[];
//   _links: Links;
// }

// interface Links {
//   self: Self[];
//   collection: Self[];
//   about: Self[];
//   replies: Reply[];
//   'wp:featuredmedia': Reply[];
//   'wp:attachment': Self[];
//   'wp:term': Wpterm[];
//   curies: Cury[];
// }

// interface Cury {
//   name: string;
//   href: string;
//   templated: boolean;
// }

// interface Wpterm {
//   taxonomy: string;
//   embeddable: boolean;
//   href: string;
// }

// interface Reply {
//   embeddable: boolean;
//   href: string;
// }

// interface Self {
//   href: string;
// }

// interface Content {
//   rendered: string;
//   protected: boolean;
// }

// interface Guid {
//   rendered: string;
//  }