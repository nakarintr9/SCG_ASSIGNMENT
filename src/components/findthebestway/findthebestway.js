import React, { Component } from "react";
import { findTheBestWay } from "./../../actions/findthebestway.action";
import { connect } from "react-redux";
import MapWrapped from "./../Directions/DirectionRenderer";
import { GOOGLE_MAP_API_URL } from "./../../constants";
class Findthebestway extends Component {
  constructor() {
    super();

    this.state = {
      origin:
        "เซ็นทรัลเวิลด์+999%2F9+ถนน+พระรามที่+๑+แขวง+ปทุมวัน+เขตปทุมวัน+กรุงเทพมหานคร+10330",
      destination:
        "SCG+สำนักงานใหญ่+บางซื่อ+1+ซอย+ปูนซีเมนต์ไทย+แขวง+บางซื่อ+เขตบางซื่อ+กรุงเทพมหานคร+10800",
    };
  }

  componentDidMount() {
    this.props.findTheBestWay(this.state);
  }

  render() {
    const { result } = this.props.findTheBestWayReducer;
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>Best Way To Go SCG</h1>
          <ol className="breadcrumb">
            <li>
              <a href="/my-cv">
                <i className="fa fa-dashboard" /> Home
              </a>
            </li>
            <li>
              <a href="/find-the-best-way">Find The Best Way</a>
            </li>
          </ol>
        </section>
        {/* Main content */}

        <section className="content">
          <div className="row">
            <div className="col-md-8">
              <div style={{ width: "70vw", height: "70vh" }}>
                {result && (
                  <MapWrapped
                    googleMapURL={GOOGLE_MAP_API_URL}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    resultDirection={result}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ findTheBestWayReducer }) => ({
  findTheBestWayReducer,
});

const mapDispatchToProps = {
  findTheBestWay,
};

export default connect(mapStateToProps, mapDispatchToProps)(Findthebestway);
