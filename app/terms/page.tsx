import type { Metadata } from "next";
import LegalLayout, { CheckList, H3, NumberList, P, type LegalSection } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service | SM Solutions",
  description:
    "Project, digital marketing, annual maintenance and process terms for SM Solutions engagements.",
};

const SUPPORT_EMAIL = "support@smsolutions.in";

const SupportEmail = () => (
  <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-blue-600 hover:underline">
    {SUPPORT_EMAIL}
  </a>
);

const sections: LegalSection[] = [
  // ─── 1. Project Terms ──────────────────────────────────────────────────────
  {
    id: "project-terms",
    title: "Project Terms",
    content: (
      <CheckList
        items={[
          "All estimates/quotes are based on our understanding of your requirements and as per given time-frame. Any changes to the functionality including micro-improvements, may incur additional costs accordingly. Please ensure and clarify our understanding in a face to face meeting.",
          "By accepting a quote, you agree to and accept the terms and conditions of SM Solutions. Acceptance can be verbal, by email, payment of Initiation, signing a quote.",
          "Clients to ensure that we have included all requirements in the quotes/proposals/estimates and that we fully understand their requirements. Clients must provide us with clear guidelines along with the flow or specific details they may require. When such details are not provided, we will proceed with our understanding of the requirements and quote accordingly. At a later stage, if a discrepancy arises, it may lead to additional costs to accommodate the changes. Thus, it is essential that you clarify every aspect of your website development and ensure that you have been quoted on the right requirements.",
          "Any complexity related to specific tasks, must be advised in advance and included in the proposal for costing purposes. We operate in good faith and rely on our clients to disclose the full picture at the time of quotation. Any discrepancy arising due to unclear requirements will not be borne by SM Solutions.",
          "There are limited man-hours allocated to each task including Project Management and Digital Strategist/Business Analyst. Minor changes may be included within the allocated hours. This will be analysed on a case-by-case basis.",
          "SM Solutions will make every effort to complete the project/changes in the given timeframe. Reasonable delays are accepted if functionalities are redefined or modified.",
          "Any delays at client’s end, may delay the project and proposed timeframes and may incur additional costs.",
          "Any bugs (programming errors) reported during or just after the development does not attract additional charges.",
          "Any re-work on an already completed task will attract additional charges. Any changes in the design after the design approval will incur additional charges.",
          "Any modifications requested during the development or after the Go-Live approval will incur additional charges. All additional work, over and above the estimates is charged separately. Under no circumstances will SM Solutions be liable for any delays caused by change in the project brief.",
          "Website/application content and all related materials need to be provided to us within the first two weeks of starting the project. Any delays thereafter may delay the project and may incur additional charges if it goes beyond reasonable timeframe.",
          "Our websites/applications are generally tested on PCs and include near recent versions of following browsers: IE, Firefox, Chrome & Safari. If you require testing to be done on any other browser, please let us know in advance.",
          "Responsive/multi-device compatible web pages are tested on iPhone and iPads by client themselves. If you require testing to be done on any other device, please discuss it in advance.",
          "If your website/application is not hosted on a SM Solutions server, any additional man-hours that may be required due to any server or network related issues are not covered in our quotes and may be charged separately.",
          "Please note that at any stage during the project, stalling of the project for over two calendar months will incur INR 1500/week administration costs. Furthermore, it may increase the previously approved estimates. If you require the project to be put on hold, please advise us in writing in advance. To put the project on hold without incurring additional charges, we will need the account to be up to date based on the work done. Further details can be discussed if such a situation arises.",
          "SM Solutions software codes (not including open source software) are copyrights of SM Solutions. The codes can be handed over at an additional cost for use once all previous invoices are settled, on the condition that the codes are used only for use or modification for re-use for further development for the specified client or subsequent owners of that legal entity. Under no circumstance, the codes will be allowed to be used for re-selling or duplication purposes.",
          "SM Solutions CMS is a proprietary CMS of SM Solutions. SM Solutions owns copyrights of all codes written for any client, unless arrangements are made prior to start of the project. SM Solutions warrants a license to use any custom built software for the client, for their use only. This license is granted while paying for the hosting. SM Solutions CMS cannot be transferred to any external host; this includes any access to the software codes.",
          "The website or software application will be designed to be deployed on the web, via using a commercial grade web-server or a similar setup. Based on your website traffic, the website may not perform if deployed on a generic office network environment.",
          "Depending upon the functionalities required, there may be 3rd party components such as Third Party Payment Gateways or SSL certificates involved in building a website/application. Although SM Solutions does its best in recognising the suitability of any such component, any unforeseen limitations of 3rd party components are beyond our control. Any third-party component purchase costs (such as SSL, Payment gateway, Google Adwords, Plug-in licenses etc) are not included in our quotes.",
          "SM Solutions takes no responsibility of any open source products such as WordPress, Open Source carts, Joomla etc. It is client’s responsibility to update all components and third party software unless SM Solutions has a maintenance clause with the client in place. We suggest you to take regular back-ups to avoid any disruptions.",
          "SM Solutions offer packages in co-ordination with third party providers. Changes to the third party provider’s rules and policies may ultimately affect the services we provide or the terms and conditions herein.",
          "The client must recognize that at times there may be unforeseen circumstances that will delay the development process, particularly with reference to the integration of third party software. We will try our best to complete the project as agreed in the proposal. As long as it is within a reasonable period, the client agrees not to penalize us for any genuine delay, when every effort to keep the project on the proposed schedule is taken.",
          "Domain registration/renewal etc charges are not included as a part of any project/proposal unless mentioned otherwise. If required, a quote for which will be submitted separately and approved by the client.",
          "Hosting charges are not included in the quotations unless mentioned otherwise. SM Solutions can organise an appropriate hosting solution if required, a quote for which will be submitted separately and approved by the client. Where clients decide to organise their own hosting, we should be consulted before finalising the type of hosting and database, as it should meet the requirements of the technology used for the development. Please note that we’ll require full access with hosting support for testing and deploying the application. SM Solutions will not be liable for any delays or errors caused by direct or indirect actions of the hosting company.",
          "SM Solutions generally builds and tests the websites/applications on our own servers or hosted domains. SM Solutions cannot give access to their test servers and test websites to the clients or any third party. The website/application can be transferred-off to a nominated 3rd party server upon full payment of all invoices and dues.",
          "Notwithstanding any other provision in the agreement, in consideration of the Customer entering into this agreement with SM Solutions, upon full payment of any outstanding invoices, SM Solutions will grant an unconditional license to the Customer to reproduce, publish, communicate, use, exploit, vary, or otherwise deal with 1) the graphics, 2) texts and 3) images used in the published website and associated of form and functionality. This will not include the intellectual property relating to the production of the website including the digital strategies, programming codes, database structures, scripts, forms or functionalities.",
          "All communications/correspondences are generally done via emails. It is client’s responsibility to keep us updated with their relevant email addresses.",
        ]}
      />
    ),
  },

  // ─── 2. Digital Marketing / Strategy Package Terms ─────────────────────────
  {
    id: "digital-marketing-terms",
    title: "Digital Marketing & Strategy Package Terms",
    content: (
      <>
        <CheckList
          items={[
            "All digital marketing/strategy packages are for a minimum of 6 months period. Thereafter, cancel anytime with clear one month email notice.",
            "They are billed monthly and are payable in advance for every month.",
            "Packages are designed with keeping in mind Digital Marketing/Strategy requirements of our clients. There are specific man-hours allocated each month and any unused man-hours are not rolled over to the next month. No third party software or marketing expenses are included.",
            "SM Solutions employs fair use policy, which means that although we don’t formally transfer over any unused time to the next month or formally accumulate unused man-hours, we do understand that your needs may change from month to month, and we allow flexibility in good faith sometimes.",
            "Any extra hours used may be billed separately. Any urgent tasks will be charged separately.",
            <>Support requests need to be sent via email to <SupportEmail />.</>,
          ]}
        />

        <H3>Payment Terms</H3>
        <CheckList
          items={[
            "Payable by the 1st of every month. We strongly recommend our clients to have a direct debit set-up for the same.",
            "An administrative fee of INR 2250 will be charged to the clients account for any late payments or declined credit card charges.",
            "There are absolutely no refunds for any fees related to the digital marketing/strategy package.",
          ]}
        />

        <H3>Termination</H3>
        <CheckList
          items={[
            "All digital marketing/strategy packages are for a minimum of 6 months period. Thereafter, cancel anytime with clear one month email notice.",
            "SM Solutions reserves the right to terminate at anytime with written notice to the Client.",
          ]}
        />
      </>
    ),
  },

  // ─── 3. Annual Maintenance Terms ───────────────────────────────────────────
  {
    id: "annual-maintenance-terms",
    title: "Annual Maintenance Terms",
    content: (
      <>
        <H3>Basic Annual Maintenance Package Terms</H3>
        <CheckList
          items={[
            "All maintenance packages are for a minimum of 12 months period.",
            "Maintenance packages are billed annually, however are paid on mutual agreement but not less than a month in advance.",
            "Packages may include 12 months basic website hosting, email hosting and DNS hosting.",
            "Packages are designed to serve website/mobile app maintenance tasks only. The hours may not be used for projects such as full redesign or major functionality add-ons.",
            "Does not include any Digital Strategy, Business Analysis, Solution Architect, SEO and Digital Marketing work.",
            "Work-hours are tracked in 15 minutes blocks. The support time is used once every month to take a full backup of your website. After that, we work on updating your CMS and plugin versions along-with any website fixes that may arise as a result of the updates. Any remaining hours can be used to make changes to the website. Any additional work hours are requested for your approval.",
            "SM Solutions employs fair use policy, which means that although we don’t formally transfer over any unused time to the next month or formally accumulate unused man-hours, we do understand that your needs may change from month to month, and we allow flexibility in good faith sometimes.",
            "Any extra hours used will be billed separately on mutual agreement /hour incl. GST.",
            <>Support requests need to be sent via email to <SupportEmail />.</>,
            "Any urgent tasks will be charged separately.",
            "The package is auto renewed every year on its anniversary date.",
          ]}
        />

        <H3>Payment Terms</H3>
        <CheckList
          items={[
            "Monthly maintenance package fees require advance payment only. Monthly maintenance package fees will be charged to the clients in advance.",
            "An administrative fee of INR 2250 will be charged to the clients account for any late payments or declined credit card charges.",
            "More than three missed payments in a year may attract termination of the package and the client will need to pay immediately the entire remaining amount on the package.",
            "There are absolutely no refunds for any fees related to the monthly maintenance package.",
          ]}
        />

        <H3>Termination</H3>
        <CheckList
          items={[
            "In case Client need to cancel the auto annual renewal, please inform us in writing (email) at least one month prior to the renewal date.",
            "Ongoing term: For any reason if the Client decides to terminate an on-going maintenance package then they will need to pay the balance amount of the remaining months.",
            "SM Solutions reserves the right to terminate annual maintenance at anytime with written notice to the Client.",
          ]}
        />
      </>
    ),
  },

  // ─── 4. Project Process ────────────────────────────────────────────────────
  {
    id: "project-process",
    title: "Our Project Process",
    content: (
      <>
        <P>For general website design &amp; development projects we employ the following steps:</P>
        <NumberList
          items={[
            "Upon quote acceptance/signoff, initiation payment is processed to start the project. As required by the project, we may hold a Scoping Workshop to discuss the requirements in detail.",
            "Once we have the brand details such as logo, images, branding materials etc, we will have a mock-up for your review within 5 to 10 working days.",
            "You can review the design and suggest improvements accordingly. Depending upon your project, generally up to 3 to 5 design modifications that can be done within the given estimates. Please refer to your allocated design and development hours for details.",
            "Once design is finalised & approved, we’ll proceed with the HTML Template or WP Theme. At this stage we generally need around 3 to 5 banner text and/or images for rotation.",
            "Once, HTML is done, if CMS is included in your project, we will proceed to setup your website on your selected Content Management System (CMS). Please provide all content and copy prior to the development phase.",
            "Depending upon the time and resources allocated to your project, we’ll transfer as much content as possible from the old website to the new website. Remaining content can be transferred via the CMS by your designated staff. We can provide the instructions needed to help you do this.",
            "Once the site is ready from our end, we generally hand it over to you for further review, test and/or to upload/change contents as necessary.",
            "At this stage you need to give us a Go-Live date for us to make the new website/project live.",
            "Your website can be made live within 3 to 5 working days of a Go Live approval, assuming that the accounts are clear. Kindly note that we require full payment prior to transferring the website on any external servers.",
          ]}
        />
        <CheckList
          items={[
            "Kindly note, there are limited man-hours allocated on the project. The estimates for all website under INR 2,00,000 are based on an assumption. Any further delays may increase the project management costs. If you do not believe the project to be completed within this time frame, please do let us know prior to starting the project.",
            "Also, generally speaking, going-back and forth takes a lot of time. We encourage you to provide all necessary details, at the start of the project to ensure that the project team’s time is efficiently utilised on your project and you do not incur any unnecessary additional costs.",
            "You will be kept updated via emails and/or telephone calls as the project demands. However, please do not hesitate to contact us any time you require a project status. Also, please always keep us updated with your relevant email addresses/contact details.",
            "Once the website/application has been made live on the client’s domain, it is their responsibility to take regular full back-ups and to update all components and third party software unless we have a maintenance clause in place.",
          ]}
        />
        <P>
          We consider ourselves to be very flexible and adaptable and approach all requests with a ‘can do’
          attitude. If you require something changed, please feel free to discuss with us. Please contact us if
          you require further details or have any questions. We look forward to working together with you on your
          project!
        </P>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      active="terms"
      titleStart="Terms of"
      titleHighlight="Service"
      description="Understanding the terms that govern our professional engagements, services and use of our website."
      sections={sections}
      lastUpdated="January 15, 2026"
    />
  );
}
