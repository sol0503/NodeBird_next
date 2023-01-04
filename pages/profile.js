import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditFrom from "../components/NicknameEditFrom";
const Profile = () => {
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditFrom />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={follerList} />
      </AppLayout>
    </>
  );
};
export default Profile;
