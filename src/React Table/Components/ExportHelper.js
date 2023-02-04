import React from "react";
import * as XLSX from "xlsx";
import * as XlsxPopulate from "xlsx-populate/browser/xlsx-populate";

const ExcelExportHelper = ({ data }) => {
  const createDownLoadData = () => {
    handleExport().then((url) => {
      console.log(url);
      const downloadAnchorNode = document.createElement("a");
      downloadAnchorNode.setAttribute("href", url);
      downloadAnchorNode.setAttribute("download", "student_report.xlsx");
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    });
  };

  const workbook2blob = (workbook) => {
    const wopts = {
      bookType: "xlsx",
      bookSST: false,
      type: "binary",
    };

    const wbout = XLSX.write(workbook, wopts);

    // The application/octet-stream MIME type is used for unknown binary files.
    // It preserves the file contents, but requires the receiver to determine file type,
    // for example, from the filename extension.
    const blob = new Blob([s2ab(wbout)], {
      type: "application/octet-stream",
    });

    return blob;
  };

  const s2ab = (s) => {
    // The ArrayBuffer() constructor is used to create ArrayBuffer objects.
    // create an ArrayBuffer with a size in bytes
    const buf = new ArrayBuffer(s.length);

    // console.log(buf);

    //create a 8 bit integer array
    const view = new Uint8Array(buf);

    // console.log(view);
    //charCodeAt The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code
    for (let i = 0; i !== s.length; ++i) {
      // console.log(s.charCodeAt(i));
      view[i] = s.charCodeAt(i);
    }

    return buf;
  };

  const handleExport = () => {
    const title = [{ A: "Students and Marks details" }, {}];

    let table1 = [
      {
        A: "លរ",
        B: "ល.រ.ផ",
        C: "ឈ្មោះបុគ្គលិក",
        D: "ភេទ",
        E: "តួនាទីការងារ",
        F: "ថ្ងៃចូលធ្វើការ",
        G: "បា្រក់បៀវត្សគោល",
        H: "ប្រាក់បៀវត្យជាក់ស្តែង",
        I: "ប្រាក់តំឡើងថ្មី",
        J: "ប្រាក់ខែគោល",
        K: "ចំនួនថ្ងៃ",
        L: "សរុប",
        M: "ប្រាក់លើកទឹកចិត្ត",
        N: "ចំនួនច្បាប់",
        O: "សរុប",
        P: "ចំនួនច្បាប់",
        Q: "សរុប",
        R: "ដកថ្លៃផ្សេងៗ",
        S: "ប្រាក់មុនបង់ពន្ធ",
        T: "ប្រាក់វិភាគទានសោធនរដ្ធាភិបាលរបស់និយោជិក",
        U: "ប្រាក់ត្រូវបង់ពន្ធ",
        V: "ប្រាក់សរុបត្រូវបើក",
        W: "Case",
        X: "ABA",
        Y: "កំណត់សម្គាល់",
        Z: "ស្ថានភាព",
      },
    ];

    data.forEach((row) => {
      // const studentDetails = row.STUDENT_DETAILS;
      // const marksDetails = row.MARKS;

      table1.push({
        // A: studentDetails.id,
        // B: studentDetails.name,
        // C: studentDetails.parentName,
        // D: studentDetails.classroom,
        // E: studentDetails.subject,
        // F: studentDetails.division,
        // G: studentDetails.status,
      });

      // table2.push({
      //   A: studentDetails.id,
      //   B: studentDetails.name,
      //   C: marksDetails.maths,
      //   D: marksDetails.physics,
      //   E: marksDetails.chemistry,
      //   F: marksDetails.english,
      //   G: marksDetails.computerScience,
      //   H:
      //     marksDetails.maths +
      //     marksDetails.physics +
      //     marksDetails.chemistry +
      //     marksDetails.english +
      //     marksDetails.computerScience,
      // });
    });

    table1 = [{ A: "Student Details" }]
      .concat(table1)
      .concat([""])

    const finalData = [...title, ...table1];

    // console.log(finalData);

    //create a new workbook
    const wb = XLSX.utils.book_new();

    const sheet = XLSX.utils.json_to_sheet(finalData, {
      skipHeader: true,
    });

    XLSX.utils.book_append_sheet(wb, sheet, "student_report");

    // binary large object
    // Since blobs can store binary data, they can be used to store images or other multimedia files.

    const workbookBlob = workbook2blob(wb);

    var headerIndexes = [];
    finalData.forEach((data, index) =>
      data["A"] === "Enrolment No." ? headerIndexes.push(index) : null
    );

    const totalRecords = data.length;

    const dataInfo = {
      titleCell: "A2",
      titleRange: "A1:H2",
      tbodyRange: `A3:H${finalData.length}`,
      theadRange:
        headerIndexes?.length >= 1
          ? `A${headerIndexes[0] + 1}:G${headerIndexes[0] + 1}`
          : null,
      theadRange1:
        headerIndexes?.length >= 2
          ? `A${headerIndexes[1] + 1}:H${headerIndexes[1] + 1}`
          : null,
      tFirstColumnRange:
        headerIndexes?.length >= 1
          ? `A${headerIndexes[0] + 1}:A${totalRecords + headerIndexes[0] + 1}`
          : null,
      tLastColumnRange:
        headerIndexes?.length >= 1
          ? `G${headerIndexes[0] + 1}:G${totalRecords + headerIndexes[0] + 1}`
          : null,

      tFirstColumnRange1:
        headerIndexes?.length >= 1
          ? `A${headerIndexes[1] + 1}:A${totalRecords + headerIndexes[1] + 1}`
          : null,
      tLastColumnRange1:
        headerIndexes?.length >= 1
          ? `H${headerIndexes[0] + 1}:H${totalRecords + headerIndexes[1] + 1}`
          : null,
    };

    return addStyle(workbookBlob, dataInfo);
  };

  const addStyle = (workbookBlob, dataInfo) => {
    return XlsxPopulate.fromDataAsync(workbookBlob).then((workbook) => {
      workbook.sheets().forEach((sheet) => {
        sheet.usedRange().style({
          fontFamily: "Khmer OS Content",
          verticalAlignment: "center",
          border: "1px",
        });

        sheet.column("A").width(15);
        sheet.column("B").width(15);
        sheet.column("C").width(15);
        sheet.column("E").width(15);
        sheet.column("G").width(15);

        sheet.range(dataInfo.titleRange).merged(true).style({
          bold: true,
          horizontalAlignment: "center",
          verticalAlignment: "center",
        });

        if (dataInfo.tbodyRange) {
          sheet.range(dataInfo.tbodyRange).style({
            horizontalAlignment: "center",
          });
        }

        sheet.range(dataInfo.theadRange).style({
          fill: "FFFD04",
          bold: true,
          horizontalAlignment: "center",
        });

        if (dataInfo.theadRange1) {
          sheet.range(dataInfo.theadRange1).style({
            fill: "808080",
            bold: true,
            horizontalAlignment: "center",
            fontColor: "ffffff",
          });
        }

        if (dataInfo.tFirstColumnRange) {
          sheet.range(dataInfo.tFirstColumnRange).style({
            bold: true,
          });
        }

        if (dataInfo.tLastColumnRange) {
          sheet.range(dataInfo.tLastColumnRange).style({
            bold: true,
          });
        }

        if (dataInfo.tFirstColumnRange1) {
          sheet.range(dataInfo.tFirstColumnRange1).style({
            bold: true,
          });
        }

        if (dataInfo.tLastColumnRange1) {
          sheet.range(dataInfo.tLastColumnRange1).style({
            bold: true,
          });
        }
      });

      return workbook
        .outputAsync()
        .then((workbookBlob) => URL.createObjectURL(workbookBlob));
    });
  };

  return (
    <button
      onClick={() => {
        createDownLoadData();
      }}
      className="btn btn-primary float-end">
      Export
    </button>
  );
};

export default ExcelExportHelper;
