import type { TablerIcon } from "@tabler/icons";

export interface ISubSkill {
  name: string;
  skills: string[];
}

export type SubSkillsList = ISubSkill[];

export interface ISkill {
  Icon: TablerIcon;
  mainSkillType: string;
  skillDesc: string;
  subSkillsList: SubSkillsList;
}

export type SkillList = ISkill[]