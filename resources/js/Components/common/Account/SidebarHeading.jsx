//import "../../../assets/theme/_var.scss";

const SidebarHeading = ({ title, text }) => {
  return (
    <div className="sidebar_heading">
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
};

export default SidebarHeading;
