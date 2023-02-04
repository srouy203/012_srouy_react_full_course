import React from "react";
// import MOCK_DATA from "./MOCK_DATA.json";
import * as XLSX from "xlsx/xlsx.mjs";
import data from "./data.json";
import "@fontsource/kantumruy-pro";
import { Text, Button } from "@chakra-ui/react";
import "./Table.css";
import * as XlsxPopulate from "xlsx-populate/browser/xlsx-populate";
import ExcelExportHelper from "./ExportHelper";
// import TableToExcel from "@linways/table-to-excel";
import TableToExcel from "@linways/table-to-excel";

function ExportFileMergeColumn() {
  console.log(data);

  // const handleOnExport = () => {
  //     var wb = XLSX.utils.book_new(),
  //       ws = XLSX.utils.json_to_sheet(data);

  //     XLSX.utils.book_append_sheet(wb, ws, "MySheet1");

  //     XLSX.writeFile(wb, "MyData.xlsx");
  // };

  // const handleOnExport = () => {
  //   // STEP 1: Create a new workbook
  //   const wb = XLSX.utils.book_new();

  //   // STEP 2: Create data rows and styles
  //   let row = [
  //     { v: "Courier: 24", t: "s", s: { font: { name: "Courier", sz: 24 } } },
  //     {
  //       v: "bold & color",
  //       t: "s",
  //       s: { font: { bold: true, color: { rgb: "FF0000" } } },
  //     },
  //     { v: "fill: color", t: "s", s: { fill: { fgColor: { rgb: "E9E9E9" } } } },
  //     { v: "line\nbreak", t: "s", s: { alignment: { wrapText: true } } },
  //   ];

  //   // STEP 3: Create worksheet with rows; Add worksheet to workbook
  //   const ws = XLSX.utils.aoa_to_sheet([row]);
  //   XLSX.utils.book_append_sheet(wb, ws, "readme demo");

  //   // STEP 4: Write Excel file to browser
  //   XLSX.writeFile(wb, "xlsx-js-style-demo.xlsx");
  // }
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

    console.log(buf);

    //create a 8 bit integer array
    const view = new Uint8Array(buf);

    console.log(view);
    //charCodeAt The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code
    for (let i = 0; i !== s.length; ++i) {
      // console.log(s.charCodeAt(i));
      view[i] = s.charCodeAt(i);
    }

    return buf;
  };

  //new
  function newExport() {
    XlsxPopulate.fromBlankAsync().then((workbook) => {
      // Modify the workbook.
      workbook.sheet("Sheet1").cell("A1").value("This is neat!");

      // Write to file.
      return workbook.toFileAsync("./out.xlsx");
    });
  }

  function exportFile() {
    var wb = XLSX.utils.table_to_book(document.getElementById("sampletable"));
    // console.log(wb.Sheets.Sheet1["A1"]);
    console.log(wb);
    const workbookBlob = workbook2blob(wb);
    console.log(workbookBlob);
    // wb.sheet.column("A").width(20);
    // const b = addStyle(workbookBlob);
    XLSX.writeFile(wb, "sample.xlsx");
    // return false;
  }

  const addStyle = (workbookBlob) => {
    return XlsxPopulate.fromDataAsync(workbookBlob).then((workbook) => {
      console.log(workbook);
      workbook.sheets().forEach((sheet) => {
        // console.log(sheet);
        sheet.usedRange().style({
          fontFamily: "Arial",
          verticalAlignment: "center",
        });
        sheet.column("A").style({ bold: true, italic: true });
        // console.log(sheet.column("A"));
        sheet.column("A").width(20);
        sheet.column("B").width(15);
        sheet.column("C").width(15);
        sheet.column("E").width(15);
        sheet.column("G").width(15);
        sheet.column("H").width(15);
        console.log(workbook);
        // return workbook
        //   .outputAsync()
        //   .then((workbookBlob) => URL.createObjectURL(workbookBlob));
      });
    });
  };

  function tableToExcel() {
    TableToExcel.convert(document.getElementById("sampletable"), {
      name: "TableToExcel.xlsx",
      sheet: {
        name: "Sheet 1",
      },
    });
  }

  return (
    <div>
      <Text fontSize="3xl" textAlign="center">
        KOBE TOUL KORK
      </Text>
      <Text textAlign="center" fontSize="1.5xl">
        Salary Report Of 01st To 15th October 2022
      </Text>
      <Button mb="10px" onClick={exportFile}>
        Export
      </Button>
      <Button mb="10px" ml="10px" onClick={newExport}>
        New Export
      </Button>
      <Button mb="10px" ml="10px" onClick={tableToExcel}>
        tableToExcel
      </Button>

      <ExcelExportHelper data={data} />
      <table
        width="190%"
        style={{ fontFamily: "Kantumruy Pro, sans-serif" }}
        id="sampletable"
        data-cols-width="8,8,30,8,30, 16,16,16, 20,15,15, 15,15,25,15, 15,15,25,15,15,15, 15,40,15, 15, 15,15, 20">
        <tr>
          <td
            colSpan="27"
            style={{
              backgroundColor: "#CBDFB8",
              height: "20px",
              textAlign: "start",
              paddingLeft: "30px",
            }}
            data-fill-color="CBDFB8"
            data-f-name="Khmer OS Content"></td>
        </tr>
        <tr data-height="50">
          <td
            rowSpan="3"
            colSpan="1"
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle"
            data-b-a-s="1px solid black">
            លរ
          </td>
          <td
            rowSpan="3"
            colSpan="1"
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            ល.រ.ផ
          </td>
          <td
            rowSpan="3"
            colSpan="1"
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            ឈ្មោះបុគ្គលិក
          </td>
          <td
            rowSpan="3"
            colSpan="1"
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            ភេទ
          </td>
          <td
            rowSpan="3"
            colSpan="1"
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            តួនាទីការងារ
          </td>
          <td
            rowSpan="3"
            colSpan="1"
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            ថ្ងៃចូលធ្វើការ
          </td>
          <td
            rowSpan="3"
            colSpan="1"
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            បា្រក់បៀវត្ស
            <br />
            គោល
          </td>
          <td
            rowSpan="3"
            colSpan="1"
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            ចំនួនថ្ងៃ
            <br />
            ធ្វើការ
          </td>
          <td
            rowSpan="1"
            colSpan="3"
            style={{ padding: "20px" }}
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            ប្រាក់បៀវត្យ
          </td>
          <td
            rowSpan="1"
            colSpan="3"
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            ប្រាក់ឧបត្ថម
          </td>
          <td
            rowSpan="1"
            colSpan="5"
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            ការកាត់កង
          </td>
          <td
            rowSpan="1"
            colSpan="3"
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            ប្រាក់ត្រូវកាត់ពន្ធ
          </td>
          <td
            rowSpan="3"
            colSpan="1"
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            ប្រាក់សរុប
            <br />
            ត្រូវបើក
          </td>
          <td
            rowSpan="1"
            colSpan="2"
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            ប្រាក់សរុបត្រូវបើក
          </td>
          <td
            rowSpan="3"
            colSpan="1"
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            កំណត់សម្គាល់
          </td>
          <td
            rowSpan="3"
            colSpan="1"
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            ស្ថានភាព
          </td>
        </tr>

        <tr>
          <td
            rowSpan="2"
            colSpan="1"
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            ប្រាក់បៀវត្យ
            <br />
            ជាក់ស្តែង
          </td>
          <td
            rowSpan="2"
            colSpan="1"
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            ប្រាក់តំឡើង <br /> ថ្មី
          </td>
          <td
            rowSpan="2"
            colSpan="1"
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            ប្រាក់ខែ <br /> គោល
          </td>
          <td
            rowSpan="1"
            colSpan="2"
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            ចំនួនថែមម៉ោង100%
          </td>
          <td
            rowSpan="2"
            colSpan="1"
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            ប្រាក់លើក
            <br />
            ទឹកចិត្ត
          </td>
          <td
            rowSpan="1"
            colSpan="2"
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            មានច្បាប់
          </td>
          <td
            rowSpan="1"
            colSpan="2"
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            អត់ច្បាប់
          </td>
          <td
            rowSpan="2"
            colSpan="1"
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            ដកថ្លៃផ្សេងៗ
          </td>
          <td
            rowSpan="2"
            colSpan="1"
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            ប្រាក់មុនបង់ពន្ធ
          </td>
          <td
            rowSpan="2"
            colSpan="1"
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            ប្រាក់វិភាគទានសោធន
            <br />
            រដ្ធាភិបាលរបស់
            <br />
            និយោជិក
          </td>
          <td
            rowSpan="2"
            colSpan="1"
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            ប្រាក់ត្រូវបង់ពន្ធ
          </td>
          <td
            rowSpan="2"
            colSpan="1"
            data-f-name="Microsoft New Tai Lue"
            data-a-h="center"
            data-a-v="middle">
            Case
          </td>
          <td
            rowSpan="2"
            colSpan="1"
            data-f-name="Microsoft New Tai Lue"
            data-a-h="center"
            data-a-v="middle">
            ABA
          </td>
        </tr>

        <tr>
          <td
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            ចំនួនថ្ងៃ
          </td>
          <td
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            សរុប
          </td>
          <td
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            ចំនួនច្បាប់
          </td>
          <td
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            សរុប
          </td>
          <td
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            ចំនួនច្បាប់
          </td>
          <td
            data-f-name="Khmer OS Content"
            data-a-h="center"
            data-a-v="middle">
            សរុប
          </td>
        </tr>
        <tr>
          <td
            colSpan="27"
            style={{
              backgroundColor: "#F9DA78",
              height: "40px",
              textAlign: "start",
              paddingLeft: "30px",
            }}
            data-fill-color="F9DA78"
            data-f-name="Khmer OS Content">
            ផ្នែកការិយាល័យកណ្តាល
          </td>
        </tr>
        {data.map((val, i) => {
          return (
            <tr key={i} style={{ height: "40px" }}>
              <td data-f-name="Khmer OS Content">{val.លរ}</td>
              <td data-f-name="Khmer OS Content">{val.លរផ}</td>
              <td data-f-name="Khmer OS Content">{val.ឈ្មោះបុគ្គលិក}</td>
              <td data-f-name="Khmer OS Content">{val.ភេទ}</td>
              <td data-f-name="Khmer OS Content">{val.តួនាទីការងារ}</td>
              <td data-f-name="Khmer OS Content">{val.ថ្ងៃចូលធ្វើការ}</td>
              <td data-f-name="Khmer OS Content">${val.បា្រក់បៀវត្សគោល} </td>
              <td data-f-name="Khmer OS Content">{val.ចំនួនថ្ងៃធ្វើការ}</td>
              <td data-f-name="Khmer OS Content">
                ${val.ប្រាក់បៀវត្យ.ប្រាក់បៀវត្យជាក់ស្តែង}
              </td>
              <td data-f-name="Khmer OS Content">
                ${val.ប្រាក់បៀវត្យ.ប្រាក់តំឡើងថ្មី}
              </td>
              <td data-f-name="Khmer OS Content">
                ${val.ប្រាក់បៀវត្យ.ប្រាក់ខែគោល}
              </td>
              <td data-f-name="Khmer OS Content">
                {val.ប្រាក់ឧបត្ថម.ចំនួនថែមម៉ោង100.ចំនួនថ្ងៃ}ថ្ងៃ
              </td>
              <td data-f-name="Khmer OS Content">
                {val.ប្រាក់ឧបត្ថម.ចំនួនថែមម៉ោង100.សរុប}
              </td>
              <td data-f-name="Khmer OS Content">
                ${val.ប្រាក់ឧបត្ថម.ប្រាក់លើកទឹកចិត្ត}
              </td>
              <td data-f-name="Khmer OS Content">
                {val.ការកាត់កង.មានច្បាប់.ចំនួនច្បាប់}
              </td>
              <td data-f-name="Khmer OS Content">
                {val.ការកាត់កង.មានច្បាប់.សរុប}
              </td>
              <td data-f-name="Khmer OS Content">
                {val.ការកាត់កង.អត់ច្បាប់.ចំនួនច្បាប់}
              </td>
              <td data-f-name="Khmer OS Content">
                {val.ការកាត់កង.អត់ច្បាប់.សរុប}
              </td>
              <td data-f-name="Khmer OS Content">
                KHR{val.ការកាត់កង.ដកថ្លៃផ្សេងៗ}
              </td>
              <td data-f-name="Khmer OS Content">
                ${val.ប្រាក់ត្រូវកាត់ពន្ធ.ប្រាក់មុនបង់ពន្ធ}
              </td>
              <td data-f-name="Khmer OS Content">
                $
                {
                  val.ប្រាក់ត្រូវកាត់ពន្ធ
                    .ប្រាក់វិភាគទានសោធនរដ្ធាភិបាលរបស់និយោជិក
                }
              </td>
              <td data-f-name="Khmer OS Content">
                ${val.ប្រាក់ត្រូវកាត់ពន្ធ.ប្រាក់ត្រូវបង់ពន្ធ}
              </td>
              <td data-f-name="Khmer OS Content">${val.ប្រាក់ត្រូវបើក}</td>
              <td data-f-name="Khmer OS Content">
                ${val.ប្រាក់សរុបត្រូវបើក.Case}
              </td>
              <td data-f-name="Khmer OS Content">
                ${val.ប្រាក់សរុបត្រូវបើក.ABA}
              </td>
              <td data-f-name="Khmer OS Content">{val.កំណត់សម្គាល់}</td>
              <td data-f-name="Khmer OS Content">{val.ស្ថានភាព}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default ExportFileMergeColumn;
