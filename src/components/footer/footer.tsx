import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { format } from 'date-fns';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link';

const Footer = () => {
  return (
    <Box
      padding={'20px'}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#141414',
        color: 'white',
      }}
    >
      <Typography>© {format(new Date(), 'yyyy')} Ahmadjon. All Right Reserved.</Typography>
      <Box sx={{ display: 'flex', gap: '15px' }}>
        <Link target='_blank' href={`https://t.me/Mfavy2031`}>
          <TelegramIcon sx={{ cursor: 'pointer' }} />
        </Link>
        <Link target='_blank' href={`https://www.instagram.com/ahmadjon23012/`}>
          <InstagramIcon sx={{ cursor: 'pointer' }} />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;