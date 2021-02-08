import Router from 'next/router'

import { useEffect, useState} from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home(){
    return (
        <div>
            <Link href="https://google.com.br">
                <a>Google</a>
            </Link>
        </div>
    )
}

// componentDidMount(){
//     const {pathname} = Router
//     if(pathname == '/' ){
//        Router.push('https://www.google.com')
//     }
// }

// export default componentDidMount



