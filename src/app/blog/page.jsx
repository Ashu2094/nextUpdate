// import React from 'react'
// import styles from './page.module.css'
// import Link from 'next/link'
// import Image from 'next/image'

// // this getData function here is gonna make server side data fetching 
// async function getData(){
//   //by default next caches this data in memory
//   // to re validate every next 10sec we can use revalidate: time in sec as follows
//   /*
//    const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
//     next:{
//       revalidate:10
//     }
//   });
//   */

//   const res = await fetch('http://localhost:3000/blog',{
//     next:{
//       cache:"no-store" // now no caching
//     }
//   });

//   if(!res.ok){
//     throw new Error('Failed to fetch data');
//   }
//   return (res.json());
// }

// const  Blog = async ()=> {
//   const data = await getData();
//   return (
//     <div className={styles.mainContainer}>
//       {data.map((item)=>(

//         <Link   href="/blog/testId" className={styles.container} key = {item.id}>
//         <div className={styles.imgContainer}>
//           <Image src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg" alt="" width={400}  height={250} className={styles.image}/>
//         </div>
//         <div className={styles.content}>
//           <h1 className={styles.ttitle}>{item.title}</h1>
//           <p className={styles.desc}>Desc</p>
//         </div>
//       </Link>
//         ))}
      
//     </div>
//   )
// }

// export default Blog


import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

// this getData function here is gonna make server side data fetching 
async function getData(){
  //by default next caches this data in memory
  // to re validate every next 10sec we can use revalidate: time in sec as follows
  /*
   const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
    next:{
      revalidate:10
    }
  });
  */
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;