import React, { Component } from "react";

class Linenotify extends Component {
  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>Line Notify</h1>
          <ol className="breadcrumb">
            <li>
              <a href="my-cv/">
                <i className="fa fa-dashboard" /> Home
              </a>
            </li>
            <li>
              <a href="#/">Line Notify</a>
            </li>
          </ol>
        </section>
        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="nav-tabs-custom">
                <ul className="nav nav-tabs">
                  <li className="active">
                    <a href="#tab_1" data-toggle="tab" aria-expanded="true">
                      QR Code Chat Bot
                    </a>
                  </li>
                  <li className>
                    <a href="#tab_2" data-toggle="tab" aria-expanded="false">
                      QR Code Line Group Notify
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tab_1">
                    <img
                      className="img-fluid"
                      src={`${process.env.PUBLIC_URL}/linebot.png`}
                    />
                  </div>
                  {/* /.tab-pane */}
                  <div className="tab-pane" id="tab_2">
                    {" "}
                    <img
                      className="img-fluid"
                      src={`${process.env.PUBLIC_URL}/linegroupnotify.png`}
                    />
                  </div>
                </div>
                {/* /.tab-content */}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Linenotify;
