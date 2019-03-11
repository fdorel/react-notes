import React, { Component } from "react";
/*import Scriptmenu from './Scriptmenu'*/

class Navbar extends Component {
    

    render() {
        return (
            <React.Fragment>
                <nav>
                    <div className="nav-wrapper">
                        <ul className="right">
                            <li><a href="" /*onClick={document.body.style.background = "#e3f599"}*/>Change Colors</a></li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>


        );

    }
}





export default Navbar;