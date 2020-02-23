import {request} from './request';
export function getDetail(iid){ //把上个页面的id传过来
    return request({
        url:'/detail',
        params:{
            iid   //接受id的参数
        }
    })
}


export function getRecommend(){
    return request({
        url:'/recommend',
        
    })
}




export class Goods{  //利用构造函数  把多处的数据整合在一个里面
    constructor(itemInfo,columns,services){
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}


export class Shop{
    constructor(shopInfo){
        this.logo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.fans = shopInfo.cFans
        this.sells = shopInfo.cSells
        this.score = shopInfo.score
        this.goodsCount = shopInfo.cGoods

    }
}

export class ParamsInfo {
    constructor(info,rule){
        this.image = info.images ? info.images[0]:'';
        this.infos = info.set;
        this.sizes = rule.tables;
    }
}
