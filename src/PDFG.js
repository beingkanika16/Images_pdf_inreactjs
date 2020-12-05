import React, { PureComponent } from "react";
import jsPDF from "jspdf";

export default class PDFG extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  generatePdf = () => {
    var doc = new jsPDF("p", "pt");
    doc.text(20, 20, "this is ujawal pdf  document");

    doc.save("kanu.pdf");
  };
  render() {
    return <button onClick={this.generatePdf}>Generate Pdf</button>;
  }
}
