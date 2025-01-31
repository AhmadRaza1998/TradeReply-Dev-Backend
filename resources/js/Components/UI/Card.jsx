import { Link } from "@inertiajs/react";
import { map, noop, get, isEmpty } from "lodash";
import { placeHolderImg } from "@/constants";
import Tag from "./Tag";
import NoRecord from "./NoRecord";

export default function Card({
  data = [],
  href,
  deletePost = noop,
  showImage = true,
}) {
  if (isEmpty(data)) return <NoRecord />;

  return (
    <>
      {map(data, (item) => (
        <div className="card mt-2" key={get(item, "id")}>
          {showImage && (
            <img
              className="card-img-top"
              src={item?.feature_image || placeHolderImg}
              alt={get(item, "title", "Featured content preview") + " - Featured content preview"}
              width={100}
              height={300}
            />
          )}
          <div className="card-body">
            <Link href={route(href, get(item, "id"))}>
              <h5 className="card-title text-dark">{get(item, "title")}</h5>
            </Link>
            <p className="card-text text-dark text-pre-line">
              {get(item, "content")}
            </p>

            {/* Tags section */}
            {!isEmpty(get(item, "tags")) && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "10px",
                }}
              >
                <h5 className="text-dark">Tags :</h5>
                {map(get(item, "tags"), (tag) => (
                  <Tag data={tag} key={tag} />
                ))}
              </div>
            )}

            <div>
              <button
                type="button"
                className="btn btn-danger mt-3"
                onClick={() => deletePost(get(item, "id"))}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
