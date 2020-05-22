import React, { Component } from "react";
import { connect } from "react-redux";
import { findXYZ } from "./../../actions/findxyz.action";

class Findxyz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startPosition: 0,
      endPosition: 5,
    };
  }

  componentDidMount() {
    this.props.findXYZ(this.state);
    const { result } = this.props.findXYZReducer;
  }

  render() {
    const { result, isFetching } = this.props.findXYZReducer;
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>Find XYZ</h1>
          <ol className="breadcrumb">
            <li>
              <a href="my-cv/">
                <i className="fa fa-dashboard" /> Home
              </a>
            </li>
            <li>
              <a href="#/">FindXYZ</a>
            </li>
          </ol>
        </section>
        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-md-6">
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Find XYZ Example</h3>
                </div>
                {/* /.box-header */}
                {/* form start */}
                <form role="form">
                  <div className="box-body">
                    <div className="form-group">
                      <label htmlFor="startPosition">startPosition</label>
                      <input
                        type="number"
                        value={this.state.startPosition}
                        onChange={(e) =>
                          this.setState({ startPosition: e.target.value })
                        }
                        className="form-control"
                        id="startPosition"
                        placeholder="startPosition"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="endPosition">endPosition</label>
                      <input
                        type="number"
                        value={this.state.endPosition}
                        onChange={(e) =>
                          this.setState({ endPosition: e.target.value })
                        }
                        className="form-control"
                        id="endPosition"
                        placeholder="endPosition"
                      />
                    </div>
                  </div>
                  {/* /.box-body */}
                  <div className="box-footer">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        this.props.findXYZ(this.state);
                      }}
                      type="submit"
                      className="btn btn-primary"
                    >
                      Try
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <p className="h2">Answer</p>
            {result && <p className="h3">{JSON.stringify(result)}</p>}
            {!result && <p className="h3">please try again later.</p>}
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ findXYZReducer }) => ({ findXYZReducer });

const mapDispatchToProps = {
  findXYZ,
};

export default connect(mapStateToProps, mapDispatchToProps)(Findxyz);
