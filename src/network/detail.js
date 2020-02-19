import {request} from './request';
export function getDetail(iid){ //把上个页面的id传过来
    return request({
        url:'/detail',
        params:{
            iid   //接受id的参数
        }
    })
}
