export default function formDataFormatter(formData) {
  return `
  <div">Your credit application has been received and we will be contacting you shortly.</div>
  <div style="margin-bottom: 30px;>See application details below:</div>
  <div style="margin-bottom: 30px;">
    <div style="font-weight: 900; font-size: 2rem">BUSINESS CONTACT INFO</div>
    <div>
      <span style="font-weight:bold">Company Name:</span>
      <span>${formData.cname}</span>
    </div>
    <div>
      <span style="font-weight:bold">Company Email:</span>
      <span>${formData.cemail}</span>
    </div>
    <div>
      <span style="font-weight:bold">Phone Number:</span>
      <span>${formData.cphone}</span>
    </div>
    <div>
      <span style="font-weight:bold">Fax Number:</span>
      <span>${formData.cfax}</span>
    </div>
    <div>
      <span style="font-weight:bold">Company Type:</span>
      <span>${formData.ctype}</span>
    </div>
    <div>
      <span style="font-weight:bold">Company Shipping Address:</span>
      <span>${formData.cshippingadd}</span>
    </div>
    <div>
      <span style="font-weight:bold">City:</span>
      <span>${formData.ccity}</span>
    </div>
    <div>
      <span style="font-weight:bold">State/Province:</span>
      <span>${formData.cstate}</span>
    </div>
    <div>
      <span style="font-weight:bold">Postal/Zip Code:</span>
      <span>${formData.czipcode}</span>
    </div>
  </div>
<div style="margin-bottom: 10px;">
  <div style="font-weight: 900; font-size: 2rem; margin-bottom: 10px;">BUSINESS AND CREDIT INFO</div>
  <div style="font-weight: 900; font-size: 1.2rem">ACCOUNTS PAYABLE CONTACT INFORMATION</div>
  <div>
    <span style="font-weight:bold">First Name:</span>
    <span>${formData.bcfname}</span>
  </div>
  <div>
    <span style="font-weight:bold">Last Name:</span>
    <span>${formData.bclname}</span>
  </div>
  <div>
    <span style="font-weight:bold">Email:</span>
    <span>${formData.bcemail}</span>
  </div>
  <div>
    <span style="font-weight:bold">Phone Number:</span>
    <span>${formData.bcphone}</span>
  </div>
  <div>
    <span style="font-weight:bold">Fax Number:</span>
    <span>${formData.bcfax}</span>
  </div>
  <div>
    <span style="font-weight:bold">Company to Bill Address:</span>
    <span>${formData.bcbilladd}</span>
  </div>
  <div>
    <span style="font-weight:bold">City:</span>
    <span>${formData.bccity}</span>
  </div>
  <div>
    <span style="font-weight:bold">State/Province:</span>
    <span>${formData.bcstate}</span>
  </div>
  <div>
    <span style="font-weight:bold">Postal/Zip Code:</span>
    <span>${formData.bczipcode}</span>
  </div>
  <div style="font-weight: 900; font-size: 1.2rem; margin-top: 10px;">BANK INFORMATION *</div>
  <div>
    <span style="font-weight:bold">Bank Name:</span>
    <span>${formData.bcbankname}</span>
  </div>
  <div>
    <span style="font-weight:bold">Address:</span>
    <span>${formData.bcbankadd}</span>
  </div>
  <div>
    <span style="font-weight:bold">City:</span>
    <span>${formData.bcbankcity}</span>
  </div>
  <div>
    <span style="font-weight:bold">State/Province:</span>
    <span>${formData.bcbankstate}</span>
  </div>
  <div>
    <span style="font-weight:bold">Postal/Zip Code:</span>
    <span>${formData.bcbankzipcode}</span>
  </div>
  <div>
    <span style="font-weight:bold">Phone Number:</span>
    <span>${formData.bcbankphone}</span>
  </div>
</div>
<div style="margin-bottom: 10px;">
  <div style="font-weight: 900; font-size: 2rem; margin-bottom: 10px;">BUSINESS REFERENCES</div>
  <div style="font-weight: 900; font-size: 1.2rem">REFERENCE 1</div>
  <div>
    <span style="font-weight:bold">Company Name:</span>
    <span>${formData.brcname1}</span>
  </div>
  <div>
    <span style="font-weight:bold">Address:</span>
    <span>${formData.brcaddress1}</span>
  </div>
  <div>
    <span style="font-weight:bold">City:</span>
    <span>${formData.brccity1}</span>
  </div>
  <div>
    <span style="font-weight:bold">State/Province:</span>
    <span>${formData.brcstate1}</span>
  </div>
  <div>
    <span style="font-weight:bold">Postal/Zip Code:</span>
    <span>${formData.brczipcode1}</span>
  </div>
  <div>
    <span style="font-weight:bold">Email:</span>
    <span>${formData.brcemail1}</span>
  </div>
  <div>
    <span style="font-weight:bold">Phone Number:</span>
    <span>${formData.brcphone1}</span>
  </div>
  <div>
    <span style="font-weight:bold">Fax Number:</span>
    <span>${formData.brcfax1}</span>
  </div>
  <div>
    <span style="font-weight:bold">Type of Account:</span>
    <span>${formData.brctype1}</span>
  </div>
  <div style="font-weight: 900; font-size: 1.2rem; margin-top: 10px;">REFERENCE 2</div>
  <div>
    <span style="font-weight:bold">Company Name:</span>
    <span>${formData.brcname2}</span>
  </div>
  <div>
    <span style="font-weight:bold">Address:</span>
    <span>${formData.brcaddress2}</span>
  </div>
  <div>
    <span style="font-weight:bold">City:</span>
    <span>${formData.brccity2}</span>
  </div>
  <div>
    <span style="font-weight:bold">State/Province:</span>
    <span>${formData.brcstate2}</span>
  </div>
  <div>
    <span style="font-weight:bold">Postal/Zip Code:</span>
    <span>${formData.brczipcode2}</span>
  </div>
  <div>
    <span style="font-weight:bold">Email:</span>
    <span>${formData.brcemail2}</span>
  </div>
  <div>
    <span style="font-weight:bold">Phone Number:</span>
    <span>${formData.brcphone2}</span>
  </div>
  <div>
    <span style="font-weight:bold">Fax Number:</span>
    <span>${formData.brcfax2}</span>
  </div>
  <div>
    <span style="font-weight:bold">Type of Account:</span>
    <span>${formData.brctype2}</span>
  </div>
  <div style="font-weight: 900; font-size: 1.2rem; margin-top: 10px;">REFERENCE 3</div>
  <div>
    <span style="font-weight:bold">Company Name:</span>
    <span>${formData.brcname3}</span>
  </div>
  <div>
    <span style="font-weight:bold">Address:</span>
    <span>${formData.brcaddress3}</span>
  </div>
  <div>
    <span style="font-weight:bold">City:</span>
    <span>${formData.brccity3}</span>
  </div>
  <div>
    <span style="font-weight:bold">State/Province:</span>
    <span>${formData.brcstate3}</span>
  </div>
  <div>
    <span style="font-weight:bold">Postal/Zip Code:</span>
    <span>${formData.brczipcode3}</span>
  </div>
  <div>
    <span style="font-weight:bold">Email:</span>
    <span>${formData.brcemail2}</span>
  </div>
  <div>
    <span style="font-weight:bold">Phone Number:</span>
    <span>${formData.brcphone3}</span>
  </div>
  <div>
    <span style="font-weight:bold">Fax Number:</span>
    <span>${formData.brcfax3}</span>
  </div>
  <div>
    <span style="font-weight:bold">Type of Account:</span>
    <span>${formData.brctype3}</span>
  </div>
</div>
  `;
}
