import "./Element.css";

interface Props {
  title: string;
  mass: number;
  color?: string;
}

function Element({ title, mass, color }: Props) {
  return (
    <div id="element" className="element"
      style={{backgroundColor: color,}}>
      <h2>{title}</h2>
      <p>{mass}</p>
    </div>
  );
}

export default Element;
