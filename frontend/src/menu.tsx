import "./menu.css"

interface Props {
    title: string;
}

function Menu({title}: Props) {
    return (
        <div className="menu-container">
            <h1 className="text-center">{title}</h1>
            <p className="">Hello World</p>

        </div>
    )
}

export default Menu;