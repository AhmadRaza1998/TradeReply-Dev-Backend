import { Link } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import CustomPagination from "@/Components/UI/CustomPagination";
import { router } from "@inertiajs/react";
import useToShowStatus from "@/Hooks/useToShowStatus";
import Card from "@/Components/UI/Card";
import routes from "@/constants/routes";

export default function Index({ blogs }) {
  useToShowStatus();

  const deletePost = (id) => {
    router.delete(route(routes.BLOG.DELETE, id));
  };

  return (
    <DashboardLayout>
      <h1>Posts</h1>
      <Link href={route(routes.BLOG.CREATE)}>Create New Post</Link>
      <Card data={blogs.data} href={routes.BLOG.EDIT} deletePost={deletePost} />
      <CustomPagination links={blogs.links} />
    </DashboardLayout>
  );
}
