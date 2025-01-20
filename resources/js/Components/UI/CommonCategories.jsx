import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

const CommonCategories = ({ categories, onCategoryChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [primaryCategory, setPrimaryCategory] = useState(null);

  const handleCategoryChange = (id) => {
    const updatedCategories = selectedCategories.includes(id)
      ? selectedCategories.filter((categoryId) => categoryId !== id) // Remove if already selected
      : [...selectedCategories, id]; // Add to selection

    setSelectedCategories(updatedCategories);

    // Reset primary category if unchecked
    if (primaryCategory === id) {
      setPrimaryCategory(null);
    }

    // Pass updated data to parent
    onCategoryChange(updatedCategories, primaryCategory);
  };

  const handleMakePrimary = (id) => {
    setPrimaryCategory(id);

    // Pass updated data to parent
    onCategoryChange(selectedCategories, id);
  };

  return (
    <div>
      <h4 className="mb-3">Categories</h4>
      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-categories"
          className="btn border select-btn w-50"
        >
          {primaryCategory
            ? `Primary: ${
                categories.find((cat) => cat.id === primaryCategory)?.title
              }`
            : "Select Categories"}
        </Dropdown.Toggle>

        <Dropdown.Menu className="p-3 w-50">
          <ListGroup>
            {categories.map((category) => (
              <ListGroup.Item
                key={category.id}
                className="d-flex align-items-center justify-content-between"
              >
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`category-${category.id}`}
                    checked={selectedCategories.includes(category.id)}
                    onChange={() => handleCategoryChange(category.id)}
                  />
                  <label
                    className="form-check-label ms-2"
                    htmlFor={`category-${category.id}`}
                  >
                    {category.title}
                  </label>
                </div>

                {selectedCategories.includes(category.id) && (
                  <div>
                    {primaryCategory === category.id ? (
                      <Button variant="success" size="sm" disabled>
                        Primary
                      </Button>
                    ) : (
                      <Button
                        variant="link"
                        size="sm"
                        className="text-decoration-none"
                        onClick={() => handleMakePrimary(category.id)}
                      >
                        Make Primary
                      </Button>
                    )}
                  </div>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default CommonCategories;
