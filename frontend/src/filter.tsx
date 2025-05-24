interface Props {
  filter: string;
  setFilter: (filter: string) => void;
}

function filter({setFilter}: Props) {
  return (
    <section>
      <div className="filter">
        <dd className="alkanine" onHover=>{setFilter}</div>></dd>
        <dd className="Lanthanoid">
            <a href="https://en.wikipedia.org/wiki/Lanthanide"
            >Lanthanoids</a></dd>
      </div>
    </section>
  );
}

export default filter;
