import { Container } from "react-bootstrap";
import { Link } from "@inertiajs/react";
import {
  SolidInfoIcon,
  RightSolidArrowIcon,
} from "@/Components/img/svgIcons/SvgIcon";
import CommonSearch from "@/Components/UI/CommonSearch";
import FaqCard from "@/Components/common/Home/FaqCard";
import CommonTooltip from "@/Components/UI/CommonTooltip";
import BrokersTable from "@/Components/UI/BrokersTable";
import "../../../css/Home/Brokers.scss";
import HomeLayout from "@/Layouts/HomeLayout";

const Brokers = () => {
  return (
    <HomeLayout>
      <div className="brokers py-100">
        <Container>
          <section className="brokers_inner">
            <div className="brokers_content">
              <h1>TradeReply Supported Brokers & Integrations</h1>
              <p>
                Connect your TradeReply.com account to your brokers and trading
                platforms to automatically sync your trades, ensuring all your
                trading data is seamlessly integrated for comprehensive analysis
                and performance tracking. To connect an account,{" "}
                <Link href="/login">Login</Link> or{" "}
                <Link href="/register"> Create an Account</Link>.
              </p>
              <div className="brokers_content_search">
                <CommonSearch
                  placeholder="Search for Broker or Integration"
                  icon={true}
                />
              </div>

              <h6>Missing an integration? Submit a request here</h6>

              <div className="mt-2">
                <Link
                  href="#"
                  className="d-inline-flex align-items-center submit_request"
                >
                  Submit a Request{" "}
                  <span className="ms-3">
                    <RightSolidArrowIcon />
                  </span>
                </Link>
              </div>
            </div>

            <div className="brokers_tablesec">
              <div className="brokers_tablesec_inner">
                <div className="d-flex align-items-center justify-content-end mb-3">
                  <CommonTooltip
                    className="d-flex align-items-center"
                    content="Manual entry lets you input trading data using a form builder or upload via Template or Broker CSV files. AutoSync connects directly to your broker via API, automatically updating your data in real-time with limited manual effort."
                    position="top-left"
                  >
                    <SolidInfoIcon />
                    <h6 className="mb-0 ms-3">
                      Sync Options: Manual vs. AutoSync
                    </h6>
                  </CommonTooltip>
                </div>
              </div>
              <BrokersTable />
            </div>

            <div className="brokers_faqs">
              <FaqCard />
            </div>
          </section>
        </Container>
      </div>
    </HomeLayout>
  );
};

export default Brokers;
