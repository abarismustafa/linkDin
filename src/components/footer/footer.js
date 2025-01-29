import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav, Modal, Button } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 767 || window.innerWidth > 991);

  const handleModalShow = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 767 || window.innerWidth > 991);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const termsAndConditions = `Your User Account and Content
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
Your Use of Our Service:
1. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

2. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

3. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Reporting Copyright and Other IP Violations
a. Ownership: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

b. Content Ownership: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

c. Rights in User Content Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur Lorem Ipsum is simply dummy text of the printing and typesetting industry.`

  const privacyPolicy = `
  Privacy & Policy
This privacy policy forms part of our Website's Terms of Service, by accepting the Terms of Service and the Privacy Policy on the registration page, you consent to provide sensitive personal data or personal information and are aware of the purpose of sharing such information. The following policy applies to your use of PlayNIF50 Partnership Firm (hereinafter referred as “PlayNIF50” or “we” or “us” “our”) website and/or Services, and covers information collected in connection with your access to and use of our website and/or Services. Please read this Privacy Policy carefully.
By registering with us and continuing to interact with us, you are consenting to the practices described in this Privacy Policy. The registration procedure to access our services cannot be completed until information in the non-optional fields is provided. Certain additional personal information may also be requested by PlayNIF50 for permitting you access to any Cash Games organized by us
1. Policy objective
We respect your privacy and assure you that any information provided by you to PlayNIF50 is protected and will be dealt with according to this Policy and the applicable laws. To avail the services offered on www.playNIF50.com  and application(s) (hereinafter referred as the "Platform") you may have to provide certain information to us. This Policy provides the procedure followed by PlayNIF50 to gather, uses, store, discloses and manages users' personal data. PlayNIF50 only collects personal data for the purpose of verifying user accounts, maintaining the accounts of the users, completing transactions of the users, for analyzing user behaviour and other related requirements.
2. What information do we collect:
We collect or receive information you provide when you use, register on our Platform, access your account, communicate with us, answer our surveys, upload content, or otherwise use our Services. We collect the following information about you:
1. Sensitive Personal Data:
•	Account password
•	Financial information such as Bank account or credit card or debit card or other payment instrument details
2. Other Personal Information:
•	Name
•	Date of birth
•	Telephone number
•	Postal/Contact address
•	PAN number (as applicable)
•	The IP address of your computer, browser type and language.
•	The date and the time during which you accessed the site.
•	The address of the website which you may have used to link to any Website
•	Your photograph for testimonials and other promotions.
•	Such other information that is defined as sensitive personal data or information in law.
3. How we use your information:
We may use information about you for number of purposes, including:
a. For providing our services:
All users of PlayNIF50 consent to the use of Sensitive Personal Data and Other Personal Information for verifying user accounts, maintaining the accounts of the users, completing transactions of the users, for analysing user behaviour and other related requirements.
b. Providing, Improving, and Developing our Services:
We may also use software applications for Platform traffic analysis, to gather related statistics, for advertising and for determining the efficacy and popularity of PlayNIF50 among others.
c. Marketing:
Photographs provided as a part of testimonials and promotions by you specifically for marketing purposes give us irrevocable rights to use it for that purpose. We retain the discretion to delete or not use it any further, subject to the User Control of Personal Data and Information clause of this Privacy Policy.
Presently, PlayNIF50 also displays advertising and remarketing through Google Analytics, wherein third party vendors including google, display our ads on sites across the internet and use first party cookies and third party cookies together to inform, optimize and serve ads based on visits of visitors to our website. Our visitors are free to opt out of Google Analytics for display advertising and customize google display network ads using ads preference manager.
d. Sharing Data:
We may be required to share information received from you, with our employees, contracts, agents and regulatory authority (ies). We restrict access of personal information to these abovementioned parties and only allow access to your data on a need-to-know basis in order to process it for providing our Services or otherwise if requested in case of regulatory authority(ies).
We may also share personally identifiable information with advertisers and sponsors of PlayNIF50. We may also use your name, photo, Login ID and the state from where you are participating when announcing the results of any contests run on the Platform. Such contests are further governed by terms and conditions which shall be available on the Platform as and when such a contest is run on any Platform. PlayNIF50 conducts periodic analysis and survey of the traffic to the Platform for market research and advertising purposes. In pursuance of the same, we reserve the right to share your registration information with PlayNIF50 appointed market research and advertising companies or firms from time to time for the said purposes. PlayNIF50 may also use cumulative non-personal information for auditing and analysis purposes with the aim of improving its services.
e. Cookies:
What is a Cookie: A cookie is a small text file that uniquely identifies your browser when you visit a website. Cookies allow us to retain your preferences and account settings, among other things.
You understand and accept that when you visit our Platform, cookies may be left in your computer. These cookies assigned by the servers of PlayNIF50 may be used to personalize your experience on the Platform. Additionally, cookies may also be used for authentication, game management, data analysis and security purposes.
Cookies may also be assigned by the advertisers of PlayNIF50 when you click on any of the advertisements which may be displayed on any Website in which case such cookies are controlled by these advertisers and not PlayNIF50.
f. Email communication:
When you register your email address with PlayNIF50, you agree to receive email communication from PlayNIF50, entities specifically authorized by PlayNIF50 and other users. You also agree and acknowledge that when you use our referral program for referring someone, PlayNIF50 will send emails to such person referred by you on your behalf and the email headers will carry your email address as the address from which such emails are sent.
PlayNIF50 may also access and store such information relating to your contacts to send invitations and other promotions to them periodically.
4. Data Security:
We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure or destruction of data. These include internal reviews of our data collection, storage and processing practices and security measures. We also undertake measures including appropriate encryption and physical security measures to guard against unauthorized access to systems where we store personal data. PlayNIF50 has a comprehensive information security program and information security policies which contain managerial, technical, operational and physical security control measures adopted by PlayNIF50 for the protection of Sensitive Personal Date and Other Personal Information.
Information gathered by PlayNIF50 is stored securely using several information security applications including firewalls. However, security is always relative and PlayNIF50 cannot guarantee that its security measures are absolute and cannot be breached. Data which is transmitted over the Internet is inherently exposed to security risks or threats. For instance, information transmitted via chat or email can be compromised and used by others. Therefore, PlayNIF50 cannot guarantee any security for such information in the course of transmission through the internet infrastructure or any unsolicited disclosures made by any user availing the services of the Platform.
When you register with PlayNIF50, your account is protected by means of login information which includes a username and a password that is known only to you. Therefore, you should not provide your user credentials and related personal information to anyone whosoever and breach hereof constitutes violation of this Policy and can also result in closure of account in certain cases. If you become aware of or reasonably suspect any breach of security, including compromise of your login information, it is your responsibility to immediately notify the same to PlayNIF50.
The Platform may contain links to the other websites/portals. Such websites/portals are governed by their own privacy policies and PlayNIF50 does not exercise any control over them. It is your responsibility to read and understand the privacy policy of such websites/portals when you follow a link outside the Website. You are advised to exercise caution in sharing any personal information with any third party that advertises on the Platforms and PlayNIF50 shall not be responsible for such information provided by you on third party websites/portals.
5. User control on personal data or information:
You have control over your data in the following ways:
a. Updating your information
You shall be entitled to update the information provided by you by contacting us at support@PlayNIF50.com. Your information shall be updated subject to reasonable checks and confirmation by PlayNIF50.
b. Withdrawal of Consent
Users are entitled to withdraw consent for use of their Sensitive Personal Data or Other Personal Information by emailing a specific request to support@PlayNIF50.com, as the case may be. Withdrawal of consent of all or any part of Sensitive Personal Data and Other Personal Information may result in immediate withdrawal of any right to avail the services provided by PlayNIF50.
Withdrawal of consent shall not restrict the right of PlayNIF50 to use personal information for compliance with applicable law.
c. Deletion of Data
Users may raise a request for deletion of any or all personal data or information stored with PlayNIF50 by following the Other details tab in My account section after login to your account and in the manner and format as prescribed under applicable law. Once your request for deletion has been received and confirmed, PlayNIF50 will delete your personal data or information from our records.
However, PlayNIF50 reserves the right to discontinue the services for which the information was originally collected.
Please note that we may have to also retain such personal data or information if any exception applies as stated in the Exclusions clause of this Privacy Policy or if applicable laws require us to maintain archives or retention of data including such personal data or information.
6. Data Retention Policy:
PlayNIF50 shall retain the information provided by the users for such period of time as is required to fulfil the purposes for which such information is collected, as outlined in this Privacy Policy, subject to such longer time periods of retention as may be required under any applicable laws.
7. Exclusions:
Subject to applicable law, PlayNIF50 may share Sensitive Personal Data and Other Personal Information if sharing of such information is necessary:
•	to comply with legal processes or governmental request;
•	to enforce the Terms of Service and this Privacy Policy;
•	for prevention of fraud;
•	for issues involving information security, or
•	to protect:

a.	your rights;
b.	rights of PlayNIF50; and
c.	rights of the general public.

8. Limitation of Liability:
PlayNIF50 confirms that this Privacy Policy is only a description of its operation regarding user information. This Policy is not intended to and does not create any legal rights in your favour or in the favour of any other person. PlayNIF50 reserves the right to change this Policy at any time without giving you prior notice. The liability of PlayNIF50 shall be limited to removal of Sensitive Personal Data from the system of the Platforms and removal of personally identifiable elements of the Other Personal Information. Notwithstanding anything to the contrary contained in this Policy and elsewhere, the aggregate liability of PlayNIF50 for all claims for damages pursuant to provisions of services on the Platforms, including claims in respect to the violation of this Policy, shall be limited to the aggregate maximum amount of liability as provided in the Terms of Service.
  `;

  const refundPolicy = `
  	We will refund any amount left in your Unutilised Account if your Account gets suspended or removed;
(a) due to Our failure to provide Services

(b) any instruction received from any government or regulatory authority.
	We will refund the Pre-Designated Amount paid by You in case any Contest is abandoned in accordance with these Terms.
  	We shall deactivate Your Account pursuant to any direction issued by an appropriate government agency and/or competent authority. If We receive requisite instructions from such authority, We shall refund the deposited amount from Your Unutilised Account to the source account, subject to applicable processing fees.
    	In the event Our Services are not available due to reasons outside Our control, including but not limited to any failure to perform due to unforeseen circumstances or cause beyond Our control, such as acts of god, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemic, epidemic, network infrastructure failures, strikes, or shortages of transportation facilities, fuel, energy, labor or materials or any cancellation of services available on Our Platform (each a “Force Majeure Event”), then We reserve the right to cancel any Contest and process refund of the Pre - Designated Amount.
      	If there is any request for withdrawal of amount deposited in Unutilised Account, such refund request shall be processed net of GST i.e. applicable 28% GST paid on the amount deposited in Unutilised Account. GST amount shall not be refunded as per applicable government laws.

        Any refund processed will be reflected in bank account within 9-10 days
`;

  return (
    <footer className={`bg-dark text-light py-1 footerlasssign ${isDesktop ? 'fixed-bottom' : ''}`}>
      <Container>
        <Row className="align-items-center footerrowsignclass m-0">
          <Col xs={12} md={6} className="text-center text-md-start mb-3 mb-md-0">
            <small>&copy; 2025 AIBOT - All Rights Reserved.</small>
          </Col>
          <Col xs={12} md={6} className="text-center text-md-end">
            <Nav className="justify-content-center justify-content-md-end">
              <Nav.Item>
                {/* <Button variant="link" className="text-light p-0 border-0" onClick={() => handleModalShow('Terms & Conditions', termsAndConditions)}>
                  Terms & Conditions
                </Button> */}
              </Nav.Item>
              <Nav.Item className="mx-2">|</Nav.Item>
              <Nav.Item>
                <Button variant="link" className="text-light p-0 border-0" onClick={() => handleModalShow('Privacy Policy', privacyPolicy)}>
                  Privacy Policy
                </Button>
              </Nav.Item>
              <Nav.Item className="mx-2">|</Nav.Item>
              <Nav.Item>
                <Button variant="link" className="text-light p-0 border-0" onClick={() => handleModalShow('Refund Policy', refundPolicy)}>
                  Refund Policy
                </Button>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleModalClose} size="lg" centered>
        <Modal.Header closeButton className="bg-primary text-white modalheaderpolicy">
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light">
          <div className="policy-content p-3 rounded" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
            {modalContent.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer className='modalfooterpolicy'>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </footer>
  );
};

export default Footer;