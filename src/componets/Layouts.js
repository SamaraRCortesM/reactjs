import { Outlet, Link } from "react-router-dom";



const Layouts = () => {

return (

<>

<nav className="nav">

<ul>

<li>

<Link to="/Calfc">calculator</Link>

</li>

<li>

<Link to="/Formulario">Form</Link>

</li>
<li>

<Link to="/Calculadora">Calculadora</Link>

</li>

</ul>

</nav>



<Outlet />

</>

)

};



export default Layouts;