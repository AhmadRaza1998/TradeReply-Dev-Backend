/* eslint-disable react/no-unescaped-entities */
import { Container } from "react-bootstrap";
import NavLink from "@/Components/UI/NavLink";
import HomeLayout from "@/Layouts/HomeLayout";
import "../../../css/Home/PrivacyPolicy.scss";

const TermsService = () => {
  return (
    <HomeLayout>
      <section className="commonPolicy">
        <Container>
          <h1>Terms of Service</h1>
          <h4>1. Acceptance of Terms</h4>
          <p>
            Welcome to TradeReply. By accessing and using our website,
            www.tradereply.com, and and services provided by TradeReply, you
            (“user”) agree to comply with and be bound by the following Terms of
            Service. If you do not agree with these terms, you must not use our
            services. TradeReply is the property of TradeReply LLC. (“we”, “us”,
            or “our”).
          </p>
          <div className="inner_content">
            <h4>2. Description of Services</h4>
            <p>
              TradeReply provides an analytics suite for crypto and stock
              traders to input historical trading data and use visual KPIs,
              graphs, and metrics for optimizing trading strategies with
              real-time insights. Our services include access to various tools,
              charts, and educational content to enhance your trading
              experience.
            </p>
          </div>
          <div className="inner_content">
            <h4>3. Registration and Account Security</h4>
            <p>
              To access certain features of TradeReply, you must register and
              create an account. You agree to:
            </p>
            <ul>
              <li>
                Provide accurate and complete information during the
                registration process.
              </li>
              <li>Maintain the security of your password and account.</li>
              <li>
                Notify us immediately of any unauthorized use of your account.
              </li>
            </ul>
          </div>
          <div className="inner_content">
            <h4>4. Subscription Plans, Payments, and Cancellations</h4>
            <h4>4.1 Subscription Options</h4>
            <p>
              TradeReply offers various subscription plans to cater to different
              user needs, including a Free plan and several paid plans:
            </p>
            <ul>
              <li>
                Free Plan: Provides basic access to our analytics tools and
                features.
              </li>
              <li>
                Essential Plan: Offers additional features and enhanced
                analytics tools.
              </li>
              <li>
                Plus Plan: Includes all features of the Essential Plan, with
                added benefits and advanced tools.
              </li>
              <li>
                Premium Plan: Grants full access to all TradeReply features,
                tools, and premium support.
              </li>
            </ul>
          </div>
          <div className="inner_content">
            <h4>4.2 Free Trial</h4>
            <ul>
              <li>
                30-Day Free Trial: Users can sign up for a free 30-day trial of
                any paid plan. If you do not cancel before the trial period
                ends, you will be automatically enrolled in the paid plan, and
                your payment method will be charged according to the plan’s
                billing cycle.
              </li>
            </ul>
          </div>
          <div className="inner_content">
            <h4>4.3 Payment and Billing</h4>
            <ul>
              <li>
                Automatic Billing: When you enter into a paid subscription, you
                will be automatically charged according to the billing cycle of
                your chosen plan (monthly or annually). Billing is recurring and
                will continue until you cancel your subscription.
              </li>
              <li>
                Payment Methods: TradeReply accepts various payment methods. By
                providing a payment method, you authorize us to charge the
                applicable subscription fees to that payment method.
              </li>
              <li>
                Billing Cycle: The billing cycle will correspond to the
                subscription plan you select. Monthly plans will be billed every
                month, and annual plans will be billed once per year.
              </li>
            </ul>
          </div>
          <div className="inner_content">
            <h4>4.4 Cancellation and Changes to Subscription</h4>
            <ul>
              <li>
                Cancellation: You can cancel your subscription at any time
                through your account settings. If you cancel while on a paid
                plan, your access to paid features will remain active until the
                end of the current billing cycle. After that, your subscription
                will either downgrade to the Free plan or cease, depending on
                your action.
              </li>
              <li>
                Failed Renewals: If the auto-renewal of an annual plan fails,
                your subscription will be automatically switched to a monthly
                plan. If the payment method fails during renewal, your
                subscription will be canceled.
              </li>
              <li>
                Subscription Upgrades: When you decide to upgrade your
                subscription plan, the changes will take effect immediately. You
                will gain access to the new features and benefits associated
                with the higher-tier plan right away. The billing for the
                upgraded plan will be prorated, meaning you will be charged a
                proportional amount for the remaining period of the current
                billing cycle. Subsequent billing cycles will reflect the full
                amount of the new plan.
              </li>
              <li>
                Subscription Downgrades: When you choose to downgrade your
                subscription plan, the changes will take effect at the end of
                the current billing cycle. You will continue to have access to
                the features and benefits of your current (higher-tier) plan
                until the end of the paid period. Starting from the next billing
                cycle, your subscription will switch to the lower-tier plan, and
                the billing will reflect the new plan's rate.
              </li>
            </ul>
          </div>
          <div className="inner_content">
            <h4>4.5 Taxes and Payment Processing</h4>
            <ul>
              <li>
                Tax Compliance: Our company is registered for tax purposes in
                the United States. Depending on your location, we may use local
                subsidiaries or other entities to collect payments. Applicable
                taxes will be added to the subscription fees where required by
                law.
              </li>
              <li>
                Payment Processing: All payments are processed and managed by
                TradeReply or our authorized payment processors. By subscribing,
                you agree to our processing of your payment information and the
                applicable charges.
              </li>
            </ul>
          </div>
          <div className="inner_content">
            <h4>4.6 Refund Policy</h4>
            <ul>
              <li>
                Annual Plans: Users have a 14-day period from the start of an
                annual plan to request a refund. If you cancel within this
                period, you will receive a full refund.
              </li>
              <li>
                Monthly Plans: We do not typically offer refunds on monthly
                plans unless specific circumstances are met. To request a refund
                for a monthly plan, you must contact our support team. Refunds
                are granted at our discretion and on a case-by-case basis.
              </li>
              <li>
                Free Trial: If you cancel your subscription during the 30-day
                free trial, you will not be charged. If you do not cancel before
                the trial period ends, you will be automatically enrolled in the
                paid plan and charged accordingly.
              </li>
              <li>
                Ineligibility for Refunds: Users who have filed a
                chargeback/dispute request or a claim are not eligible for a
                refund. Additionally, there are no refunds for upgrades to a
                more expensive plan or monthly plans, even if the subscription
                is canceled on the same day as the payment has gone through.
              </li>
            </ul>
          </div>
          <div className="inner_content">
            <h4>4.7 User Responsibility</h4>
            <ul>
              <li>
                Account Information: It is your responsibility to ensure that
                your account information, including payment details, is accurate
                and up-to-date to avoid interruptions in your subscription
                service.
              </li>
            </ul>
          </div>
          <div className="inner_content">
            <h4>5. User Conduct</h4>
            <p>You agree not to use TradeReply to:</p>
            <ul>
              <li>Violate any applicable laws or regulations.</li>
              <li>Infringe upon the rights of others.</li>
              <li>Upload or distribute viruses or any other harmful code.</li>
              <li>
                Engage in any activity that disrupts or interferes with our
                services.
              </li>
            </ul>
          </div>
          <div className="inner_content">
            <h4>6. Ownership of Information and Redistribution of Data</h4>
            <ul>
              <li>
                Ownership of Content: All content on TradeReply, including but
                not limited to text, graphics, charts, analytics tools, and
                software, is the property of TradeReply or its licensors. This
                content is protected by copyright, trademark, and other
                intellectual property laws. Users do not acquire any ownership
                rights by using our services or accessing our content.
              </li>
              <li>
                Prohibited Redistribution: Except as otherwise expressly
                permitted by TradeReply, you are strictly prohibited from
                sublicensing, assigning, transferring, selling, loaning, or
                distributing any content or data obtained from TradeReply. This
                includes, but is not limited to:
                <ol>
                  <li>
                    Sharing data with third parties without our explicit
                    permission.
                  </li>
                  <li>
                    Using our data for commercial purposes or in any way that
                    competes with TradeReply.
                  </li>
                  <li>
                    Redistributing or making available our content through any
                    other medium, including websites, applications, or printed
                    materials.
                  </li>
                </ol>
              </li>
              <li>
                Agreements with Data Providers: Our agreements with data
                providers strictly forbid any form of sublicensing, assigning,
                transferring, selling, loaning, or distribution of their data by
                our users. This is to ensure the integrity and proprietary
                nature of the data provided through TradeReply.
              </li>
              <li>
                Permitted Use: Users are granted a limited, non-exclusive,
                non-transferable license to access and use the content and tools
                provided by TradeReply for personal and non-commercial purposes,
                in accordance with these Terms of Service. Any other use
                requires prior written permission from TradeReply.
              </li>
              <li>
                Violation of Terms: Any violation of these terms regarding the
                ownership and redistribution of content will result in immediate
                termination of your access to TradeReply and may lead to legal
                action to protect our rights and those of our data providers.
              </li>
            </ul>
          </div>
          <div className="inner_content">
            <h4>7. Intellectual Property</h4>
            <p>
              All content, trademarks, and data on TradeReply are the property
              of TradeReply LLC. or its licensors and are protected by
              intellectual property laws. You may not use, copy, reproduce, or
              distribute any content from our site without our explicit
              permission.
            </p>
          </div>
          <div className="inner_content">
            <h4>8. Data and Privacy</h4>
            <p>
              We take your privacy seriously. Please review our{" "}
              <NavLink href="/privacy">Privacy Policy</NavLink> to understand
              how we collect, use, and protect your personal information. By
              using TradeReply, you consent to the collection and use of your
              data as described in our Privacy Policy.
            </p>
          </div>
          <div className="inner_content">
            <h4>
              9. Disclaimer of Investment Advice and Limitation of Liability
            </h4>
            <p>
              TradeReply is an analytics platform designed to provide tools,
              visual KPIs, graphs, and metrics to help traders analyze
              historical trading data and optimize trading strategies. It is
              important to understand the following:
            </p>
            <ul>
              <li>
                <strong>No Investment Advice:</strong> TradeReply does not
                provide personalized investment advice. The information and
                tools provided by our platform are for informational and
                educational purposes only. Users should conduct their own
                research and consult with a qualified financial advisor before
                making any investment decisions.
              </li>
              <li>
                <strong>No Guarantee of Results:</strong> While our platform
                aims to assist traders in optimizing their strategies,
                TradeReply makes no guarantees regarding the accuracy,
                completeness, or effectiveness of the tools and information
                provided. Past performance is not indicative of future results.
              </li>
              <li>
                <strong>User Responsibility:</strong> Users are solely
                responsible for their trading decisions and the use of our
                platform's tools and information. TradeReply will not be held
                liable for any losses or damages resulting from the use of our
                services.
              </li>
              <li>
                <strong>Market Risks:</strong> Trading in financial markets
                involves significant risk. Users should be aware of the risks
                associated with trading, including the potential loss of
                capital. TradeReply does not take any responsibility for users'
                trading activities and their outcomes.
              </li>
            </ul>
            <p>
              By using TradeReply, you acknowledge and agree to the above
              disclaimers and understand the nature and limitations of our
              analytics platform. Please read our{" "}
              <NavLink href="/disclaimer">Disclaimer</NavLink>.
            </p>
          </div>
          <div className="inner_content">
            <h4>10. Attribution of Content</h4>
            <ul>
              <li>
                Permission to Mention: Users are granted permission to mention
                TradeReply and provide snapshots of our features in various
                channels, including but not limited to blogs, news articles,
                social media, presentations, and educational materials, provided
                they comply with the following attribution requirements.
              </li>
              <li>
                Attribution Requirements: When mentioning TradeReply or using
                snapshots of our features, users must include a clear and
                visible attribution, stating, "Analysis is provided by
                TradeReply." This attribution must meet the following criteria:
                <ol>
                  <li>
                    The text must be in a font size of no less than 10 pt.
                  </li>
                  <li>
                    The attribution must be placed in a location that is clearly
                    visible to the audience of the content.
                  </li>
                  <li>
                    The attribution must be in a color and style that is easily
                    readable and distinguishable from the surrounding text.
                  </li>
                </ol>
              </li>
              <li>
                Usage Contexts: The permission to mention TradeReply and use
                snapshots of our features applies to the following contexts:
                <ol>
                  <li>
                    Blogs and Articles: When writing about trading strategies,
                    market analysis, or financial tools.
                  </li>
                  <li>
                    News Media: When reporting on financial markets, trading
                    technologies, or related topics.
                  </li>
                  <li>
                    Social Media: When sharing insights, tips, or reviews about
                    trading platforms.
                  </li>
                  <li>
                    Educational Materials: When creating content for courses,
                    webinars, or training sessions related to trading and
                    financial analysis.
                  </li>
                  <li>
                    Presentations: When presenting at conferences, seminars, or
                    meetings where TradeReply’s tools and features are
                    discussed.
                  </li>
                </ol>
              </li>
              <li>
                Prohibited Uses: Users are prohibited from using TradeReply’s
                name or content in any way that:
                <ol>
                  <li>Misrepresents the nature of our services.</li>
                  <li>
                    Implies endorsement or partnership without our explicit
                    permission.
                  </li>
                  <li>Competes with TradeReply or harms our reputation.</li>
                </ol>
              </li>
              <li>
                Review and Approval: TradeReply reserves the right to review and
                approve any use of our content in advance. Users may be required
                to submit their content for review to ensure compliance with
                these attribution requirements.
              </li>
            </ul>
            <p>
              By using TradeReply, you agree to adhere to these terms regarding
              the attribution of our content. Failure to comply with these
              requirements may result in the termination of your access to our
              services and legal action to protect our rights.
            </p>
          </div>
          <div className="inner_content">
            <h4>11. Third Parties and Advertisers</h4>
            <ul>
              <li>
                Third-Party Advertisers: TradeReply may display advertisements
                from third parties on our site. These advertisements are
                provided by external companies, and TradeReply does not endorse
                or guarantee the products or services advertised.
              </li>
              <li>
                User Interactions with Advertisers: Any interactions,
                transactions, or disputes that arise between you and an
                advertiser on our site are solely between you and the
                advertiser. TradeReply is not responsible for any loss or damage
                resulting from such interactions. You agree that TradeReply will
                not be held liable for any claims, demands, or damages arising
                out of or in any way connected with your interactions with
                advertisers.
              </li>
              <li>
                Links to Third-Party Sites: TradeReply may provide links to
                other websites through third-party advertisements or as part of
                our content. These linked sites are not under the control of
                TradeReply, and we are not responsible for the content, privacy
                practices, or actions of these sites.
              </li>
              <li>
                Unlawful or Negligent Content: Content on third-party websites,
                including those linked to through advertisements on TradeReply,
                may contain unlawful, offensive, or negligent material.
                TradeReply does not assume any responsibility or liability for
                the content, accuracy, legality, or practices of any third-party
                websites. Users access and use these sites at their own risk.
              </li>
              <li>
                Indemnification: By using TradeReply, you agree to indemnify and
                hold TradeReply harmless from any claims, damages, losses, or
                expenses (including attorneys' fees) arising out of or in
                connection with your use of third-party websites or your
                interactions with advertisers.
              </li>
            </ul>
          </div>
          <div className="inner_content">
            <h4>12. User Contributions and Feedback</h4>
            <ul>
              <li>
                User Contributions: Any content, including but not limited to
                comments, suggestions, ideas, data, or other information, that
                you submit to TradeReply through our site or services becomes
                the property of TradeReply. By submitting contributions, you
                grant TradeReply a perpetual, irrevocable, worldwide,
                royalty-free license to use, modify, reproduce, distribute, and
                display your contributions in any manner we see fit.
              </li>
              <li>
                Feedback: We value and welcome feedback from our users. While we
                take all feedback into consideration, we may not always be able
                to take action on every suggestion or comment received. By
                providing feedback, you acknowledge that TradeReply is under no
                obligation to implement any ideas or suggestions you submit.
              </li>
            </ul>
          </div>
          <div className="inner_content">
            <h4>13. Education Center and Blog Disclaimer</h4>
            <ul>
              <li>
                Content Accuracy: The information provided in our Education
                Center and Blog articles is for informational and educational
                purposes only. While we strive to ensure the accuracy of the
                content, TradeReply, including the authors and contributors,
                does not guarantee the completeness, reliability, or accuracy of
                the information presented.
              </li>
              <li>
                No Liability: TradeReply, its authors, and contributors are not
                responsible or liable for any errors, omissions, or inaccuracies
                in the content. The information is provided "as is" and should
                not be relied upon for making trading or investment decisions.
                Users are encouraged to conduct their own research and consult
                with a qualified financial advisor before making any financial
                decisions.
              </li>
              <li>
                Opinions and Views: The views and opinions expressed in the
                Education Center and Blog articles are those of the individual
                authors and do not necessarily reflect the official policy or
                position of TradeReply. These opinions should not be taken as
                financial advice.
              </li>
              <li>
                Use of Information: By using the information from our Education
                Center and Blog, you acknowledge and agree that TradeReply, its
                authors, and contributors shall not be held liable for any
                losses or damages arising from the use of or reliance on this
                information.
              </li>
            </ul>
          </div>
          <div className="inner_content">
            <h4>14. Indemnification</h4>
            <p>
              You agree to defend, indemnify, and hold harmless TradeReply,
              along with our subsidiaries, affiliates, officers, agents,
              employees, partners, and licensors, from any claims, demands, or
              legal actions, including reasonable attorneys' fees, made by any
              third party due to or arising out of any content you submit, post,
              transmit, modify, or otherwise make available through TradeReply
              services; your use of the TradeReply services; your connection to
              the TradeReply services; your breach of these Terms of Service;
              your violation of any rights of another; or any action taken by
              TradeReply, reasonably and in good faith, as part of its
              investigation of a suspected violation of these Terms of Service
              or as a result of its determination that a violation of these
              Terms of Service has occurred. This indemnification obligation
              will continue after you stop using our services.
            </p>
            <p>
              In the event of a dispute between you and one or more other users,
              you agree to release TradeReply from any and all claims, demands,
              and damages (actual and consequential) of every kind and nature,
              known and unknown, arising from or in any way related to such
              disputes.
            </p>
          </div>
          <div className="inner_content">
            <h4>15. Communication and Notifications</h4>
            <ul>
              <li>
                Marketing Emails: By creating an account with TradeReply, you
                agree to receive marketing emails from us. These emails may
                include information about new features, promotions, and updates
                about our services. We aim to provide content that is relevant
                and valuable to our users.
              </li>
              <li>
                Service-Related Notices: You will also receive important
                service-related notices. These may include updates to our Terms
                of Service, Privacy Policy, and other critical information
                regarding your account and the services you use.
              </li>
              <li>
                Unsubscribing: If you wish to stop receiving marketing emails,
                you can unsubscribe at any time by clicking the unsubscribe link
                provided in the footer of each marketing email. Please note that
                even if you unsubscribe from marketing emails, you will still
                receive service-related notices as these are necessary for the
                proper management of your account and services.
              </li>
            </ul>
          </div>
          <div className="inner_content">
            <h4>16. Modifications to the Terms</h4>
            <p>
              We reserve the right to modify these Terms of Service at any time.
              Any changes will be effective immediately upon posting. Your
              continued use of TradeReply after any modifications indicates your
              acceptance of the new terms.
            </p>
          </div>
          <div className="inner_content">
            <h4>17. Termination</h4>
            <p>
              We reserve the right to terminate or suspend your access to
              TradeReply at any time, without prior notice or liability, for any
              reason, including but not limited to your breach of these Terms of
              Service. Reasons for termination may include, but are not limited
              to:
            </p>
            <ul>
              <li>
                Violation of Terms: Breaching these Terms of Service, or any
                other policies or guidelines set forth by TradeReply.
              </li>
              <li>
                Unlawful Use: Engaging in illegal activities or using TradeReply
                in a manner that violates any applicable laws or regulations.
              </li>
              <li>
                Harmful Conduct: Posting or transmitting content that is
                harmful, threatening, abusive, harassing, defamatory, vulgar,
                obscene, or otherwise objectionable.
              </li>
              <li>
                Security Threats: Compromising the security of our platform,
                including but not limited to hacking, phishing, or distributing
                malware.
              </li>
              <li>
                Non-Payment: Failing to pay any fees or charges related to your
                use of the paid subscription services.
              </li>
            </ul>
            <p>User-Initiated Termination</p>
            <p>
              You have the option to discontinue using our services and
              terminate your account at any time through your account settings.
              To request the deletion of your account, follow these steps:
            </p>
            <ul>
              <li>
                Account Settings: Navigate to your account settings and select
                the option to delete your account.
              </li>
              <li>
                Deletion Process: Your account will be scheduled for deletion 30
                days after the request. During this period, you can cancel the
                deletion process if you change your mind.
              </li>
              <li>
                Data Retention: Upon requesting account deletion, we will remove
                the personal data you have provided to us. However, certain
                data, such as your contributions to our marketplace or platform
                and messages sent to other users, will be retained as they are
                integral to our system. This retention is necessary to preserve
                the platform's integrity.
              </li>
              <li>
                Legal Compliance: For legitimate business purposes and to comply
                with legal obligations, including tax laws, audits, and security
                requirements, we are required to retain specific data for an
                extended period. This includes, but is not limited to,
                transaction logs, financial records, addresses, and employment
                details. The retention duration for each type of data will
                adhere to relevant legal requirements, which can be up to 10
                years.
              </li>
            </ul>
            <p>Effects of Termination</p>
            <p>
              Upon termination or suspension, your right to use TradeReply will
              immediately cease. If we terminate your account due to a breach of
              these Terms of Service, you will not be entitled to any refunds or
              compensation. TradeReply is not liable for any loss or damage
              resulting from the termination or suspension of your access to our
              services. Please review our{" "}
              <NavLink href="/privacy">Privacy Policy</NavLink> for more on
              termination.
            </p>
          </div>
          <div className="inner_content">
            <h4>18. Governing Law</h4>
            <p>
              These Terms of Service are governed by and construed in accordance
              with the laws of the jurisdiction in which TradeReply operates,
              without regard to its conflict of law principles.
            </p>
          </div>
          <div className="inner_content">
            <h4>19. Limitation of Liability</h4>
            <p>
              By using TradeReply, you acknowledge and agree that TradeReply
              LLC, including its directors, officers, employees, agents,
              contractors, licensors, suppliers, partners, and affiliates, shall
              not be held responsible or liable for any direct, indirect,
              incidental, special, consequential, or punitive damages arising
              out of or related to your use of our services. This includes, but
              is not limited to, any errors, omissions, interruptions, defects,
              delays, loss of data, or unauthorized access to user
              communications.
            </p>
            <p>
              All content and services provided by TradeReply are on an
              &quot;as-is&quot; and &quot;as-available&quot; basis without
              warranties of any kind, either express or implied. TradeReply does
              not guarantee the accuracy, completeness, or reliability of any
              information or content provided through its platform.
            </p>
            <p>
              Your use of TradeReply is at your own risk. You agree to indemnify
              and hold harmless TradeReply, its directors, officers, employees,
              agents, contractors, licensors, suppliers, partners, and
              affiliates from any claims, damages, losses, or expenses,
              including legal fees, arising out of or in connection with your
              use of the services, violation of these Terms of Service, or
              infringement of any rights of another party.
            </p>
            <p>
              By accessing and using TradeReply, you expressly agree to the
              terms of this Limitation of Liability section and acknowledge that
              this agreement is fair and reasonable in the context of the
              services provided.
            </p>
          </div>
        </Container>
      </section>
    </HomeLayout>
  );
};

export default TermsService;
