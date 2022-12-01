// 药材背景色
export const ThemeBgColor = [
  'C-Background-Light_Red',
  'C-Background-Light_Yellow',
  'C-Background-Light_Green',
  'C-Background-Light_Blue'
]
// 功效 nameInLibrary 字段是后台里保存的，查询的时候用后面的字段去查询
export const EffectValues = [
  { name: '解表药', color: 'C-Medicine-Orange' },
  { name: '清热药', color: 'C-Medicine-Blue' },
  { name: '理气药', color: 'C-Medicine-Orange' },
  { name: '化痰止咳药', color: 'C-Medicine-Orange', nameInLibrary: '化痰止咳平喘药' }, // 不一样
  { name: '活血祛瘀药', color: 'C-Medicine-Yellow' },
  { name: '补虚药', color: 'C-Medicine-Green' },
  { name: '温里药', color: 'C-Medicine-Orange' },
  { name: '泻下药', color: 'C-Medicine-Green' },
  { name: '祛风湿药', color: 'C-Medicine-Yellow' },
  { name: '芳香化湿药', color: 'C-Medicine-Orange' },
  { name: '利水渗湿药', color: 'C-Medicine-Yellow' },
  { name: '消食药', color: 'C-Medicine-Yellow' },
  { name: '驱虫药', color: 'C-Medicine-Yellow' },
  { name: '止血药', color: 'C-Medicine-Green' },
  { name: '安神药', color: 'C-Medicine-Green' },
  { name: '平肝熄风药', color: 'C-Medicine-Blue' },
  { name: '开窍药', color: 'C-Medicine-Blue' },
  { name: '收涩药', color: 'C-Medicine-Yellow' },
  { name: '涌吐药', color: 'C-Medicine-Green' },
  { name: '外用及其他', color: 'C-Medicine-Red', nameInLibrary: '外用药及其他' } // 不一样
]
// 性  hidden字段表示该字段是否需要在前端展示出来
export const NatureValues = [
  { name: '寒', color: 'C-Medicine-Blue' },
  { name: '凉', color: 'C-Medicine-Cyan' },
  { name: '平', color: 'C-Medicine-Green' },
  { name: '温', color: 'C-Medicine-Orange' },
  { name: '热', color: 'C-Medicine-Red' },

  { name: '微寒', color: 'C-Medicine-Blue', hidden: true },
  { name: '大寒', color: 'C-Medicine-Blue', hidden: true },
  { name: '微温', color: 'C-Medicine-Orange', hidden: true },
  { name: '大温', color: 'C-Medicine-Orange', hidden: true },
  
  // 方剂
  { name: "辛温解表剂", color: "C-Medicine-Orange" },
  { name: "补气剂", color: "C-Medicine-Orange" },
  { name: "祛风胜湿剂", color: "C-Medicine-Yellow" },
  { name: "疏散外风剂", color: "C-Medicine-Green" },
  { name: "清热祛湿剂", color: "C-Medicine-Blue" },
  { name: "温下剂", color: "C-Medicine-Green" },
  { name: "清营凉血剂", color: "C-Medicine-Blue" },
  { name: "重症安神剂", color: "C-Medicine-Green" },
  { name: "阴阳并补剂", color: "C-Medicine-Orange" },
  { name: "燥湿化痰剂", color: "C-Medicine-Orange" },
  { name: "固崩止带剂", color: "C-Medicine-Yellow" },
  { name: "利水渗湿剂", color: "C-Medicine-Yellow" },
  { name: "温开剂", color: "C-Medicine-Orange" },
  { name: "止血剂", color: "C-Medicine-Green" },
  { name: "消食化滞剂", color: "C-Medicine-Orange" },
  { name: "补阴剂", color: "C-Medicine-Orange" },
  { name: "行气剂", color: "C-Medicine-Orange" },
  { name: "清热导腑剂", color: "C-Medicine-Blue" },
  { name: "清热解毒剂", color: "C-Medicine-Blue" },
  { name: "气血双补剂", color: "C-Medicine-Orange" },
  { name: "活血祛瘀剂", color: "C-Medicine-Yellow" },
  { name: "祛湿化浊剂", color: "C-Medicine-Yellow" },
  { name: "滋润内燥剂", color: "C-Medicine-Yellow" },
  { name: "解表攻里剂", color: "C-Medicine-Orange" },
  { name: "祛暑利湿剂", color: "C-Medicine-Yellow" },
  { name: "涌吐剂", color: "C-Medicine-Green" },
  { name: "寒下剂", color: "C-Medicine-Blue" },
  { name: "散结消痈剂", color: "C-Medicine-Green" },
  { name: "温中祛寒剂", color: "C-Medicine-Orange" },
  { name: "清气分热剂", color: "C-Medicine-Cyan" },
  { name: "温经散寒剂", color: "C-Medicine-Orange" },
  { name: "补血剂", color: "C-Medicine-Orange" },
  { name: "调和肝脾剂", color: "C-Medicine-Green" },
  { name: "补养安神剂", color: "C-Medicine-Green" },
  { name: "补阳剂", color: "C-Medicine-Orange" },
  { name: "回阳救逆剂", color: "C-Medicine-Yellow" },
  { name: "调和寒热剂", color: "C-Medicine-Yellow" },
  { name: "和解少阳剂", color: "C-Medicine-Yellow" },
  { name: "辛凉解表剂", color: "C-Medicine-Orange" },
  { name: "逐水剂", color: "C-Medicine-Yellow" },
  { name: "温化寒湿剂", color: "C-Medicine-Orange" },
  { name: "温化寒痰剂", color: "C-Medicine-Orange" },
  { name: "润下剂", color: "C-Medicine-Green" },
  { name: "平息內风剂", color: "C-Medicine-Blue" },
  { name: "扶正解表剂", color: "C-Medicine-Orange" },
  { name: "降气剂", color: "C-Medicine-Yellow" },
  { name: "化湿和胃剂", color: "C-Medicine-Orange" },
  { name: "清虚热剂", color: "C-Medicine-Blue" },
  { name: "健脾消食剂", color: "C-Medicine-Orange" },
  { name: "祛暑益气剂", color: "C-Medicine-Blue" },
  { name: "攻补兼施剂", color: "C-Medicine-Yellow" },
  { name: "交通心肾剂", color: "C-Medicine-Green" },
  { name: "涩肠固脱剂", color: "C-Medicine-Yellow" },
  { name: "清热化痰剂", color: "C-Medicine-Blue" },
  { name: "驱虫剂", color: "C-Medicine-Yellow" },
  { name: "解表清里剂", color: "C-Medicine-Orange" },
  { name: "凉开剂", color: "C-Medicine-Cyan" },
  { name: "固表止汗剂", color: "C-Medicine-Yellow" },
  { name: "祛暑解表剂", color: "C-Medicine-Orange" },
  { name: "托里透脓剂", color: "C-Medicine-Green" },
  { name: "补虚敛疮剂", color: "C-Medicine-Cyan" },
  { name: "敛肺止咳剂", color: "C-Medicine-Orange" },
  { name: "气血两清剂", color: "C-Medicine-Green" },
  { name: "清宣外燥剂", color: "C-Medicine-Green" },
  { name: "攻补兼施剂", color: "C-Medicine-Yellow" },
  { name: "解表温里剂", color: "C-Medicine-Orange" },
  { name: "清脏腑热剂", color: "C-Medicine-Blue" },
  { name: "涩精止遗剂", color: "C-Medicine-Yellow" },
  { name: "治风化痰剂", color: "C-Medicine-Orange" }

]
// 味 hidden字段表示该字段是否需要在前端展示出来
export const FlavorValues = [
  { name: '酸', color: 'C-Medicine-Green' },
  { name: '涩', color: 'C-Medicine-Purple' },
  { name: '甘', color: 'C-Medicine-Orange' },
  { name: '苦', color: 'C-Medicine-Red' },
  { name: '辛', color: 'C-Medicine-Yellow' },
  { name: '咸', color: 'C-Medicine-Blue' },
  { name: '淡', color: 'C-Medicine-Cyan' },
  { name: '微苦', color: 'C-Medicine-Red', hidden: true },
  { name: '微辛', color: 'C-Medicine-Yellow', hidden: true }
]

/**
 * 根据药材名取模得到背景色值
 * @param {any} drugName:string
 * @returns {any}
 */
export function getDrugBgColorByName (drugName) {
  return ThemeBgColor[drugName.charCodeAt(0) % 4]
}

/**
 * 获取性、味、功效的字体颜色
 * @param {any} name:string
 * @param {any} type:'flavor'|'nature'|'effect'
 * @returns {any}
 */
export function getCharacterColor(name, type) {
  switch (type) {
    case 'flavor':
      return FlavorValues.filter(item => item.name === name)[0]?.color ?? 'C-Medicine-Blue'
    case 'nature':
      return NatureValues.filter(item => item.name === name)[0]?.color ?? 'C-Medicine-Green'
    case 'effect':
      return EffectValues.filter(item => item.name === name)[0]?.color ?? 'C-Medicine-Orange'
    default:
      return 'C-Medicine-Orange'
  }
}

