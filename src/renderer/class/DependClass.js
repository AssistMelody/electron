/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-08-14 16:50:31
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-08-19 16:12:32
 */
import { BaseAttrClass } from "./BaseClass";

export class DependClass extends BaseAttrClass{
    name    = ''
    level   = 0
    allow   = ''
    /**
     * msg: 
     */
    constructor(name,allow,Attr){
        super();
        this.name   = name;
        this.allow  = allow;
        Object.assign(this,Attr)
        // for (const key in this) {
        //     if (this[key]==0) {
        //         delete this[key]                
        //     }
        // }
    }    
}
