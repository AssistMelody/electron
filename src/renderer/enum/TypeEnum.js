/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-08-14 16:56:12
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-08-14 19:30:16
 */

/**
 * 宝石类型枚举 
 */ 
export const StoneEnum = new Map([
    ['test1','飞砂玉'],
    ['test2','振金玉'],
    ['test3','呵呵玉'],
    ['test4','66玉'],
    ['test5','飞砂玉']
])

/**
 * 装备类型枚举 
 */
export const EquipmentEnum = new Map([
    ['test1','武器'],
    ['test2','信物'],
    ['test3','配饰'],
    ['test4','项链'],
    ['test5','戒指'],
    ['test5','头'],
    ['test5','袍'],
    ['test5','腕'],
    ['test5','带'],
    ['test5','裤'],
    ['test5','履'],
])

/**
 * 变量对应翻译 
 */
export const AttrEnum = new Map([
    /* 
    *基础属性
    */
    ['Power','力'],
    ['Body','体'],
    ['Agile','敏'],
    ['Skill','术'],
    ['Mana','念'],
    ['Power','念'],
    ['Power','力'],
   /* 
   *攻击属性
   */
    ['PhysicalAttack','物理攻击'],
    ['SpellAttack','法术攻击'],
    ['PhysicalPower','物理强度'],
    ['SpellPower','法术强度'],
    ['Grasp','专精掌握'],
    ['Crit','会心率'],
    ['Focus','专注率'],
    ['Rapid','急速'],
    ['FinalPhysicalAttack','最终物理攻击'],
    ['FinalSpellAttack','最终法术攻击'],
    ['CureEffect','治疗效果'],
    ['HatredEffect','仇恨效果'],
   /* 
   *防御属性
   */
    ['PhysicalDefense','物理防御'],
    ['SpellDefense','法术防御'],
    ['ReduceHurt','额外减伤'],
    ['ReduceCrit','会心抵抗'],
    ['Penetrate','识破'],
    ['PenetrateEffect','识破效果'],
    ['AcceptHatredEffect','承疗效果'],
])