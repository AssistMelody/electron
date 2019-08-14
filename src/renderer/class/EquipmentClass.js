/*
 * @Descripttion: 装备属性
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-08-13 17:46:39
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-08-14 18:44:40
 */
import { BaseAttrClass } from './BaseClass'
export class EquipmentClass {
    name            = '' // 装备名字
    StrongLevel     = 0 // 强化等级
    BaseAttr        = new BaseAttrClass()
    ExtendAttr      = new BaseAttrClass()
    constructor(){
        super()
    }
}