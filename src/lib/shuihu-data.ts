export interface Character {
  id: string;
  name: string;
  nickname: string;
  rank: number;
  group: string;
  description: string;
}

export interface Relation {
  from: string;
  to: string;
  type: '兄弟' | '师徒' | '朋友' | '同乡' | '义兄弟' | '亲兄弟' | '结拜';
  description?: string;
}

export interface GraphNode {
  id: string;
  name: string;
  nickname: string;
  group: string;
  size: number;
  desc: string;
}

export interface GraphLink {
  source: string;
  target: string;
  rel: string;
}

export const characters: Character[] = [
  { id: 'songjiang', name: '宋江', nickname: '及时雨', rank: 1, group: '梁山首领', description: '梁山泊寨主，统领一百零八将' },
  { id: 'lujunyi', name: '卢俊义', nickname: '玉麒麟', rank: 2, group: '梁山首领', description: '河北三绝，武艺超群' },
  { id: 'wuyong', name: '吴用', nickname: '智多星', rank: 3, group: '梁山首领', description: '梁山军师，足智多谋' },
  { id: 'gongsunsheng', name: '公孙胜', nickname: '入云龙', rank: 4, group: '梁山首领', description: '道士出身，善使法术' },
  { id: 'guansheng', name: '关胜', nickname: '大刀', rank: 5, group: '马军五虎将', description: '关羽后人，使青龙偃月刀' },
  { id: 'linchong', name: '林冲', nickname: '豹子头', rank: 6, group: '马军五虎将', description: '东京八十万禁军教头' },
  { id: 'qinming', name: '秦明', nickname: '霹雳火', rank: 7, group: '马军五虎将', description: '性如烈火，使狼牙棒' },
  { id: 'huyanzhuo', name: '呼延灼', nickname: '双鞭', rank: 8, group: '马军五虎将', description: '呼延赞后人，双鞭无敌' },
  { id: 'huarong', name: '花荣', nickname: '小李广', rank: 9, group: '马军八骠骑', description: '神箭手，百步穿杨' },
  { id: 'chaijin', name: '柴进', nickname: '小旋风', rank: 10, group: '贵族', description: '后周皇室后裔，仗义疏财' },
  { id: 'liying', name: '李应', nickname: '扑天雕', rank: 11, group: '地主豪强', description: '祝家庄主，善使飞刀' },
  { id: 'zhutong', name: '朱仝', nickname: '美髯公', rank: 12, group: '步军头领', description: '郓城县都头，义释宋江' },
  { id: 'luzhishen', name: '鲁智深', nickname: '花和尚', rank: 13, group: '步军头领', description: '三拳打死镇关西，倒拔垂杨柳' },
  { id: 'wusong', name: '武松', nickname: '行者', rank: 14, group: '步军头领', description: '景阳冈打虎，醉打蒋门神' },
  { id: 'dongping', name: '董平', nickname: '双枪将', rank: 15, group: '马军五虎将', description: '双枪将，风流倜傥' },
  { id: 'zhangqing', name: '张清', nickname: '没羽箭', rank: 16, group: '马军八骠骑', description: '飞石打人，百发百中' },
  { id: 'yangzhi', name: '杨志', nickname: '青面兽', rank: 17, group: '马军八骠骑', description: '杨家将后人，卖刀汴京' },
  { id: 'xuning', name: '徐宁', nickname: '金枪手', rank: 18, group: '马军八骠骑', description: '金枪班教师，钩镰枪法' },
  { id: 'suochao', name: '索超', nickname: '急先锋', rank: 19, group: '马军八骠骑', description: '大名府勇将，性急如风' },
  { id: 'daizong', name: '戴宗', nickname: '神行太保', rank: 20, group: '梁山将领', description: '日行八百里，神行法' },
  { id: 'liutang', name: '刘唐', nickname: '赤发鬼', rank: 21, group: '步军头领', description: '晁盖旧部，赤发赤须' },
  { id: 'likui', name: '李逵', nickname: '黑旋风', rank: 22, group: '步军头领', description: '黑面煞神，板斧双舞' },
  { id: 'shijin', name: '史进', nickname: '九纹龙', rank: 23, group: '马军八骠骑', description: '史家庄少庄主，身绣九龙' },
  { id: 'muhong', name: '穆弘', nickname: '没遮拦', rank: 24, group: '马军八骠骑', description: '揭阳镇一霸，后归梁山' },
  { id: 'leiheng', name: '雷横', nickname: '插翅虎', rank: 25, group: '步军头领', description: '郓城县都头，善使朴刀' },
  { id: 'lijun', name: '李俊', nickname: '混江龙', rank: 26, group: '水军头领', description: '浔阳江艄公，水性极佳' },
  { id: 'ruanxiaoer', name: '阮小二', nickname: '立地太岁', rank: 27, group: '水军头领', description: '阮氏三雄之长兄' },
  { id: 'zhangheng', name: '张横', nickname: '船火儿', rank: 28, group: '水军头领', description: '浔阳江艄公，张顺之兄' },
  { id: 'ruanxiaowu', name: '阮小五', nickname: '短命二郎', rank: 29, group: '水军头领', description: '阮氏三雄之二弟' },
  { id: 'zhangshun', name: '张顺', nickname: '浪里白条', rank: 30, group: '水军头领', description: '水性第一，张横之弟' },
];

export const relations: Relation[] = [
  { from: 'songjiang', to: 'wuyong', type: '兄弟', description: '吴用是宋江的军师和兄弟' },
  { from: 'songjiang', to: 'likui', type: '兄弟', description: '李逵视宋江为兄长，忠心耿耿' },
  { from: 'songjiang', to: 'huarong', type: '朋友', description: '花荣与宋江是生死之交' },
  { from: 'songjiang', to: 'daizong', type: '朋友', description: '戴宗与宋江是老友' },
  { from: 'songjiang', to: 'chaijin', type: '朋友', description: '柴进曾收留宋江' },
  { from: 'linchong', to: 'luzhishen', type: '兄弟', description: '鲁智深救林冲于野猪林，结为兄弟' },
  { from: 'luzhishen', to: 'wusong', type: '师徒', description: '鲁智深与武松意气相投' },
  { from: 'wuyong', to: 'gongsunsheng', type: '朋友', description: '智囊团成员' },
  { from: 'wuyong', to: 'liutang', type: '朋友', description: '同随晁盖上梁山' },
  { from: 'ruanxiaoer', to: 'ruanxiaowu', type: '亲兄弟', description: '阮氏兄弟' },
  { from: 'zhangheng', to: 'zhangshun', type: '亲兄弟', description: '张氏兄弟' },
  { from: 'songjiang', to: 'lujunyi', type: '义兄弟', description: '梁山正副寨主' },
  { from: 'likui', to: 'zhutong', type: '朋友', description: '同在宋江麾下' },
  { from: 'leiheng', to: 'zhutong', type: '同乡', description: '同为郓城县都头' },
  { from: 'songjiang', to: 'leiheng', type: '朋友', description: '雷横义释宋江' },
  { from: 'linchong', to: 'yangzhi', type: '朋友', description: '同为八十万禁军教头系' },
  { from: 'lijun', to: 'zhangheng', type: '朋友', description: '同为水军头领' },
  { from: 'lijun', to: 'zhangshun', type: '朋友', description: '同为水军头领' },
  { from: 'guansheng', to: 'huyanzhuo', type: '朋友', description: '同为名将之后' },
  { from: 'shijin', to: 'luzhishen', type: '朋友', description: '史进曾受鲁智深指点' },
  { from: 'chaijin', to: 'linchong', type: '朋友', description: '柴进曾收留林冲' },
  { from: 'chaijin', to: 'wusong', type: '朋友', description: '柴进庄上遇武松' },
  { from: 'qinming', to: 'huarong', type: '朋友', description: '同归梁山' },
  { from: 'wusong', to: 'shijin', type: '朋友', description: '二龙山聚义' },
  { from: 'likui', to: 'liutang', type: '朋友', description: '同为步军猛将' },
  { from: 'lujunyi', to: 'linchong', type: '朋友', description: '同为武艺高强者' },
  { from: 'gongsunsheng', to: 'liutang', type: '朋友', description: '共同参与智取生辰纲' },
  { from: 'gongsunsheng', to: 'ruanxiaoer', type: '朋友', description: '七星聚义' },
  { from: 'gongsunsheng', to: 'ruanxiaowu', type: '朋友', description: '七星聚义' },
];

// 转换为力导向图数据
export function getGraphData() {
  const nodes: GraphNode[] = characters.map(char => ({
    id: char.id,
    name: char.name,
    nickname: char.nickname,
    group: char.group,
    size: Math.max(15, 35 - char.rank), // 排名越高，节点越大
    desc: char.description,
  }));

  const links: GraphLink[] = relations.map(rel => ({
    source: rel.from,
    target: rel.to,
    rel: rel.type,
  }));

  return { nodes, links };
}
