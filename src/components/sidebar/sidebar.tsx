import { navItems } from '@/config/constants'
import { Avatar, Box, Button, Divider, Typography } from '@mui/material'
import { format } from 'date-fns'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import { calculateEstimatedTimeToRead } from '../../helpers/time.format'
import { SidebarProps } from './sidebar.props'

const Sidebar = ({ latestBlogs, categories }: SidebarProps) => {
  const router = useRouter()
  return (
    <>
      <Box width={{ xs: "100%", md: "30%" }} style={{ cursor: "pointer" }} top={100}>
        <Box position={'sticky'} top={'100px'} sx={{ transition: 'all .3s ease' }}>
          <Box padding={"20px"} border={"1px solid gray"} borderRadius={"8px"}>
            <Typography variant='h5'>Latest Projects</Typography>
            <Box sx={{ display: 'flex', flexDirection: "column", marginTop: '20px' }}>
              {latestBlogs.map(item => (
                <Box marginTop={"20px"} key={item.title} onClick={() => router.push(`/blog/${item.slug}`)}>
                  <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
                    <Image src={item.image.url} alt={item.title} width={100} height={100} style={{ objectFit: "cover", borderRadius: "8px" }} />
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <Typography variant='body1'>{item.title}</Typography>
                      <Box sx={{ display: 'flex', gap: '10px' }}>
                        <Avatar alt={item.author.name} src={item.author.avatar.url} />
                        <Box>
                          <Typography>{item.author.name}</Typography>
                          <Box>{format(new Date(item.createdAt), 'd.MM.yy')} &#x2022; {calculateEstimatedTimeToRead(item.description.text)} min read</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Divider sx={{ marginTop: "20px" }} />
                </Box>
              ))}
            </Box>
          </Box>

          <Box marginTop={"20px"} padding={"20px"} border={"1px solid gray"} borderRadius={"8px"}>
            <Typography variant='h5'>Category</Typography>
            <Box sx={{ display: 'flex', flexDirection: "column", marginTop: '20px' }}>
              {categories.map(nav => (
                <Fragment key={nav.slug}>
                  <Button onClick={() => router.push(`/category/${nav.slug}`)} sx={{ justifyContent: "flex-start", height: "50px" }} style={{ color: "white" }} fullWidth >{nav.label}</Button>
                  <Divider />
                </Fragment>
              ))}
            </Box>
          </Box>

        </Box>
      </Box>
    </>
  )
}

export default Sidebar