import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Menu extends Component {
  render() {
    const { pathname } = this.props.location;

    return (
      <aside className="main-sidebar">
        {/* sidebar: style can be found in sidebar.less */}
        <section className="sidebar">
          {/* Sidebar user panel */}
          <div className="user-panel">
            <div className="pull-left image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle"
                alt="User Image"
              />
            </div>
            <div className="pull-left info">
              <p>Alexander Pierce</p>
              <a href="#">
                <i className="fa fa-circle text-success" /> Online
              </a>
            </div>
          </div>
          {/* sidebar menu: : style can be found in sidebar.less */}
          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">MAIN NAVIGATION</li>
            <li className="active treeview menu-open">

              <ul className="treeview-menu">
                <li className={pathname == "/my-cv" ? "active" : null}>
                  <Link to="/my-cv">
                    <i className="fa fa-circle-o" /> My CV
                  </Link>
                </li>
                <li className={pathname == "/find-xyz" ? "active" : null}>
                  <Link to="/find-xyz">
                    <i className="fa fa-circle-o" /> Find XYZ
                  </Link>
                </li>
                <li className={pathname == "/find-bc" ? "active" : null}>
                  <Link to="/find-bc">
                    <i className="fa fa-circle-o" /> Find BC
                  </Link>
                </li>
                <li className={pathname == "/find-the-best-way" ? "active" : null}>
                  <Link to="/find-the-best-way">
                    <i className="fa fa-circle-o" /> Find The Best Way
                  </Link>
                </li>
                <li className={pathname == "/line-notify" ? "active" : null}>
                  <Link to="/line-notify">
                    <i className="fa fa-circle-o" /> Line Notify
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        {/* /.sidebar */}
      </aside>
    );
  }
}

export default withRouter(Menu);
