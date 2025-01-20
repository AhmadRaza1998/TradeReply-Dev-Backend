const NoRecord = ({ msg }) => {
  return (
    <section className="no_record_found">
      <h4> {msg || 'No Record Found'}</h4>
    </section>
  );
};

export default NoRecord;
