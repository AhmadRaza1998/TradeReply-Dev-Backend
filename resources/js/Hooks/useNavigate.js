// import { Inertia } from "@inertiajs/inertia";
import { router } from '@inertiajs/react'

export default function useNavigate() {
  
  const push = (path) => {
    // Inertia.visit(path, {
    //   method: "get", // Ensures it's a GET request
    //   preserveState: false, // Forces Inertia to update the page content
    //   replace: false, // Ensures the navigation history works as expected
    // });    
    router.get(path)
    
  };

  return push;
}
