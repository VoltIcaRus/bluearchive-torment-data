// Used in bluearchive-torment-front

export const legacyTorments = [
  "S58",
  "S59",
  "S60",
  "S61",
  "S62",
  "3S2-T",
  "3S3-T",
  "3S4-T",
  "3S5-T",
  "3S6-T",
  "3S7-T",
];

export const weaponLabels = [
  "전5",
  "전4",
  "전3",
  "전2",
  "전1",
  "4성",
  "3성",
  "2성",
  "1성",
];

export const tabItems = [
  {
    value: "3S2-T",
    label: `대결전 시즌2 실내 시로쿠로`,
  },
  {
    value: "S58",
    label: `시즌58 시가지 비나`,
  },
  {
    value: "3S3-T",
    label: `대결전 시즌3 야외 카이텐(신비)`,
  },
  {
    value: "S59",
    label: `시즌59 야외 헤세드`,
  },
  {
    value: "3S4-T",
    label: `대결전 시즌4 시가지 호드(관통)`,
  },
  {
    value: "S60",
    label: `시즌60 시가지 쿠로카게`,
  },
  {
    value: "3S5-T",
    label: `대결전 시즌5 야외 고즈(관통)`,
  },
  {
    value: "S61",
    label: `시즌61 야외 호버크래프트`,
  },
  {
    value: "3S6-T",
    label: `대결전 시즌6 시가지 시로쿠로(폭발)`,
  },
  {
    value: "S62",
    label: `시즌62 실내 예로니무스`,
  },
  {
    value: "3S7-T",
    label: `대결전 시즌7 야외 카이텐(폭발)`,
  },
  {
    value: "S63",
    label: `시즌63 실내 헤세드`,
  },
  {
    value: "3S8-T",
    label: `대결전 시즌8 시가지 비나(신비)`,
  },
];

export const defaultJson = {
  season: tabItems[0].value,
  include: [],
  exclude: [],
  assist: undefined,
  under3: [],
  under4: [],
  hardexclude: false,
  allowduplicate: true,
};

export const announceHTML = (
  <div>대결전 시즌8 시가지 비나(신비) 데이터 추가</div>
);

export const announceUpdate = "20240323";
