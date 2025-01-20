import { Link, usePage } from "@inertiajs/react";

export default function NavLink({ className = "", children, ...props }) {
  const { url } = usePage(); // Get the current page URL

  // Check if the link is the active one

  const isActive = url === props.href;

  return (
    <Link
      {...props}
      className={`${className} ${isActive ? "active" : ""}`} // Add 'active' class if the link is the current page
    >
      {children}
    </Link>
  );
}
