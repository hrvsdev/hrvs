import Card from "./Card";


export default function Skills() {
  return (
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 md:gap-6 lg:gap-8">
      <Card Icon={null} mainSkillType={""} skillDesc={""} subSkillsList={[]} />
    </div>
  );
}
