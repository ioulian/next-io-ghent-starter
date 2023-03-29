import type { Meta, StoryObj } from "@storybook/react";
import { FC, useEffect } from "react";

import { useFileUpload } from "@/services/file.service";

import ButtonGroup from "../button-group/ButtonGroup";
import Button from "../button/Button";

import FileProgress from "./FileProgress";

const meta: Meta<typeof FileProgress> = {
  title: "UI/Files/File Progress",
  component: FileProgress,
  tags: ["autodocs"],
  argTypes: {
    status: {
      options: ["idle", "loading", "succeeded", "failed"],
      control: {
        type: "select",
        labels: ["idle", "loading", "succeeded", "failed"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileProgress>;

export const Idle: Story = {
  args: {
    children: "img.jpg",
    status: "idle",
  },
};

export const Success: Story = {
  args: {
    children: "img.jpg",
    status: "succeeded",
  },
};

export const Fail: Story = {
  args: {
    children: "img.jpg",
    status: "failed",
  },
};

export const Progress: Story = {
  args: {
    children: "img.jpg",
    total: 100000,
    current: 43000,
    status: "loading",
  },
};

const FileItem: FC = () => {
  const {
    uploadBytesTotal,
    downloadBytesTotal,
    uploadBytes,
    downloadBytes,
    status,
    upload,
    abort,
    error,
  } = useFileUpload("https://httpbin.org/put");

  const blob = new Blob([new Uint8Array(10 * 1024 * 1024)]);
  const file = new File([blob], "test.zip");

  useEffect(() => {
    return () => {
      abort();
    };
  }, [abort]);

  return (
    <>
      <FileProgress
        error={error}
        status={status}
        total={uploadBytesTotal + downloadBytesTotal}
        current={uploadBytes + downloadBytes}
      >
        {file.name}
      </FileProgress>
      <ButtonGroup style={{ marginTop: "1rem" }}>
        <Button
          onClick={() => {
            upload(file)
              .then(() => {
                console.log("done");
              })
              .catch((ex) => {
                console.log("failed", ex);
              });
          }}
        >
          Upload file
        </Button>
        <Button
          onClick={() => {
            abort();
          }}
        >
          Abort
        </Button>
      </ButtonGroup>
    </>
  );
};

export const WithFileUploaderLogic: Story = {
  render: () => <FileItem />,
};
