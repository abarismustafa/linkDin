import { Button, Modal } from "react-bootstrap"

function TermAndCondition(props) {
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose} className="dilog-condition">
                <Modal.Header closeButton>
                    <Modal.Title>Terms and Conditions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="term-cond">
                                <h2><strong>INTRODUCTION</strong> </h2>
                                <p>These Terms and Conditions exist for the benefit of AIBOT industries pvt ltd and its Distributors. AIBOT industries pvt ltd, at its sole discretion, reserves the right to terminate the account of any Marketing Associate caught in violation of the Terms and Conditions without notice. AIBOT industries pvt ltd reserves the right to change these terms and Conditions at any time, and you agree to abide by the most recent version of this Terms and Conditions each time you view and use the website and/or www.partners.aibotworld.in’ leads and/or training material.Do not use the website and/or AIBOT.live’s leads and/or training material if you do not agree to all of these terms and conditions.</p>
                                <p>Like many site operators, we collect information that your browser sends whenever you visit our Site (“Log Data”). This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.</p>

                                <h2><strong>1.	ILLEGAL ACTIVITY:</strong></h2>
                                <p>As AIBOT industries pvt ltd is fully legal,Distributor may not present AIBOT industries pvt ltd promotions on any SOCIAL page, newsgroup, email or any distribution method that is regarded objectionable by AIBOT industries pvt ltd . Its internet service providers, or otherwise considered unlawful according to any controlling legal authority.</p>


                                {/* <p> i.	Announcements;</p>
                                <p>ii.	Administrative messages/direct messages ;</p>
                                <p>iii.	Advertisements;</p>
                                <p>iv.	direct notification to your account; and</p>
                                <p> v.	by any other means that We may consider fit for this purpose.
                                    You agree that You shall mark Us as a safe sender on all Your platforms where You receive any such communications from Us (including via email and SMS) to ensure such communications are not transferred to the spam/junk folder. by any other means that We may consider fit for this purpose.
                                    You agree that You shall mark Us as a safe sender on all Your platforms where You receive any such communications from Us (including via email and SMS) to ensure such communications are not transferred to the spam/junk folder.</p> */}

                                <h2><strong>2. THIRD-PARTY LIABILITY:</strong></h2>

                                <p>AIBOT industries pvt ltd willing no way be liable for the actions of third parties that may in may in any way cause member harm.</p>
                                {/* <p>1.	Your full name;</p>
                                <p> 2.	Your mobile number;</p>
                                <p>3. Your full address and state of residence;</p>
                                <p> 4.	Your gender; and</p>
                                <p>5.	Your date of birth.</p>
                                <p>6.	Aadhar number</p>
                                <p> 7.	Any other valid identification</p>
                                <p>8.	Bank Account information</p>
                                <p>9.	UPI ID</p>
                                <p>10.	Permanent Account Number (PAN) We reserve the right to conduct KYC as may be required from time to time in the manner prescribed under such law.</p> */}

                                <h2><strong>4.	TERMINATION:</strong></h2>
                                <p>The membership of the Distributor can be cancelled anytime by AIBOT industries pvt ltd without giving any reason.</p>

                                <h2><strong>5.	ETHICS.</strong></h2>

                                <p>Any Distributor acting unethical or unprofessional may be removed without refund at the sole discretion of AIBOT industries pvt ltd with all future commissions or lead and/or training usage forfeited.</p>

                                <h2><strong>7. CANCELLATION/TERMINATION OF MEMBERSHIP</strong></h2>


                                <p>Any Distributor that is cancelled/ terminated will forfeit all benefits and privileges associated with AIBOT industries pvt ltd . Any positions held in participating programs owned by AIBOT industries pvt ltd will also be forfeited and ownership will be reassigned to AIBOT industries pvt ltd.</p>


                                <h2><strong>8. RELATIONSHIP OF PARTIES.</strong></h2>
                                <p>While the parties shall work hand-in-hand for the benefit of both, the parties acknowledge and agree that the Distributor shall, from a legal perspective, act as and shall be an independent contractor and not an employee or agent of AIBOT industries pvt ltd . Nothing in this Agreement or these Terms and Conditions shall create a partnership, joint venture, agency, or franchise between the parties in the legal sense of these terms. The Distributor shall not sign any document in the name of or on behalf of AIBOT industries pvt ltd nor shall it hold itself out as being an agent AIBOT industries pvt ltd or as having apparent authority to contract for or bind AIBOT industries pvt ltd</p>


                                <h2><strong>9. DISPUTES</strong></h2>
                                <p>Agreements shall be interpreted under the laws of the country of incorporation for AIBOT industries pvt ltd Any disputes made with financial processors for purchases made will result in immediate termination of the Distributorship account with AIBOT industries pvt ltd.</p>

                                <h2><strong>10. COPYRIGHT MATERIAL</strong></h2>
                                <p>All branding, logos and graphics contained within AIBOT industries pvt ltd are copyright use; distribution or copying of such content is expressly prohibited. AIBOT industries pvt ltd provides Distributor with approved material for marketing any 3rd party or self-created marketing material must be first approved by AIBOT industries pvt ltd before it may be used.</p>

                                <h2><strong>11. DAMAGING INTENT.</strong></h2>
                                <p>Any Distributor who engages in chat, email, postings or any other medium, content that is deemed damaging to AIBOT industries pvt ltd and or its employees and/or fellow Distributor will be terminated from AIBOT industries pvt ltd. Depending on seriousness, AIBOT industries pvt ltd may deem it appropriate to exercise legal action.</p>

                                <h2><strong>12. UCE/UBE OR SPAM.</strong></h2>
                                <p>AIBOT industries pvt ltd strictly prohibits the use of UCE or SPAM. This enforcement is at the sole discretion of AIBOT industries pvt ltd and for the benefit of all Distributor. Distributors proven to be participating in such activities will have their account(s) terminated and they will forfeit any and all current or future commissions.</p>


                                <h2><strong>13. CONTACT INFORMATION</strong></h2>
                                <p>It is the responsibility of Distributors to keep their personal records up to date at the member’s area. AIBOT industries pvt ltd will not be responsible for communication error due to incorrect or out of date contact information. Continued failed attempts to make contact with you may result in the termination of your account.</p>


                                <h2><strong>14. TAX.</strong></h2>
                                <p>You, the Distributor, are responsible for any and all taxes payable in your resident domicile or jurisdiction, for any income you receive either from AIBOT industries pvt ltd or any leads sold via the AIBOT industries pvt ltd website.</p>

                                <h2><strong>15. NO WARRANTY</strong></h2>

                                <p>All leads, trainings etc. is provided \As Is\ and without any warranty, express, implied or otherwise, regarding its accuracy or performance.</p>

                                <h2><strong>16. NO ASSIGNMENT</strong></h2>
                                <p>Distributors may not assign or transfer any rights or obligations under this Agreement without the prior written consent of the other party.</p>


                                <h4><strong>17. SEVERABILITY.</strong></h4>
                                <p>Distributors and AIBOT industries pvt ltd agree that if any portion of this agreement is found illegal or unenforceable, that portion shall be severed and the remainder of the agreement shall be given full force and effect.</p>


                                <h2><strong>18. LIMITATION OF LIABILITY; SOLE AND EXCLUSIVE REMEDY; INDEMNIFICATION.</strong></h2>
                                <p>You agree that AIBOT industries pvt ltd is NOT responsible for the success or failure of your business or your business decisions relating to any information presented by our company or our company products and/or services.</p>


                                <h2><strong>19. ACCURATENESS OF INFORMATION</strong> </h2>
                                <p>AIBOT industries pvt ltd makes no representations as to the accurateness or reliability of any advertising message or marketing tool offered through any referral, outside company or on this site. While we believe the people/companies we work with to be honest and ethical, we recommend you do your own due diligence relating to any specific claims or promises made in the marketing message, as it relates to your use and purchase.</p>


                                <h2><strong>20. CROSS SPONSORING/CROSS RECRUITING</strong></h2>
                                <p>Cross sponsoring, cross recruiting and cross line jumping are prohibited as per the company's terms and conditions and the Distributor agreement. \Cross sponsoring\ means soliciting a Distributor or any closely related person or entity into a down line different from the existing down line for that Associate, or a closely related person or entity. \Cross jumping\ means an Associated or any closely related person or entity voluntarily taking a business that is not in the same downline as the one in which the Distributor first was placed. \Closely related person or entity\ is any person in the household of the Distributor [e.g. Spouse, Son, Daughter, Parents living in the same household] or any Legal entity which is controlled by the Distributors.</p>

                                <h2><strong>21. INCOME REPRESENTATION</strong></h2>


                                <p>Distributor shall not make any income representations except those set forth herein or otherwise specifically set forth in official company material.</p>

                                <h2><strong>22. DIRECT SELLER (AIBOT INDUSTRIES PVT LTD ASSOCIATES)</strong></h2>
                                <p>1. Direct Seller engaged in direct selling should carry their identity card and not visit the customer‟s premises without prior appointment/approval;</p>
                                <p>2. At the initiation of a sales representation, without request, truthfully and clearly identify themselves, the identity of the direct selling entity, the nature of the goods or services sold and the purpose of the solicitation to the prospective consumer;</p>
                                <p>3. Offer a prospective consumer accurate and complete explanations and demonstrations of goods and services, prices, credit terms, terms of payment, return policies, terms of guarantee, after-sales service;</p>
                                <p>4. Provide the following information to the prospect / consumers at the time of sale, namely:</p>
                                <p>a) Name, address, registration number or enrollment number, identity proof and telephone number of the direct seller and details of direct selling entity;</p>
                                <p>b) A description of the goods or services to be supplied;</p>
                                <p>c) The Order date, the total amount to be paid by the consumer along with the bill and receipt;</p>
                                <p>d) Time and place for inspection of the sample and delivery of good;</p>
                                <p>e) Information of his/her rights to cancel the order and / or to return the product in saleable condition and avail full refund on sums paid;</p>
                                <p>f) Details regarding the complaint redressal mechanism;</p>
                                <p>5. A direct seller shall keep proper book of accounts stating the details of the products, price, tax and the quantity and such other details in respect of the goods sold by him/her, in such form as per applicable law.</p>
                                <p>6. A direct seller shall not:</p>
                                <p>a) Use misleading, deceptive and / or unfair trade practices;</p>
                                <p>b) Use misleading, false, deceptive, and / or unfair recruiting practices, including misrepresentation of actual or potential sales or earnings and advantages of Direct Selling to any prospective direct seller, in their interaction with prospective direct sellers;</p>
                                <p>c) Make any factual representation to a prospective direct seller that cannot be verified or make any promise that cannot be fulfilled;</p>
                                <p>d) Present any advantages of Direct Selling to any prospective direct seller in a false and / or a deceptive manner;</p>
                                <p>e) Knowingly make, omit, engage, or cause, or permit to be made, any representation relating to the Direct Selling operation, including remuneration system and agreement between the Direct Selling entity and the direct seller, or the goods and / or services being sold by such direct seller which is false and / or misleading;</p>
                                <p>f) Require or encourage direct sellers recruited by the first mentioned direct seller to purchase goods and / or services in unreasonably large amounts;</p>

                                <p>g) Provide any literature and / or training material not restricted to collateral issued by the Direct Selling entity, to a prospective and / or existing direct sellers both within and outside the parent Direct Selling entity, which has not been approved by the parent Direct Selling entity;</p>
                                <p>h) Require prospective or existing direct sellers to purchase any literature or training materials or sales demonstration equipment.</p>


                                <h2><strong>INFORMATION COLLECTION AND USE</strong></h2>
                                <p>While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your name, email address, postal address and phone number (“Personal Information”). Like many site operators, we collect information that your browser sends whenever you visit our Site (“Log Data”). This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.</p>

                                <h2><strong>COOKIES</strong></h2>
                                <p>Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer’s hard drive. Like many sites, we use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.</p>



                                <h2><strong>SECURITY</strong></h2>
                                <p>"The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>


                                <h4><strong>LINKS TO OTHER SITES</strong></h4>
                                <p>Our Site may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party site. We strongly advise you to review the Privacy Policy of every site you visit. AIBOT industries pvt ltd. has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party sites or services.</p>


                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default TermAndCondition
