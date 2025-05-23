import "./element.css";

interface Props {
  title: string;
  mass?: number;
  color?: string;
  onHover?: () => void;
}

function Element({ title, mass, color, onHover }: Props) {
  return (
    <div
      id="element"
      className="element"
      style={{ backgroundColor: color }}
      onMouseEnter={onHover}
    >
      <h2>{title}</h2>
      <p>{mass}</p>
    </div>
  );
}

export default Element;
