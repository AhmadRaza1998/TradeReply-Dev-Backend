import "../../../../css/dashboard/AdminHeading.scss";

const AdminHeading = ({ heading, centered, className }) => {
  return (
    <div
      className={`common_heading ${className} ${centered ? "text-center" : ""}`}
    >
      <h2>{heading}</h2>
    </div>
  );
};

export default AdminHeading;
