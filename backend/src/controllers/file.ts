import {Response} from 'express'
import { handleHttp } from "../utils/error.handle";
import { File } from "../interfaces/file";
import { uploadFile } from "../services/file";
import { RequestExt } from "../interfaces/req-ext";

const uploadItem = async (req: RequestExt, res: Response) => {
  try {
    const { file } = req;
    const dataToRegister: File = {
      filename: `${file?.filename}`,
      path: `${file?.path}`,
    };
    const response = await uploadFile(dataToRegister);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_UPLOAD_FILE");
  }
};

export { uploadItem };