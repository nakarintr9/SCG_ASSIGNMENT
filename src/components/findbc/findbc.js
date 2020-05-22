import React, { Component } from "react";
import { connect } from "react-redux";
import { findBC } from "./../../actions/findbc.action";

class Findbc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      A: 21,
      AplusB: 23,
      AplusC: -21,
    };
  }

  componentDidMount() {
    this.props.findBC(this.state);
    const { result } = this.props.findBCReducer;
  }

  render() {
    const { result, isFetching } = this.props.findBCReducer;
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>Find BC</h1>
          <ol className="breadcrumb">
            <li>
              <a href="my-cv/">
                <i className="fa fa-dashboard" /> Home
              </a>
            </li>
            <li>
              <a href="#/">FindBC</a>
            </li>
          </ol>
        </section>
        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-md-6">
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Find BC Example</h3>
                </div>
                {/* /.box-header */}
                {/* form start */}
                <form role="form">
                  <div className="box-body">
                    <div className="form-group">
                      <label htmlFor="A">A</label>
                      <input
                        type="number"
                        value={this.state.A}
                        onChange={(e) => this.setState({ A: e.target.value })}
                        className="form-control"
                        id="A"
                        placeholder="A"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="AplusB">A + B</label>
                      <input
                        type="number"
                        value={this.state.AplusB}
                        onChange={(e) =>
                          this.setState({ AplusB: e.target.value })
                        }
                        className="form-control"
                        id="AplusB"
                        placeholder="A + B"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="AplusC">A + C</label>
                      <input
                        type="number"
                        value={this.state.AplusB}
                        onChange={(e) =>
                          this.setState({ AplusC: e.target.value })
                        }
                        className="form-control"
                        id="AplusC"
                        placeholder="A + C"
                      />
                    </div>
                  </div>
                  {/* /.box-body */}
                  <div className="box-footer">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        this.props.findBC(this.state);
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

const mapStateToProps = ({ findBCReducer }) => ({ findBCReducer });

const mapDispatchToProps = {
  findBC,
};

export default connect(mapStateToProps, mapDispatchToProps)(Findbc);
