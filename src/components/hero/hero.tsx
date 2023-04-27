import { Avatar, Box, Typography } from '@mui/material'
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { format } from 'date-fns';
import { calculateEstimatedTimeToRead } from '../../helpers/time.format';
import { HeroProps } from './hero.props';
import { useRouter } from 'next/router';

const Hero = ({ blogs }: HeroProps) => {
    const router = useRouter()
    return (
        <Box width={"100%"} mt={"7vh"} height={"70vh"} sx={{}}>
            <Carousel responsive={{
                mobile: {
                    breakpoint: { max: 4000, min: 0 },
                    items: 1,
                },
            }}>
                {blogs.map(item => (
                    <Box key={item.id} sx={{ cursor: 'pointer' }} onClick={() => router.push(`/blog/${item.slug}`)}>
                        <Box sx={{ position: "relative", width: "100%", height: "70vh" }}>

                            <Image src={item.image.url} alt={item.title} fill style={{ objectFit: 'cover' }} />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 0, 0, .6)',
                                }}
                            />
                            <Box width={{ xs: '100%', md: '70%' }} sx={{ top: '50%', transform: 'translateY(-50%)', paddingLeft: { xs: '10px', md: '50px' } }} position={"relative"} color={"white"} zIndex={999}>
                                <Typography sx={{ fontSize: { xs: '30px', md: '50px' } }}>{item.title}</Typography>
                                <Typography color={'gray'} sx={{ fontSize: { xs: '20px', md: '25px' } }}>
                                    {item.excerpt.slice(0,61)}
                                </Typography>
                                <Box sx={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                                    <Avatar alt={item.author.name} src={item.author.avatar.url} />
                                    <Box>
                                        <Typography>{item.author.name}</Typography>
                                        <Box>{format(new Date(item.createdAt), 'd.MM.yy')} &#x2022; {calculateEstimatedTimeToRead(item.description.text)} min read</Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Carousel>
        </Box>
    )
}

export default Hero