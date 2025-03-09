import { UploadIcon } from "@/icons/other-icons";
import { FileUploadRoot, FileUploadTrigger } from "@chakra-ui/react";
import { FileUploadList } from "../ui/file-upload";

const FileUploadButton = () => {
  return (
    <FileUploadRoot>
      <FileUploadTrigger asChild>
        <UploadIcon fontSize="2xl" color="fg" />
      </FileUploadTrigger>
      <FileUploadList />
    </FileUploadRoot>
  );
};

export default FileUploadButton