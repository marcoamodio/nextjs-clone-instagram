import React from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import Stories from "../components/stories";


export default function ProfilePage() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Layout user={pid}>
      <Stories>
      <div className="homepage-feed lg:mr-8 flex flex-col ">{pid}</div>
      </Stories>
    </Layout>
  );
}
