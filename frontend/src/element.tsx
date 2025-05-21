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
      <h1>{title}</h1>
      <p>{mass}</p>
    </div>
  );
}

export default Element;
