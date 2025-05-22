import "./info.css";

interface Props {
  title: string;
  mass: number;
  color?: string;
}

function information({ title, mass, color }: Props) {
    return (
    <div className="info-container" style={{backgroundColor: color}}>
      <h1 className="text-center">{title}</h1>
      <p className="text-center">{mass}</p>
      <p className="text-center">Click on an element to see more information.</p>
    </div>
    )
}

export default information;