import { Container } from "react-bootstrap";
import CommonButton from "@/Components/UI/CommonButton";
import NavLink from "@/Components/UI/NavLink";
import "../../../css/Home/ReferReward.scss";
import HomeLayout from "@/Layouts/HomeLayout";

const ReferReward = () => {
  return (
    <HomeLayout>
      <div className="py-100 refer_reward">
        <Container>
          <div className="refer_reward_inner">
            <div className="refer_reward_heading text-center">
              <div className="d-flex align-items-center justify-content-center">
                <img
                  className="refer_reward_logo"
                  src="/images/tradereply-trading-tools.svg"
                  alt="Invite friends to TradeReply and earn rewards for referrals"
                />

                <h1>Refer & Reward</h1>
              </div>
              <h5 className="my-4 py-2">
                Love TradeReply? Share it and Earn! <br /> Invite your friends
                to join TradeReply and both of you get rewarded! For every
                friend who signs up and subscribes, you&apos;ll each receive $15
                towards any subscription.
              </h5>
              <div className="text-center my-5">
                <CommonButton
                  title="invite Friends & Earn $15"
                  className="white-btn"
                />
              </div>
              <h5 className="">
                Complete details in{" "}
                <NavLink href="/terms">Terms of Service</NavLink>
              </h5>
            </div>
          </div>
        </Container>
      </div>
    </HomeLayout>
  );
};

export default ReferReward;
