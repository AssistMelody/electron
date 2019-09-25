/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-08-13 17:30:08
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-08-19 14:36:13
 */

import { BaseAttrClass } from './BaseClass'
import { StoneEnum } from "../enum/TypeEnum";
export class StoneClass extends  BaseAttrClass {
    Level   = 0 // 宝石等级
    /**
     * Level:等级,Allow:所属,attr:属性
     */    
    constructor(Level,Allow,attr){
        super()
    }
}