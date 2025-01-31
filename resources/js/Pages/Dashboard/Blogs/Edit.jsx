import DashboardLayout from "@/Layouts/DashboardLayout";
import TextInput from "@/Components/UI/TextInput";
import CommonButton from "@/Components/UI/CommonButton";
import { useState } from "react";
import useForms from "@/Hooks/useForms";
import { blogValidationSchema } from "@/validations/schema";
import { handleError } from "@/utils/helper";
import InputError from "@/Components/UI/InputError";
import { get } from "lodash";
import { placeHolderImg } from "@/constants";
import { router } from "@inertiajs/react";

export default function Edit({ blog }) {  

  const [inputTag, setInputTag] = useState("");
  const [preview, setPreview] = useState(null);

  const { data, setData, errors, isValidForm, handleChange } = useForms({
    fields: {
      title: get(blog, "title", ""),
      content: get(blog, "content", ""),
      tags: get(blog, "tags", []),
      feature_image: "",
    },
    validationSchema: blogValidationSchema,
  });

  const handleKeyDown = (e) => {
    e.key === "Enter" && e.preventDefault();
    if (e.key === "Enter" && inputTag.trim() !== "") {
      setData("tags", [...data.tags, inputTag.trim()]);
      setInputTag("");
    }
  };

  const removeTag = (indexToRemove) => {
    const filter = data.tags.filter((_, index) => index !== indexToRemove);
    setData("tags", filter);
  };

  const handleFileChange = (e) => {
    const selectedImg = e.target.files[0];
    setData("feature_image", selectedImg);
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.onerror = (error) => {
      console.error("Error reading the file:", error);
    };
    reader.readAsDataURL(selectedImg);
  };

  const submit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const isValid = await isValidForm();
      if (!isValid) return;

      router.post(`/dashboard/blog-manager/${blog.id}`, {
        _method: "put",
        ...data,
      });
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <DashboardLayout>
      <h1>Edit Post</h1>

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

        <input
          type="text"
          value={inputTag}
          onChange={(e) => setInputTag(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a tag and press Enter"
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "10px",
          }}
        >
          {data?.tags?.map((tag, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f0f0f0",
                borderRadius: "4px",
                padding: "5px 10px",
              }}
            >
              <span>{tag}</span>
              <button
                type="button"
                onClick={() => removeTag(index)}
                style={{
                  background: "none",
                  border: "none",
                  marginLeft: "8px",
                  cursor: "pointer",
                  color: "#ff0000",
                }}
              >
                x
              </button>
            </div>
          ))}
        </div>

        <div>
          <div className="mb-4 d-flex ">
            <img
              id="selectedImage"
              src={preview || get(blog, "feature_image") || placeHolderImg}
              alt=""
              style={{
                width: "300px",
              }}
            />
          </div>
          <div className="d-flex ">
            <div data-mdb-ripple-init className="btn p-0 border btn-rounded">
              <label
                className="form-label text-white m-1 p-2"
                htmlFor="customFile1"
              >
                Choose file
              </label>
              <input
                type="file"
                accept="image/*"
                className="form-control d-none"
                id="customFile1"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end">
          <CommonButton type="submit" title="Edit" className="mt-2" />
        </div>
      </form>
    </DashboardLayout>
  );
}
