import React from 'react'
import Layout from '../components/Layouts/Layout'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,} from '@mui/material';
export default function Contact() {
  return (
    <Layout>
   <Box sx={{ my:5 ,ml:10 , '& h4':{fontWeight:'bold',mb:2}}}>
    <Typography variant='h4'>
      Contact My Resturant
    </Typography>
    <p>
      Lorem ipsum, dolor sit amet 
      consectetur adipisicing elit.
       Modi quia rem omnis sunt 
       libero itaque, facere aut 
       obcaecati, id temporibus 
       dolore optio repellendus 
       dolorum cupiditate 
       praesentium a magnam 
       recusandae. Ad est qui excepturi facere quisquam voluptatibus. Nisi unde, 
       tempore quo aperiam deleniti totam praesentium ullam exercitationem commodi. Quod laboriosam distinctio dolore ipsum, 
       laudantium cum architecto odio. Maxime, alias! Ipsam ullam numquam amet, facilis voluptatibus magni qui, sed obcaecati laboriosam laborum iure 
       accusantium, commodi cumque mollitia architecto rerum 
      inventore veritatis voluptatem.
    </p>
   </Box>
   <Box sx={{m:3,width:'600px',ml:10, '@media (max-width:600px)':{
    width:'300px',
    
   }}}>
    <TableContainer component={Paper}>
      <Table aria-label='contact table'>
        <TableHead>
          <TableRow>
           <TableCell sx={{bgcolor:'black',color:'white'}} align='center'>
            Contact Details 
           </TableCell>
          </TableRow>

        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <SupportAgentIcon sx={{color:'red',pt:1}}/> 1234 56789
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <EmailIcon sx={{color:'green',pt:1}}/> support@gmail.com
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <PhoneIcon sx={{color:'blue',pt:1}}/> 1234567898
            </TableCell>
          </TableRow>
        </TableBody>

      </Table>

    </TableContainer>
   </Box>

    </Layout>
  )
}
