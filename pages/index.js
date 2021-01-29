import Router from 'next/router'

componentDidMount(){
    const {pathname} = Router
    if(pathname == '/' ){
       Router.push('https://www.youtube.com/watch?v=xI9kjXRfhmo')
    }
}

export default componentDidMount