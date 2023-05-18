import BGImg from "../public/images/template/prime-email-banner.png";
import Pin from "../public/images/template/pin.png";
import Email from "../public/images/template/email.png";

export default function generatePdfTemplate(cartItems, formVals) {
  const createCartItemTableBody = () => {
    let html = "";
    for (let i = 0; i < cartItems.length; i++) {
      html += `<tr>
        <td> ${cartItems[i].category} </td>
        <td>`;
      for (let x = 0; x < cartItems[i].fittings.length; x++) {
        html += `<div style="margin-bottom: 5px;"> ${cartItems[i].fittings[x].title} ,  ${cartItems[i].fittings[x].primeProducts.partNumber} </div>`;
      }
      html += `</td>
        <td>`;
      for (let x = 0; x < cartItems[i].fittings.length; x++) {
        html += `<div style="margin-bottom: 5px;"> ${cartItems[i].fittings[x].primeProducts.description} </div>`;
      }
      html += `</td>
        <td>`;
      for (let x = 0; x < cartItems[i].fittings.length; x++) {
        html += `<div style="margin-bottom: 5px; text-align: center;"> ${cartItems[i].fittings[x].qty} </div>`;
      }
      html += `</td>
      </tr>`;
    }
    return html;
  };

  return `<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"
  xmlns:v="urn:schemas-microsoft-com:vml">
  <head>
     <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
     <meta content="width=device-width" name="viewport" />
     <meta content="IE=edge" http-equiv="X-UA-Compatible" />
     <title></title>
     <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800;900&display=swap" rel="stylesheet" type="text/css" />
     <style type="text/css">
        body {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        }
        table,
        td,
        tr {
        vertical-align: top;
        border-collapse: collapse;
        }
        td img { 
        vertical-align: middle;
        }
        * {
        line-height: inherit;
        }

        .item-table td {
        border-left: 1px solid #000;
        border-right: 1px solid #000;
        border-top: 1px solid #000;
        padding: 5px;
        }
        .item-table thead td {
        padding: 5px;
        }
        .item-table td:first-child {
        border-left: none;
        }
        .item-table td:last-child {
        border-right: none;
        }
        img.email-banner + div {
        display:none;
        }
        img.email-banner {
        pointer-events: none;
        }
        .main-container {
        width: 816px;
        background-color: #fff;
        padding-top: 20px;
        padding-bottom: 40px
        }
        .top-header {
          margin-left: 10px;
          margin-right: 10px;
        }
        .top-info {
          padding: 0 10px 0 10px;
        }
        .content-wrapper {
         width: 100%;
         padding: 40px 10px;
        }
        .items-wrapper {
          margin-top: 30px;
        }
        .footer-wrapper {
         text-align: center;
        }
            
		    .email-link a {
			    color: #fff !important;
		    }
     </style>
  </head>
  <body>
     <div class="main-container">
     <div class="top-header" style="background-image: url('${
       BGImg.src
     }'); background-repeat: no-repeat;height: 270px; width: 795px;">
     >
        <div class="top-info">
           <table style="width: 100%;">
              <tr>
                 <td style="width: 60%;">
                    <img width="20px" height="20px" src=${
                      Pin.src
                    } style="display: inline-block">
                    <span style="color: #fff;">220757 North East Highway 92 Gering NE 69341</span>
                 </td>
                 <td style="width: 40%; text-align: right !important;">
                    <img width="20px" height="20px" src=${
                      Email.src
                    } style="display: inline-block">
                    <span class="email-link" style="margin-left: 5px; color: #fff"><a href="mailto:info@primemetalproducts.com">info@primemetalproducts.com</a></span>
                 </td>
              </tr>
           </table>
        </div>
     </div>
     <div class="content-wrapper">
        <div style="width: 100%; color: #160D44; border-bottom: 1px solid #707070; padding-bottom: 10px;">
           <strong><span style="font-size: 22px;">Account & Shipping Information</span></strong>
        </div>
        <table style="width: 100%; margin-top: 20px; color: 160D44 !important; font-size: 14px; font-family: Montserrat; border-collapse: separate; 
           border-spacing:0 5px;">
           <tr>
              <td style="width: 33%;">
                 <strong><span>Job Name:</span></strong>
                 <span>${formVals.jobName}</span>
              </td>
              <td style="width: 33%;">
                 <strong><span>Date Needed On Site:</span></strong>
                 <span>${formVals.shipDate}</span>
              </td>
           </tr>
           <tr>
              <td style="width: 33%;">
                 <strong><span>Account #:</span></strong>
                 <span>${formVals.shipAccount}</span>
              </td>
              <td style="width: 33%;">
                 <strong><span>Company:</span></strong>
                 <span>${formVals.shipCompany}</span>
              </td>
              <td style="width: 33%;">
                 <strong><span>Purchase Order:</span></strong>
                 <span>${formVals.shipPurchaseOrder}</span>
              </td>
           </tr>
           <tr>
              <td style="width: 33%;">
                 <strong><span>City:</span></strong>
                 <span>${formVals.shipCity}</span>
              </td>
              <td style="width: 33%;">
                 <strong><span>State:</span></strong>
                 <span>${formVals.shipState}</span>
              </td>
              <td style="width: 33%;">
                 <strong><span>Zip Code:</span></strong>
                 <span>${formVals.shipZipCode}</span>
              </td>
           </tr>
        </table>
        <div class="items-wrapper">
           <div style="margin-bottom: 10px;">
              <strong><span style="font-size: 22px; color: #160D44;">Items</span></strong>
           </div>
           <table class="item-table" style="border-collapse: collapse; width: 100%; border: 1px solid #707070; color: #160D44; font-size: 12px;">
              <thead>
                 <tr>
                    <td><span><strong>CATEGORY</strong></span></td>
                    <td><span><strong>PART #</strong></span></td>
                    <td><span><strong>DESCRIPTION</strong></span></td>
                    <td><span><strong>QTY</strong></span></td>
                 </tr>
              <thead>
              <tbody>
                 ${createCartItemTableBody()}
              </tbody>
           </table>
        </div>
     </div>
     <div class="footer-wrapper">
        <span> <a href="https://primemetalproducts.com/" target="_blank">Go to www.primemetalproduct.com</a></span>
        <span style="padding-left: 10px; padding-right: 10px;">|</span
        <span>Questions? Contact us at (308)-633-0025</span>
     </div>
  </body>
</html>`;
}
