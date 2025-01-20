import { handleError } from "@/utils/helper";
import { useForm } from "@inertiajs/react";
import { isEmpty } from "lodash";
import * as Yup from "yup";

export default function useForms({ fields = {}, validationSchema }) {
  const props = useForm(fields);

  const handleChange = (field, value) => {
    props.setData(field, value); // Update form state
    !isEmpty(validationSchema) && handleFieldValidation(field, value); // Validate the field
  };

  const handleFieldValidation = async (field, value) => {
    const errorsClone = structuredClone(props.errors);
    try {
      await validationSchema?.validateAt(field, {
        ...props.data,
        [field]: value,
      });
      props.setError({ ...errorsClone, [field]: undefined }); // Clear error for this field
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        props.setError({ ...errorsClone, [field]: error.message }); // Set error for this field
      }
    }
  };

  const isValidForm = async () => {
    try {
      if (isEmpty(validationSchema)) return true;
      await validationSchema.validate(props.data, { abortEarly: false });
      return true;
    } catch (error) {
      handleError(error, props.setError);
      return false;
    }
  };

  return {
    ...props,
    handleChange,
    isValidForm,
  };
}
