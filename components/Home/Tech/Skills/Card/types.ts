import type { TablerIcon } from "@tabler/icons";
import type { IList } from "./List/types";

export interface ICard extends IList {
  Icon: TablerIcon;
  mainSkillType: string;
  skillDesc: string;
}
