import "../../../../css/Home/StatusChart.scss";

const StatusChart = () => {
  return (
    <>
      <div className="status_chart">
        <div className="status_chart_lastday d-sm-flex justify-content-between align-items-center">
          <h4>Last 90 Days</h4>
          <div className="status_chart_lastday_task mt-3 mt-sm-0">
            <h5>
              <span className="redbg"></span> Failure
            </h5>
            <h5>
              <span className="yellowbg"></span> Issue
            </h5>
            <h5>
              <span className="greenbg"></span> Operating
            </h5>
          </div>
        </div>

        <div className="status_chart_box">
          {/* <img src={chatimg} alt="TradeReply status of systems" /> */}
          <div className="status_chart_box_graph">
            <div className="status_chart_box_graph-month">
              <div className="status_chart_box_graph-month-title">
                <h6>Apr</h6>
                <h6>May</h6>
                <h6>Jun</h6>
              </div>
              <div className="status_chart_box_graph-month-days">
                <div className="status_chart_box_graph_day status_chart_box_graph_day_big">
                  <div className="status_chart_box_graph_day_regular" />
                  <div className="status_chart_box_graph_day_incident" />
                </div>
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day status_chart_box_graph_day_big">
                  <div className="status_chart_box_graph_day_regular" />
                  <div className="status_chart_box_graph_day_incident" />
                </div>
                <div className="status_chart_box_graph_day status_chart_box_graph_day_big">
                  <div className="status_chart_box_graph_day_regular" />
                  <div className="status_chart_box_graph_day_incident" />
                </div>
                <div className="status_chart_box_graph_day status_chart_box_graph_day_big">
                  <div className="status_chart_box_graph_day_regular" />
                  <div className="status_chart_box_graph_day_incident" />
                </div>
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day status_chart_box_graph_day_big">
                  <div className="status_chart_box_graph_day_regular" />
                  <div className="status_chart_box_graph_day_incident" />
                </div>
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day status_chart_box_graph_day_big">
                  <div className="status_chart_box_graph_day_regular" />
                  <div className="status_chart_box_graph_day_incident" />
                </div>

                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day status_chart_box_graph_day_big">
                  <div className="status_chart_box_graph_day_regular" />
                  <div className="status_chart_box_graph_day_incident" />
                </div>
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day status_chart_box_graph_day_big">
                  <div className="status_chart_box_graph_day_regular" />
                  <div className="status_chart_box_graph_day_incident" />
                </div>
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day status_chart_box_graph_day_big">
                  <div className="status_chart_box_graph_day_regular" />
                  <div className="status_chart_box_graph_day_incident" />
                </div>
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day status_chart_box_graph_day_big">
                  <div className="status_chart_box_graph_day_regular" />
                  <div className="status_chart_box_graph_day_incident" />
                </div>
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day status_chart_box_graph_day_big">
                  <div className="status_chart_box_graph_day_regular" />
                  <div className="status_chart_box_graph_day_incident" />
                </div>
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day" />
                <div className="status_chart_box_graph_day status_chart_box_graph_day_big">
                  <div className="status_chart_box_graph_day_regular" />
                  <div className="status_chart_box_graph_day_incident" />
                </div>
                <div className="status_chart_box_graph_day status_chart_box_graph_day_big">
                  <div className="status_chart_box_graph_day_regular" />
                  <div className="status_chart_box_graph_day_incident" />
                </div>
                <div className="status_chart_box_graph_day status_chart_box_graph_day_big">
                  <div className="status_chart_box_graph_day_regular" />
                  <div className="status_chart_box_graph_day_incident" />
                </div>
                <div className="status_chart_box_graph_day status_chart_box_graph_day_big">
                  <div className="status_chart_box_graph_day_regular" />
                  <div className="status_chart_box_graph_day_incident" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusChart;
