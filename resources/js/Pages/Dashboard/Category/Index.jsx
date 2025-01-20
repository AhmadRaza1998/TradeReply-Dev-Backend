import { Link } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import CustomPagination from "@/Components/UI/CustomPagination";
import { router } from "@inertiajs/react";
import useToShowStatus from "@/Hooks/useToShowStatus";
import Card from "@/Components/UI/Card";
import routes from "@/constants/routes";

export default function Index({ categories }) {
  useToShowStatus();

  const deletePost = (id) => {
    router.delete(route(routes.CATEGORY.DELETE, id));
  };

  return (
    <DashboardLayout>
      <h1>Categories </h1>
      <Link href={route(routes.CATEGORY.CREATE)}>Create New category</Link>
      <Card
        data={categories.data}
        href={routes.CATEGORY.EDIT}
        deletePost={deletePost}
        showImage={false}
      />
      <CustomPagination links={categories?.links} />
    </DashboardLayout>
  );
}
