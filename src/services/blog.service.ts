import {BlogsType} from "@/interface/blogs.interface";
import {request, gql} from "graphql-request"
import {CategoryType} from "@/interface/categories.interface";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const BlogsService = {
    async getAllBLogs() {
        const query = gql`
			query GetBlogs {
				blogs {
					excerpt
					id
					slug
					title
					createdAt
					image {
						url
					}
                    author {
                        ... on Author {
                          id
                          name
                          avatar {
                            url
                          }
                        }
                      }
					category {
						label
						slug
					}
					description {
						text
					}
				}
			}
		`;

        const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query);
        return result.blogs;
    },

    async getLatestBlog() {
        const query = gql`
			query GetLatestBlog {
				blogs(last: 3) {
					id
					slug
					title
					createdAt
					image {
						url
					}
					description {
						text
					}
                    author {
                        ... on Author {
                          id
                          name
                          avatar {
                            url
                          }
                        }
                      }
				}
			}
		`;

        const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query);
        return result.blogs;
    },

    async getCategories() {
        const query = gql`
			query GetCategories {
				categories { 
					slug
					label
				}
			}
		`;

        const result = await request<{ categories: CategoryType[] }>(graphqlAPI, query);
        return result.categories;
    },

    async getDetailedBlogs(slug: string) {
        const query = gql`
			query GetDetailedBlog($slug: String!) {
				blog(where: { slug: $slug }) {
					excerpt
					id
					slug
					title
					createdAt
					image {
						url
					}
				    author {
                        ... on Author {
                          name
                          avatar {
                            url
                          }
                        }
                      }
					category {
						label
						slug
					}
					description {
						html
						text
					}
				}
			}
		`;

        const result = await request<{ blog: BlogsType }>(graphqlAPI, query, {slug});
        return result.blog;
    },

    async getDetaieldCateogriesBlog(slug: string) {
        const query = gql`
			query getCategoriesBlog($slug: String!) {
				blogs(where: { category: { slug: $slug } }) {
					excerpt
					id
					slug
					title
					createdAt
					image {
						url
					}
				    author {
                        ... on Author {
                          name
                          avatar {
                            url
                          }
                        }
                      }
					category {
						label
						slug
					}
					description {
						text
					}
				}
			}
		`;

        const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query, {slug});
        return result.blogs;
    }
}