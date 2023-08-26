import React from 'react'
import Layout from '../components/Layouts/Layout'
import { Box, Typography } from '@mui/material';
export default function About() {
  return (
    <Layout>
      <Box sx ={{
        my:8,
        textAlign:'center',
        p:2,
        '& h4':{
          fontWeight:'bold',
          textAlign:'center',
          my: 1,
          fontSize:'2rem',
        },
        '& p':{
          textAlign: 'justify',
          p:4,

        },
        '@media (max-width:600px)':{
          mt:0,
          p:0,
        },
        
      }}>
        <Typography>
         <h4> Welcome To My Resturant</h4>

        </Typography>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatem provident id debitis sunt. Magnam illo inventore maiores magni eaque deleniti molestias architecto aut, excepturi libero? Numquam et asperiores veniam sapiente error 
          expedita repellendus unde nostrum, quisquam ducimus nobis aperiam ipsa eligendi possimus labore ipsam harum ut fuga saepe. Possimus, deserunt exercitationem sunt mollitia optio culpa expedita vel tenetur, doloremque est ipsum sit nisi aspernatur 
          dolorum sint accusamus quibusdam commodi nesciunt numquam! At officia veniam veritatis doloribus dolores aut nostrum voluptates, repudiandae magni labore voluptatibus nobis provident quia doloremque. Eos mollitia provident excepturi saepe maxime 
          reprehenderit quis temporibus aliquid alias?
        </p>
        <p>
          Lorem ipsum dolor sit amet c
          onsectetur adipisicing elit. 
          lIure corporis quisquam, 
          voluptatibus velit id voluptatum reiciendis voluptate dolorum optio fugit repudiandae sed sit. Tenetur necessitatibus impedit recusandae ut soluta quod voluptatum quis ex placeat reiciendis nostrum nulla doloremque est, vero laborum cupiditate eligendi corrupti omnis, maiores corporis molestias ipsa rem! In corrupti minus autem velit laudantium alias, assumenda dignissimos. Quibusdam, odio voluptates voluptatum adipisci, vero et placeat facere quia aut voluptate
           sint quae non distinctio eum minima culpa dolor sapiente quam laborum, harum commodi praesentium sed exercitationem repellat! Doloremque, atque dolor corrupti ea ipsam aperiam tempore cum vero voluptates animi esse illo deleniti consequatur eveniet repellat suscipit dicta dolorum nam mollitia totam quo amet? Similique earum quis accusamus fuga dicta obcaecati facilis odio corrupti soluta, expedita ullam numquam dolorum praesentium tempora nobis ea aliquid velit. Culpa eius pariatur neque repudiandae dignissimos iusto mollitia rerum quam dolor tempore eos aspernatur a, officia optio nulla maxime sit! Distinctio, et ipsam mollitia deserunt quae sint commodi aperiam! Facere tempore voluptas asperiores unde rerum possimus accusamus quis. Adipisci numquam eveniet doloribus nobis ab accusantium optio quibusdam delectus, explicabo sit veniam deleniti
            temporibus quidem ea voluptas repellendus veritatis id amet quae eos? Exercitationem maiores dicta ipsam aliquid distinctio sapiente nobis ipsa possimus blanditiis id? Quibusdam omnis inventore eius. Adipisci omnis fugit eveniet et enim voluptates incidunt nam qui nobis molestias esse voluptatem possimus at, veritatis numquam. Obcaecati, doloremque error. Molestiae quis deleniti aliquam repudiandae repellendus veritatis voluptatibus eum delectus animi autem dolores, nemo quo rem ipsam perspiciatis. Earum ea incidunt aliquid doloribus tempora ab distinctio eum iure exercitationem molestiae. Praesentium magni obcaecati vero fugiat dolor, alias voluptate delectus consequuntur a vel
             consectetur nesciunt, facilis, aliquam deserunt? Dolorum saepe consectetur vitae earum cum optio error deleniti ratione ab modi quod, in aspernatur, 
          vero ipsam sunt molestias.
        </p>
      </Box>

    </Layout>
  )
}
