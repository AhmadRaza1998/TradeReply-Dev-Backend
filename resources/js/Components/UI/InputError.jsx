export default function InputError({ message, className = "", ...props }) {
  return message ? (
    <p {...props} className={"error-message " + className}>
      {message}
    </p>
  ) : null;
}
