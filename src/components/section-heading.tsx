import { Icon, type IconName } from "./icons";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  icon?: IconName;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  icon = "sparkles",
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="section-eyebrow">
        <Icon name={icon} size={15} />
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
