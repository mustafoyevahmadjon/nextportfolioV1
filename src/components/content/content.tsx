import { Box, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import { format } from 'date-fns'
import Image from 'next/image'
import { ContentProps } from './content.props'
import { calculateEstimatedTimeToRead } from '../../helpers/time.format'
import Link from 'next/link'
// import { useRouter } from 'next/router'

const Content = ({ blogs }: ContentProps) => {
  // const router = useRouter()
  return (
    <Box width={{ xs: '100%', md: '70%' }}>
      {blogs.map(item => (
        <Link key={item.id} href={`/blog/${item.slug}`}>
          <Box sx={{ backgroundColor: "rgba(0,0,0,.5)", padding: "20px", marginTop: "20px", borderRadius: "8px", boxShadow: "0px 8px 16px rgba(255, 255, 255, .1)" }}
          // onClick={() => router.push(`/blog/${item.slug}`)}
          >
            <Box position={"relative"} width={"100%"} height={"50vh"}>
              <Image src={item.image.url} alt={item.title} fill style={{ objectFit: "cover", borderRadius: "10px" }} />
            </Box>
            <Typography variant="h4" marginTop={"30px"}>{item.title}</Typography>

            <Typography variant="body1" marginTop={"10px"} color={'gray'}>{item.excerpt.slice(0,39)}</Typography>
            <Divider sx={{ marginTop: "20px" }} />
            <Box sx={{ display: 'flex', gap: '10px', marginTop: '20px' }} height={{ xs: '30vh', md: '50vh' }}>
              <Avatar alt={item.author.name} src={item.author.avatar.url} />
              <Box>
                <Typography>{item.author.name}</Typography>
                <Box>{format(new Date(item.createdAt), 'd.MM.yy')} &#x2022; {calculateEstimatedTimeToRead(item.description.text)} min read</Box>
              </Box>
            </Box>
          </Box>
        </Link>
      ))}
    </Box>
  )
}

export default Content