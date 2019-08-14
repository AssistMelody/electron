import { AttrEnum } from "./enum/TypeEnum";
/**
 *  转换属性名字
 * @param {Attr}
 */
export function AttrToName(Attr){
    return AttrEnum.get(Attr)
}