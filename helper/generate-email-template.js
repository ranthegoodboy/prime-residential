export default function generateEmailTemplate(cartItems, formVals) {
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
	<!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
	<meta content="width=device-width" name="viewport" />
	<!--[if !mso]><!-->
	<meta content="IE=edge" http-equiv="X-UA-Compatible" />
	<!--<![endif]-->
	<title></title>
	<!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Oxygen" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800;900&display=swap" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Bitter" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" type="text/css" />
	<!--<![endif]-->
	<style type="text/css">
		body {
			margin: 0;
			padding: 0;
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
    
		.email-link a {
			color: #fff !important;
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

		a[x-apple-data-detectors=true] {
			color: inherit !important;
			text-decoration: none !important;
		}
	</style>
	<style id="media-query" type="text/css">
		@media (max-width: 700px) {

			.block-grid,
			.col {
				min-width: 320px !important;
				max-width: 100% !important;
				display: block !important;
			}

			.block-grid {
				width: 100% !important;
			}

			.col {
				width: 100% !important;
			}

			.col_cont {
				margin: 0 auto;
			}

			img.fullwidth,
			img.fullwidthOnMobile {
				max-width: 100% !important;
			}

			.no-stack .col {
				min-width: 0 !important;
				display: table-cell !important;
			}

			.no-stack.two-up .col {
				width: 50% !important;
			}

			.no-stack .col.num2 {
				width: 16.6% !important;
			}

			.no-stack .col.num3 {
				width: 25% !important;
			}

			.no-stack .col.num4 {
				width: 33% !important;
			}

			.no-stack .col.num5 {
				width: 41.6% !important;
			}

			.no-stack .col.num6 {
				width: 50% !important;
			}

			.no-stack .col.num7 {
				width: 58.3% !important;
			}

			.no-stack .col.num8 {
				width: 66.6% !important;
			}

			.no-stack .col.num9 {
				width: 75% !important;
			}

			.no-stack .col.num10 {
				width: 83.3% !important;
			}

			.video-block {
				max-width: none !important;
			}

			.mobile_hide {
				min-height: 0px;
				max-height: 0px;
				max-width: 0px;
				display: none;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide {
				display: block !important;
				max-height: none !important;
			}
		}
	</style>
	<style id="icon-media-query" type="text/css">
		@media (max-width: 700px) {
			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}
		}
	</style>
</head>

<body class="clean-body" style="margin: 0; padding: 0; padding-top: 40px; padding-bottom: 40px; -webkit-text-size-adjust: 100%; background-color: #F5F9FF;">
	<!--[if IE]><div class="ie-browser"><![endif]-->
	<table bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
		style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;"
		valign="top" width="100%">
		<tbody>
			<tr style="vertical-align: top;" valign="top">
				<td style="word-break: break-word; vertical-align: top;" valign="top">
					<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#FFFFFF"><![endif]-->
					<div style="background-color:#F5F9FF;">
						<div class="block-grid no-stack"
							style="min-width: 320px; max-width: 800px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #160D44;">
							<div style="border-collapse: collapse;display: table;width: 100%;background-color:#160D44;">
								<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F5F9FF;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:800px"><tr class="layout-full-width" style="background-color:#160D44"><![endif]-->
								<!--[if (mso)|(IE)]><td align="center" width="680" style="background-color:#160D44;width:800px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:0px; padding-bottom:0px;"><![endif]-->
								<div class="col num12"
									style="min-width: 320px; max-width: 800px; display: table-cell; vertical-align: top; width: 800px;">
									<div class="col_cont" style="width:100% !important;">
										<!--[if (!mso)&(!IE)]><!-->
										<div
											style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 20px; padding-left: 20px;">
											<!--<![endif]-->
											<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
											<div
												style="color:#ffffff;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:14px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
												<div class="txtTinyMce-wrapper"
													style="line-height: 1.2; font-size: 12px; color: #ffffff; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14px;">
                          <table style="width: 100%;">
                            <tr>
                              <td style="width: 60%;">
																<img width="20px" height="20px" src="https://files.primemetalproducts.com/images/pin.png">
																<span>220757 North East Highway 92 Gering NE 69341</span>
															</td>
                              <td style="width: 40%; text-align: right !important;">
																<img width="20px" height="20px" src="https://files.primemetalproducts.com/images/email.png">
																<span class="email-link" style="margin-left: 5px;">info@primemetalproducts.com</span>
															</td>
                            </tr>
                          </table>
												</div>
											</div>
											<!--[if mso]></td></tr></table><![endif]-->
											<!--[if (!mso)&(!IE)]><!-->
										</div>
										<!--<![endif]-->
									</div>
								</div>
								<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
								<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
							</div>
						</div>
					</div>
					<div
						style="background-image:url('');background-position:top center;background-repeat:no-repeat;background-color:#F5F9FF;">
						<div class="block-grid"
							style="min-width: 320px; max-width: 800px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #e6ecf1;">
							<div style="border-collapse: collapse;display: table;width: 100%;background-color:#e6ecf1;">
								<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-image:url('');background-position:top center;background-repeat:no-repeat;background-color:#F5F9FF;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:800px"><tr class="layout-full-width" style="background-color:#e6ecf1"><![endif]-->
								<!--[if (mso)|(IE)]><td align="center" width="680" style="background-color:#e6ecf1;width:800px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
								<div class="col num12"
									style="min-width: 320px; max-width: 800px; display: table-cell; vertical-align: top; width: 800px;">
									<div class="col_cont" style="width:100% !important;">
										<!--[if (!mso)&(!IE)]><!-->
										<div
											style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
											<!--<![endif]-->
											<div align="center" class="img-container center autowidth"
												style="padding-right: 0px;padding-left: 0px; background-image: url('https://files.primemetalproducts.com/images/prime-email-banner.png'); background-repeat: no-repeat;height: 270px; width: 800px;">
											</div>
											<!--[if (!mso)&(!IE)]><!-->
										</div>
										<!--<![endif]-->
									</div>
								</div>
								<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
								<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
							</div>
						</div>
					</div>
					<div style="background-color:#F5F9FF;">
						<div class="block-grid"
							style="min-width: 320px; max-width: 800px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #fff;">
							<div style="border-collapse: collapse;display: table;width: 100%;background-color:#fff;">
								<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F5F9FF;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:800px"><tr class="layout-full-width" style="background-color:#fff"><![endif]-->
								<!--[if (mso)|(IE)]><td align="center" width="680" style="background-color:#fff;width:800px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:30px; padding-bottom:5px;"><![endif]-->
								<div class="col num12"
									style="min-width: 320px; max-width: 800px; display: table-cell; vertical-align: top; width: 800px;">
									<div class="col_cont" style="width:100% !important;">
										<!--[if (!mso)&(!IE)]><!-->
										<div
											style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:30px; padding-bottom:5px; padding-right: 0px;">
											<!--<![endif]-->
											<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 0px; font-family: Tahoma, sans-serif"><![endif]-->
											<div
												style="color:#243747;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;letter-spacing:1px;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:40px;padding-left:10px;">
												<div class="txtTinyMce-wrapper"
													style="line-height: 1.2; font-size: 12px; color: #160D44; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; letter-spacing: 1px; mso-line-height-alt: 14px; border-bottom: 1px solid #707070; padding-bottom: 12px;">
													<p
														style="font-size: 14px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; letter-spacing: 1px; margin: 0;">
														<strong><span style="font-size: 22px;">Account & Shipping Information</span></strong></p>
												</div>
                        <table style="width: 100%; margin-top: 20px; font-size: 13px; color: #000 !important; font-family: Montserrat; border-collapse: separate; 
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
                        
                        <div class="txtTinyMce-wrapper"
													style="line-height: 1.2; font-size: 12px; color: #160D44; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; letter-spacing: 1px; mso-line-height-alt: 14px; padding-bottom: 12px; margin-top: 30px;">
													<p
														style="font-size: 14px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; letter-spacing: 1px; margin: 0;">
														<strong><span style="font-size: 22px;">Items</span></strong></p>
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
											<!--[if mso]></td></tr></table><![endif]-->
											<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 5px; padding-left: 5px; padding-top: 5px; padding-bottom: 5px; font-family: Tahoma, sans-serif"><![endif]-->
											<div
												style="color:#20cef0;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;letter-spacing:1px;line-height:1.2;padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px;">
												<div class="txtTinyMce-wrapper"
													style="line-height: 1.2; font-size: 12px; color: #20cef0; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; letter-spacing: 1px; mso-line-height-alt: 14px;">
												</div>
											</div>

										</div>
										<!--<![endif]-->
									</div>
								</div>
								<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
								<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
							</div>
						</div>
					</div>
					<div style="background-color:#F5F9FF;">
						<div class="block-grid"
							style="min-width: 320px; max-width: 800px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ececec;">
							<div style="border-collapse: collapse;display: table;width: 100%;background-color:#ececec;">
								<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F5F9FF;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:800px"><tr class="layout-full-width" style="background-color:#ececec"><![endif]-->
								<!--[if (mso)|(IE)]><td align="center" width="680" style="background-color:#ececec;width:800px; border-top: 0px solid #D8D8D8; border-left: 0px solid #D8D8D8; border-bottom: 2px solid #D8D8D8; border-right: 0px solid #D8D8D8;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 5px; padding-left: 5px; padding-top:5px; padding-bottom:5px;"><![endif]-->
								<div class="col num12"
									style="min-width: 320px; max-width: 800px; display: table-cell; vertical-align: top; width: 800px;">
									<div class="col_cont" style="width:100% !important;">
										<!--[if (!mso)&(!IE)]><!-->
										<div
											style="border-top:0px solid #D8D8D8; border-left:0px solid #D8D8D8; border-bottom:2px solid #D8D8D8; border-right:0px solid #D8D8D8; padding-top:5px; padding-bottom:5px; padding-right: 5px; padding-left: 5px;">
											<!--<![endif]-->
											<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
											<div
												style="color:#afafaf;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.5;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
												<div class="txtTinyMce-wrapper"
													style="line-height: 1.5; font-size: 12px; color: #afafaf; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px;">
													<p
														style="text-align: center; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; margin: 0;">
                            <span style="color: #160D44;"><span
																	style="font-size: 14px; font-weight: 600;">
                              <a href="https://primemetalproducts.com/" target="_blank">Go to www.primemetalproduct.com</a></span></span>
														<span style="color: #160D44;"><strong><span style="padding-left: 10px; padding-right: 10px;">|</span><span
																	style="font-size: 14px;">Questions? Contact us at (308)-633-0025</span></strong></span></p>
												</div>
											</div>
											<!--[if mso]></td></tr></table><![endif]-->
											<!--[if (!mso)&(!IE)]><!-->
										</div>
										<!--<![endif]-->
									</div>
								</div>
								<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
								<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
							</div>
						</div>
					</div>
					<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
				</td>
			</tr>
		</tbody>
	</table>
	<!--[if (IE)]></div><![endif]-->
</body>

</html>`;
}
