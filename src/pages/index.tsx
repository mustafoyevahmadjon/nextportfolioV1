import Layout from '@/layout/layout'
import { Content, Hero, Sidebar } from '@/components'
import { Box } from '@mui/material'
import { BlogsService } from '@/services/blog.service'
import { GetServerSideProps } from 'next'
import { BlogsType } from '@/interface/blogs.interface'
import { CategoryType } from '@/interface/categories.interface'
import SEO from '@/seo/seo'

const IndexPage = ({ blogs, latestBlogs, categories }: HomePageProps) => {
  return (
    <div className='h-32 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
      <SEO>
        <Layout>
          <Hero blogs={blogs.slice(0, 3)} />
          <Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' }, padding: '20px' }}>
            <Sidebar latestBlogs={latestBlogs} categories={categories} />
            <Content blogs={blogs} />
          </Box>
        </Layout>
      </SEO>
    </div>
  )
}

export default IndexPage

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const blogs = await BlogsService.getAllBLogs();
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

interface HomePageProps {
  blogs: BlogsType[];
  latestBlogs: BlogsType[];
  categories: CategoryType[];
}