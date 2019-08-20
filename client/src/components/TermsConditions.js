import React from "react";
import { Header, List, Modal, Container } from "semantic-ui-react";

const TermsConditionsModal = ({ termsConditions }) => {
  return (
    <Modal open={termsConditions}>
      <Modal.Header>Terms and Conditions</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Container textAlign='justified'>
            <Header>Welcome to JoProNet!</Header>
            <p style={{ color: "#333", fontSize: "1.3rem" }}>
              These terms and conditions outline the rules and regulations for
              the use of JoProNet's Website, located at Website.com.
            </p>
            <p style={{ color: "#333", fontSize: "1.3rem" }}>
              By accessing this website we assume you accept these terms and
              conditions. Do not continue to use Website Name if you do not
              agree to take all of the terms and conditions stated on this page.
            </p>
            <p style={{ color: "#333", fontSize: "1.3rem" }}>
              The following terminology applies to these Terms and Conditions,
              Privacy Statement and Disclaimer Notice and all Agreements:
              “Client”, “You” and “Your” refers to you, the person log on this
              website and compliant to the Company's terms and conditions. “The
              Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our
              Company. “Party”, “Parties”, or “Us”, refers to both the Client
              and ourselves. All terms refer to the offer, acceptance and
              consideration of payment necessary to undertake the process of our
              assistance to the Client in the most appropriate manner for the
              express purpose of meeting the Client's needs in respect of
              provision of the Company's stated services, in accordance with and
              subject to, prevailing law of Netherlands. Any use of the above
              terminology or other words in the singular, plural, capitalization
              and/or he/she or they, are taken as interchangeable and therefore
              as referring to same.
            </p>
            <Header>License</Header>
            <p style={{ color: "#333", fontSize: "1.3rem" }}>
              Unless otherwise stated, JoProNet and/or its licensors own the
              intellectual property rights for all material on Website Name. All
              intellectual property rights are reserved. You may access this
              from Website Name for your own personal use subjected to
              restrictions set in these terms and conditions.
            </p>
            <p style={{ color: "#333", fontSize: "1.3rem" }}>You must not:</p>
            <List as='ul' size='large'>
              <List.Item as='li'>Republish material from JoProNet</List.Item>
              <List.Item as='li'>
                Sell, rent or sub-license material from JoProNet
              </List.Item>
              <List.Item as='li'>
                Reproduce, duplicate or copy material from JoProNet
              </List.Item>
              <List.Item as='li'>Redistribute content from JoProNet</List.Item>
            </List>
            <p style={{ color: "#333", fontSize: "1.3rem" }}>
              This Agreement shall begin on the date hereof.
            </p>
            <p style={{ color: "#333", fontSize: "1.3rem" }}>
              Parts of this website offer an opportunity for users to post and
              exchange opinions and information in certain areas of the website.
              JoProNet does not filter, edit, publish or review Comments prior
              to their presence on the website. Comments do not reflect the
              views and opinions of JoProNet,its agents and/or affiliates.
              Comments reflect the views and opinions of the person who post
              their views and opinions. To the extent permitted by applicable
              laws, JoProNet shall not be liable for the Comments or for any
              liability, damages or expenses caused and/or suffered as a result
              of any use of and/or posting of and/or appearance of the Comments
              on this website.
            </p>
            <p style={{ color: "#333", fontSize: "1.3rem" }}>
              JoProNet reserves the right to monitor all Comments and to remove
              any Comments which can be considered inappropriate, offensive or
              causes breach of these Terms and Conditions.
            </p>{" "}
            <p style={{ color: "#333", fontSize: "1.3rem" }}>
              You warrant and represent that:
            </p>
            <List as='ul' size='large'>
              <List.Item as='li'>
                You are entitled to post the Comments on our website and have
                all necessary licenses and consents to do so;
              </List.Item>
              <List.Item as='li'>
                The Comments do not invade any intellectual property right,
                including without limitation copyright, patent or trademark of
                any third party;
              </List.Item>
              <List.Item as='li'>
                The Comments do not contain any defamatory, libelous, offensive,
                indecent or otherwise unlawful material which is an invasion of
                privacy
              </List.Item>
              <List.Item as='li'>
                The Comments will not be used to solicit or promote business or
                custom or present commercial activities or unlawful activity.
              </List.Item>
            </List>
            <p style={{ color: "#333", fontSize: "1.3rem" }}>
              You hereby grant JoProNet a non-exclusive license to use,
              reproduce, edit and authorize others to use, reproduce and edit
              any of your Comments in any and all forms, formats or media.
            </p>
            <Header>Hyperlinking to our Content</Header>
            <p style={{ color: "#333", fontSize: "1.3rem" }}>
              The following organizations may link to our Website without prior
              written approval:
            </p>
            <List as='ul' size='large'>
              <List.Item as='li'>Government agencies;</List.Item>
              <List.Item as='li'>Search engines;</List.Item>
              <List.Item as='li'>News organizations;</List.Item>
              <List.Item as='li'>
                Online directory distributors may link to our Website in the
                same manner as they hyperlink to the Websites of other listed
                businesses; and
              </List.Item>
              <List.Item as='li'>
                System wide Accredited Businesses except soliciting non-profit
                organizations, charity shopping malls, and charity fundraising
                groups which may not hyperlink to our Web site.
              </List.Item>
            </List>
            <p style={{ color: "#333", fontSize: "1.3rem" }}>
              These organizations may link to our home page, to publications or
              to other Website information so long as the link: (a) is not in
              any way deceptive; (b) does not falsely imply sponsorship,
              endorsement or approval of the linking party and its products
              and/or services; and (c) fits within the context of the linking
              party's site.
            </p>
            <p style={{ color: "#333", fontSize: "1.3rem" }}>
              We may consider and approve other link requests from the following
              types of organizations:
            </p>
            <List as='ul' size='large'>
              <List.Item as='li'>
                commonly-known consumer and/or business information sources;
              </List.Item>
              <List.Item as='li'>dot.com community sites;</List.Item>
              <List.Item as='li'>
                associations or other groups representing charities;
              </List.Item>
              <List.Item as='li'>online directory distributors;</List.Item>
              <List.Item as='li'>internet portals;</List.Item>
              <List.Item as='li'>
                accounting, law and consulting firms; and
              </List.Item>
              <List.Item as='li'>
                educational institutions and trade associations.
              </List.Item>
            </List>
            <p style={{ color: "#333", fontSize: "1.3rem" }}>
              We will approve link requests from these organizations if we
              decide that: (a) the link would not make us look unfavorably to
              ourselves or to our accredited businesses; (b) the organization
              does not have any negative records with us; (c) the benefit to us
              from the visibility of the hyperlink compensates the absence of
              Company Name; and (d) the link is in the context of general
              resource information.
            </p>
            <p style={{ color: "#333", fontSize: "1.3rem" }}>
              These organizations may link to our home page so long as the link:
              (a) is not in any way deceptive; (b) does not falsely imply
              sponsorship, endorsement or approval of the linking party and its
              products or services; and (c) fits within the context of the
              linking party's site.
            </p>
            <p style={{ color: "#333", fontSize: "1.3rem" }}>
              If you are one of the organizations listed in paragraph 2 above
              and are interested in linking to our website, you must inform us
              by sending an e-mail to Company Name. Please include your name,
              your organization name, contact information as well as the URL of
              your site, a list of any URLs from which you intend to link to our
              Website, and a list of the URLs on our site to which you would
              like to link. Wait 2-3 weeks for a response.
            </p>
            <p style={{ color: "#333", fontSize: "1.3rem" }}>
              Approved organizations may hyperlink to our Website as follows:
            </p>
            <List as='ul' size='large'>
              <List.Item as='li'>By use of our corporate name; or</List.Item>
              <List.Item as='li'>
                By use of the uniform resource locator being linked to; or
              </List.Item>
              <List.Item as='li'>
                By use of any other description of our Website being linked to
                that makes sense within the context and format of content on the
                linking party's site.
              </List.Item>
            </List>
            <p style={{ color: "#333", fontSize: "1.3rem" }}>
              No use of Company Name's logo or other artwork will be allowed for
              linking absent a trademark license agreement.
            </p>
            <Header>iFrames</Header>
            <p style={{ color: "#333", fontSize: "1.3rem" }}>
              Without prior approval and written permission, you may not create
              frames around our Webpages that alter in any way the visual
              presentation or appearance of our Website.
            </p>
            <Header>Content Liability</Header>
            <p style={{ color: "#333", fontSize: "1.3rem" }}>
              We shall not be hold responsible for any content that appears on
              your Website. You agree to protect and defend us against all
              claims that is rising on your Website. No link(s) should appear on
              any Website that may be interpreted as libelous, obscene or
              criminal, or which infringes, otherwise violates, or advocates the
              infringement or other violation of, any third party rights.
            </p>
            <Header>Reservation of Rights</Header>
            <p style={{ color: "#333", fontSize: "1.3rem" }}>
              We reserve the right to request that you remove all links or any
              particular link to our Website. You approve to immediately remove
              all links to our Website upon request. We also reserve the right
              to amen these terms and conditions and it's linking policy at any
              time. By continuously linking to our Website, you agree to be
              bound to and follow these linking terms and conditions.
            </p>
            <Header>Removal of links from our website</Header>
            <p style={{ color: "#333", fontSize: "1.3rem" }}>
              If you find any link on our Website that is offensive for any
              reason, you are free to contact and inform us any moment. We will
              consider requests to remove links but we are not obligated to or
              so or to respond to you directly.
            </p>
            <p style={{ color: "#333", fontSize: "1.3rem" }}>
              We do not ensure that the information on this website is correct,
              we do not warrant its completeness or accuracy; nor do we promise
              to ensure that the website remains available or that the material
              on the website is kept up to date.
            </p>
            <Header>Disclaimer</Header>
            <p style={{ color: "#333", fontSize: "1.3rem" }}>
              To the maximum extent permitted by applicable law, we exclude all
              representations, warranties and conditions relating to our website
              and the use of this website. Nothing in this disclaimer will:
            </p>
            <List as='ul' size='large'>
              <List.Item as='li'>
                limit or exclude our or your liability for death or personal
                injury;
              </List.Item>
              <List.Item as='li'>
                limit or exclude our or your liability for fraud or fraudulent
                misrepresentation;
              </List.Item>
              <List.Item as='li'>
                limit any of our or your liabilities in any way that is not
                permitted under applicable law; or
              </List.Item>
              <List.Item as='li'>
                exclude any of our or your liabilities that may not be excluded
                under applicable law.
              </List.Item>
            </List>
            <p style={{ color: "#333", fontSize: "1.3rem" }}>
              The limitations and prohibitions of liability set in this Section
              and elsewhere in this disclaimer: (a) are subject to the preceding
              paragraph; and (b) govern all liabilities arising under the
              disclaimer, including liabilities arising in contract, in tort and
              for breach of statutory duty.
            </p>
            <p style={{ color: "#333", fontSize: "1.3rem" }}>
              As long as the website and the information and services on the
              website are provided free of charge, we will not be liable for any
              loss or damage of any nature.
            </p>
          </Container>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default TermsConditionsModal;
