import { useEffect, useState} from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home(){
    const {pathname} = useRouter()
    if(pathname == '/') {
        useRouter.push('https://google.com.br')
    }
}

// componentDidMount(){
//     const {pathname} = Router
//     if(pathname == '/' ){
//        Router.push('https://www.google.com')
//     }
// }

// export default componentDidMount



