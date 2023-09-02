
import Following from '../pages/Following';
import Upload from '../pages/Upload'
import Home from '../pages/Home';
import HeaderOnly from '../component/Layout/HeaderOnly';
import Search from '../pages/Search';

const publicRoutes = [
    {path: "/", component: Home},
    {path: "/following", component: Following},
    {path: "/upload", component: Upload, layout: HeaderOnly},
    {path: "/search", component: Search, layout: null}
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}