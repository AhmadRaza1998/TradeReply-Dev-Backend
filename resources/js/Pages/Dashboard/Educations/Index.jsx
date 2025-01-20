import { Link } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import CustomPagination from "@/Components/UI/CustomPagination";
import { router } from "@inertiajs/react";
import useToShowStatus from "@/Hooks/useToShowStatus";
import Card from "@/Components/UI/Card";
import routes from "@/constants/routes";

export default function Index({ educations }) {
  useToShowStatus();

  const deletePost = (id) => {
    router.delete(route(routes.EDUCATION.DELETE, id));
  };

  return (
    <DashboardLayout>
      <h1>Education Posts</h1>
      <Link href={route(routes.EDUCATION.CREATE)}>Create New Post</Link>
      <Card
        data={educations.data}
        href={routes.EDUCATION.EDIT}
        deletePost={deletePost}
      />

      <CustomPagination links={educations.links} />
    </DashboardLayout>
  );
}
