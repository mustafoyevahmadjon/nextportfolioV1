import { Box } from '@mui/material';
import { GetServerSideProps } from 'next';
import { Content, Sidebar } from '@/components';
import { BlogsType } from '@/interface/blogs.interface';
import { CategoryType } from '@/interface/categories.interface';
import Layout from '@/layout/layout';
import { BlogsService } from '@/services/blog.service';
import SEO from '@/seo/seo';
import { useRouter } from 'next/router';

const CategoryDetailedPage = ({ blogs, latestBlogs, categories }: DetailedCategoriesPageProps) => {
    const router = useRouter()
    return (
        <SEO metaTitle={`${router.query.slug}-category`}>
            <Layout>
                <Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' }, padding: '20px' }}>
                    <Sidebar latestBlogs={latestBlogs} categories={categories} />
                    <Content blogs={blogs} />
                </Box>
            </Layout>
        </SEO>
    )
}

export default CategoryDetailedPage

export const getServerSideProps: GetServerSideProps<DetailedCategoriesPageProps> = async ({ query }) => {
    const blogs = await BlogsService.getDetaieldCateogriesBlog(query.slug as string);
    const latestBlogs = await BlogsService.getLatestBlog();
    const categories = await BlogsService.getCategories();

    return {
        props: {
            blogs,
            latestBlogs,
            categories,
        },
    };
};

interface DetailedCategoriesPageProps {
    blogs: BlogsType[];
    latestBlogs: BlogsType[];
    categories: CategoryType[];
}