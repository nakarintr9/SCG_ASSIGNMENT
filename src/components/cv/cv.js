import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Cv extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  previousPage = ({ numPages }) => {
    this.setState((prevState) => ({ pageNumber: prevState.pageNumber - 1 }));
  };

  nextPage = ({ numPages }) => {
    this.setState((prevState) => ({ pageNumber: prevState.pageNumber + 1 }));
  };

  gotoPage = (pageNumber) => {
    alert(pageNumber);
    // this.setState({ pageNumber:  pageNumber});
  };

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>My CV</h1>
          <ol className="breadcrumb">
            <li>
              <a href="#/">
                <i className="fa fa-dashboard" /> Home
              </a>
            </li>
            <li>
              <a href="#/">MyCV</a>
            </li>
          </ol>
        </section>
        {/* Main content */}

        <section className="content">
          <div className="row">
          <div className="col-md-8">
            <Document
              file={`${process.env.PUBLIC_URL}/mycv.pdf`}
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </div>
          </div>
          <div className="row">
          <p>
              Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
            </p>
            <button
              type="button"
              disabled={pageNumber <= 1}
              onClick={this.previousPage}
            >
              Previous
            </button>
            <button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={this.nextPage}
            >
              Next
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default Cv;
