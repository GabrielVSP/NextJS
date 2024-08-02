"use client"

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Post = () => {

    const [isMounted, setIsMounted] = useState(false)

    const router = useRouter()
    const pathname = usePathname()


    // useEffect(() => {
    //     setIsMounted(true)
    // }, [])

    // if (!isMounted) return null

    return ( 

        <h1>Post: {pathname.split('/')[pathname.split('/').length - 1]}</h1>

     );
}
 
export default Post;