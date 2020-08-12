import  Home from '../pages/index.vue'
import DataInquire from '../components/dataInqiire/dataInquire.vue'
export default[
    {
        path:'/home',
        component:Home,
    },
    {
        path:'/dataInquire',
        component:DataInquire,
    },
    {
        path:'/',
        redirect:'/dataInquire'
    }
]