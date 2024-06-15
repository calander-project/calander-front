import { ReactElement } from "react";

import Link from "next/link";
import { GetServerSidePropsContext } from "next/types";

import { QueryClient, dehydrate } from "@tanstack/react-query";
import classNames from "classnames/bind";

import MemberList from "./components/MemberList";
import { setContext } from "@/apis/axios";
import Input from "@/components/Input";
import Layout from "@/components/Layout";
import MetaData from "@/components/MetaData";
import TitleBox from "@/components/TitleBox";
import { PAGE_PATH } from "@/constants/pagePath";
import { groupKey } from "@/constants/queryKey";

import styles from "./Group.module.scss";

const cn = classNames.bind(styles);

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  setContext(context);
  const queryClient = new QueryClient();

  try {
    // await queryClient.prefetchQuery({ queryKey: groupKey.lists(), queryFn: getGroupList });
    // await queryClient.prefetchQuery({ queryKey: userInfoKey.info(), queryFn: getUserInfo });

    return {
      props: { dehydrateState: dehydrate(queryClient) },
    };
  } catch (error) {
    return {
      props: { dehydrateState: null },
    };
  }
};

export default function Group() {
  return (
    <>
      <MetaData title="대시보드 | 티키타" />
      <section className={cn("content")}>
        <MemberList />
        <div className={cn("invite-box")}>
          <div className={cn("invite")}>
            <div className={cn("title-box")}>
              <TitleBox title="그룹 초대" />
            </div>
            <Input
              label="멤버 초대"
              type="text"
              id="inviteMember"
              placeholder="이메일을 입력해 주세요."
              // {...register("crewName")}
              // errorMessage={errors.crewName?.message}
            />
          </div>
          <div className={cn("invite-list")}></div>
        </div>
      </section>
    </>
  );
}

Group.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
