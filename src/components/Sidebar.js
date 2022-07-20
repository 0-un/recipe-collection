import './Sidebar.css'

function Sidebar({children }){
    return (
        <div className= 'sidebar'>
            <div className="sidebar-menus">{children}</div>
        </div>
    )
}
export default Sidebar