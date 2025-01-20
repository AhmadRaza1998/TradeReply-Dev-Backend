import Home from "@/Components/common/Home";
import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/react";
import "../../../css/Home/home.scss";

export default function Welcome() {
  return (
    <HomeLayout>
      <Head title="Welcome" />
      <Home />
    </HomeLayout>
  );
}
