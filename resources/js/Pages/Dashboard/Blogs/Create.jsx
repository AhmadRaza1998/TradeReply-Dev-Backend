import DashboardLayout from "@/Layouts/DashboardLayout";
import TextInput from "@/Components/UI/TextInput";
import CommonButton from "@/Components/UI/CommonButton";
import { useState } from "react";
import useForms from "@/Hooks/useForms";
import { blogValidationSchema } from "@/validations/schema";
import { handleError } from "@/utils/helper";
import InputError from "@/Components/UI/InputError";
import { placeHolderImg } from "@/constants";
import Form from "react-bootstrap/Form";
import CommonCategories from "@/Components/UI/CommonCategories";
import routes from "@/constants/routes";

export default function Create({ categories }) {
  const [inputTag, setInputTag] = useState("");
  const [preview, setPreview] = useState(null);

  const { data, setData, post, errors, isValidForm, handleChange } = useForms({
    fields: {
      title: "",
      content: "",
      tags: [],
      feature_image: "",
      is_featured: false,
      primary_category_id: "",
      categories: [],
    },
    validationSchema: blogValidationSchema,
  });

  const handleKeyDown = (e) => {
    e.key === "Enter" && e.preventDefault();
    if (e.key === "Enter" && inputTag.trim() !== "") {
      if (!data.tags.includes(inputTag.trim())) {
        setData("tags", [...data.tags, inputTag.trim()]);
        setInputTag("");
      } else {
        handleError("Tag already exists.");
      }
    }
  };

  const removeTag = (indexToRemove) => {
    const filter = data.tags.filter((_, index) => index !== indexToRemove);
    setData("tags", filter);
  };

  const handleFileChange = (e) => {
    const selectedImg = e.target.files[0];
    const reader = new FileReader();
    setData("feature_image", selectedImg);
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(selectedImg);
  };

  const submit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const isValid = await isValidForm();
      if (!isValid) return;
      post(routes.BLOG.LIST);
    } catch (error) {
      handleError(error);
    }
  };

  const handleCategoryChange = (selectedCategories, primaryCategory) => {
    setData("primary_category_id", primaryCategory);
    setData("categories", selectedCategories);
  };

  return (
    <DashboardLayout>
      <h1>Create New Post</h1>

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

        <div className="mt-3">
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
        </div>

        <div className="featureToggle">
          <Form.Check
            type={"checkbox"}
            id={`default-checkbox`}
            label={`Is Feature Enabled?`}
            checked={data.is_featured}
            onChange={(event) =>
              handleChange("is_featured", event.target.checked)
            }
          />
        </div>

        <div>
          <CommonCategories
            categories={categories}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        <div>
          <div className="mb-4 d-flex ">
            <img
              id="selectedImage"
              src={preview ?? placeHolderImg}
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
          <CommonButton type="submit" title="Create" className="mt-2" />
        </div>
      </form>
    </DashboardLayout>
  );
}
