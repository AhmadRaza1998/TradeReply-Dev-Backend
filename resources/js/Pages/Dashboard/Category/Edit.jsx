import DashboardLayout from "@/Layouts/DashboardLayout";
import TextInput from "@/Components/UI/TextInput";
import CommonButton from "@/Components/UI/CommonButton";
import useForms from "@/Hooks/useForms";
import { titleDescValidationSchema } from "@/validations/schema";
import { handleError } from "@/utils/helper";
import InputError from "@/Components/UI/InputError";
import { get } from "lodash";
import { router } from "@inertiajs/react";
import routes from "@/constants/routes";

export default function Edit({ category }) {
  const { data, errors, isValidForm, handleChange } = useForms({
    fields: {
      title: get(category, "title", ""),
      content: get(category, "content", ""),
    },
    validationSchema: titleDescValidationSchema,
  });

  const submit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const isValid = await isValidForm();
      if (!isValid) return;

      router.post(route(routes.CATEGORY.UPDATE, category.id), {
        _method: "put",
        ...data,
      });
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <DashboardLayout>
      <h1>Edit Category </h1>
      <form onSubmit={submit}>
        <div>
          <label>Title</label>
          <TextInput
            type="text"
            value={data.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
          <InputError message={errors.title} />
        </div>
        <div>
          <div>
            <label>Content</label>
          </div>
          <textarea
            value={data.content}
            onChange={(e) => handleChange("content", e.target.value)}
            className="text_area_bg"
          />
          <InputError message={errors.content} />
        </div>

        <div className="d-flex justify-content-end">
          <CommonButton type="submit" title="Edit" className="mt-2" />
        </div>
      </form>
    </DashboardLayout>
  );
}
