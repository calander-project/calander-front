import Image from "next/image";
import { useRouter } from "next/router";

import { zodResolver } from "@hookform/resolvers/zod";
import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Input from "@/components/Input";
import TitleBox from "@/components/TitleBox";
import { useInviteGroupMember } from "@/hooks/useInviteGroupMember";

import styles from "./InviteForm.module.scss";

const cn = classNames.bind(styles);

const createGroupSchema = z.object({
  email: z.string().email("이메일 형식이 올바르지 않습니다."),
});

export interface InviteDataType {
  crewId: number;
  email: string;
}

const mockData = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  email: `test${index}@naver.com`,
}));

export default function InviteForm() {
  const { query } = useRouter();
  const { mutate } = useInviteGroupMember(Number(query.id));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: { email: "" },
    resolver: zodResolver(createGroupSchema),
  });

  const onSubmit = async (formData: Pick<InviteDataType, "email">) => {
    const payload = {
      crewId: Number(query.id),
      email: formData.email,
    };

    mutate(payload, {
      onSuccess: () => {
        alert("초대 메일이 발송되었습니다.");
      },
      onError: (error) => {
        alert(error);
      },
    });
  };

  return (
    <div className={cn("invite-box")}>
      <div className={cn("invite")}>
        <div className={cn("title-box")}>
          <TitleBox title="그룹 초대" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="멤버 초대"
            type="email"
            id="inviteMember"
            placeholder="이메일을 입력해 주세요."
            {...register("email")}
            errorMessage={errors.email?.message}
          />
          <span className={cn("text")}>Enter 키를 누르면 초대장이 전송됩니다.</span>
        </form>
      </div>
      <div className={cn("invite-list-box")}>
        <ul className={cn("invite-list")}>
          {mockData.map((data) => (
            <li key={data.id} className={cn("list")}>
              <span className={cn("email")}>{data.email}</span>
              <button type="button">
                <Image src="/icons/close-icon.svg" width={22} height={22} alt="초대 삭제" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
