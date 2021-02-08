import { useEffect} from "react";
import { useRouter} from "next/router"


export default function Home(){
    const router = useRouter();
    useEffect(() => {
        console.log('Redirect')
        router.push('https://google.com.br')
    }, [])

}

// componentDidMount(){
//     const {pathname} = Router
//     if(pathname == '/' ){
//        Router.push('https://www.google.com')
//     }
// }

// export default componentDidMount



