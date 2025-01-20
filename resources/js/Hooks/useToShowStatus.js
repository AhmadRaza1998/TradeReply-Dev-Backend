import { useEffect } from "react";
import { handleError, handleSucess } from "@/utils/helper";
import { usePage } from "@inertiajs/react";

export default function useToShowStatus() {
  const { flash } = usePage().props;

  useEffect(() => {
    if (flash?.success) {
      handleSucess(flash.success);
    }

    if (flash?.error) {
      handleError(flash.error);
    }

    // Clear flash messages after they are displayed
    return () => {
      if (flash) {
        flash.success = null;
        flash.error = null;
      }
    };
  }, [flash]);

  return null;
}
