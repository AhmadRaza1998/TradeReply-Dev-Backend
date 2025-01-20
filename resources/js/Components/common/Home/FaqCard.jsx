import { Accordion } from "react-bootstrap";
import CommonHeading from "@/Components/UI/CommonHeading";
import "../../../../css/Home/FaqCard.scss";

const FaqCard = () => {
  return (
    <>
      <div className="faq_card">
        <CommonHeading heading="Frequently Asked Questions" />
        <div className="faq_card_accordion">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Is this fee version really forever
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque luctus condimentum sem non imperdiet. Vestibulum
                est mi, sodales eu eros eu, ultrices varius ipsum. Nulla at
                congue ipsum. Duis fringilla, nulla nec dignissim rhoncus, diam
                lorem efficitur mi, id dapibus risus quam vel ante. Integer
                porta vulputate venenatis.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Can i cancel anytime?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque luctus condimentum sem non imperdiet. Vestibulum
                est mi, sodales eu eros eu, ultrices varius ipsum. Nulla at
                congue ipsum. Duis fringilla, nulla nec dignissim rhoncus, diam
                lorem efficitur mi, id dapibus risus quam vel ante. Integer
                porta vulputate venenatis.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                How can I pay for my subscription?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque luctus condimentum sem non imperdiet. Vestibulum
                est mi, sodales eu eros eu, ultrices varius ipsum. Nulla at
                congue ipsum. Duis fringilla, nulla nec dignissim rhoncus, diam
                lorem efficitur mi, id dapibus risus quam vel ante. Integer
                porta vulputate venenatis.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>What is your refund policy?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque luctus condimentum sem non imperdiet. Vestibulum
                est mi, sodales eu eros eu, ultrices varius ipsum. Nulla at
                congue ipsum. Duis fringilla, nulla nec dignissim rhoncus, diam
                lorem efficitur mi, id dapibus risus quam vel ante. Integer
                porta vulputate venenatis.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                How can I downgrade or upgrade my subscription?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque luctus condimentum sem non imperdiet. Vestibulum
                est mi, sodales eu eros eu, ultrices varius ipsum. Nulla at
                congue ipsum. Duis fringilla, nulla nec dignissim rhoncus, diam
                lorem efficitur mi, id dapibus risus quam vel ante. Integer
                porta vulputate venenatis.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default FaqCard;
