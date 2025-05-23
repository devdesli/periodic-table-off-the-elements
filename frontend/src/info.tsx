import "./info.css";

interface Props {
  title: string;
  mass: number;
  color?: string;
  // change back to name instead of name? when done with naming 
  name?: string;
}

function information({ title, mass, color, name }: Props) {
    return (
    <div className="info-container" style={{backgroundColor: color}}>
      <h1 className="text-center">{title}</h1>
      <h2 className="text-center">{name}</h2>
      <p className="text-center">{mass}</p>
    </div>
    )
}

export default information;