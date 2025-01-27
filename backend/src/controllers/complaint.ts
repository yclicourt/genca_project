import { Request, Response } from "express";
import { matchedData } from "express-validator";

import {
  createComplaint,
  deleteComplaint,
  getClientByComplaint,
  getComplaint,
  getComplaints,
  updateComplaint,
} from "../services/complaint";
import { handleHttp } from "../utils/error.handle";

const getComplaintItems = async (req: Request, res: Response) => {
  try {
    const responseCompaintItems = await getComplaints();
    res.send(responseCompaintItems);
  } catch (error) {
    handleHttp(res, "ERROR_GET_COMPLAINTS");
  }
};

const getComplaintItem = async (req: Request, res: Response) => {
  try {
    const { id } = matchedData(req);
    const data = await getComplaint(id);
    data == null
      ? res
          .status(403)
          .json({ message: "There is not record with that complaint" })
      : res.send({ data });
  } catch (error: any) {
    error?.code == "ERR_HTTP_HEADERS_SENT"
      ? res.status(404).json({ message: "Complaint not found" })
      : handleHttp(res, "ERROR_GET_COMPLAINT");
  }
};

const getComplaintByClientItem = async (req: Request, res: Response) => {
  try {
    const { id } = matchedData(req);
    const data = await getClientByComplaint(id);
    data == null
      ? res
          .status(403)
          .json({ message: "There is not record with that complaint" })
      : res.send({ data });
  } catch (error: any) {
    error?.code == "ERR_HTTP_HEADERS_SENT"
      ? res.status(404).json({ message: "Complaint not found" })
      : handleHttp(res, "ERROR_GET_COMPLAINT");
  }
};

const createComplaintItem = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const data = await createComplaint(body);
    res.send({ data });
  } catch (error: any) {
    console.log(error)
   /*  error?.code == "P2003"
      ? res.status(404).json({ message: "Foreign key constraint failed" })
      : */ handleHttp(res, "ERROR_CREATE_COMPLAINT");
  }
};

const updateComplaintItem = async (req: Request, res: Response) => {
  try {
    const { id, body } = matchedData(req);
    const data = updateComplaint(id, body);
    res.send({ data });
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_COMPLAINT");
  }
};

const deleteComplaintItem = async (req: Request, res: Response) => {
  try {
    const { id } = matchedData(req);
    await deleteComplaint(parseInt(id));
    res.status(200).json({
      message: `Has been eliminated succefully that client`,
    });
  } catch (error: any) {
    error?.code == "P2025"
      ? res
          .status(404)
          .json({ message: `There is not record with that client` })
      : handleHttp(res, "ERROR_DELETE_CLIENT");
  }
};

export {
  createComplaintItem,
  deleteComplaintItem,
  getComplaintItem,
  updateComplaintItem,
  getComplaintByClientItem,
  getComplaintItems,
};
