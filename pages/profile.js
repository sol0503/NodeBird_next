import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditFrom from "../components/NicknameEditFrom";
import FollowList from "../components/FollowList";
const Profile = () => {
  const followerList = [
    { nickname: "제로초" },
    { nickname: "솔" },
    { nickname: "바보" },
  ];
  const followingList = [
    { nickname: "제로초" },
    { nickname: "솔" },
    { nickname: "바보" },
  ];

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditFrom />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};
export default Profile;
