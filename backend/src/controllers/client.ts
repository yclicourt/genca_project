import { Request, Response } from "express";
import { matchedData } from "express-validator";
import {
  createClient,
  getClient,
  getClients,
  updateClient,
  deleteClient,
} from "../services/client";
import { handleHttp } from "../utils/error.handle";

const getClientItem = async (req: Request, res: Response) => {
  try {
    const { id } = matchedData(req);
    const data = await getClient(id);
    data == null
      ? res
          .status(403)
          .json({ message: `There is not record with that client` })
      : res.send({ data });
  } catch (error: any) {
    error?.code == "ERR_HTTP_HEADERS_SENT"
      ? res.status(404).json({ message: "Client not found" })
      : handleHttp(res, "ERROR_GET_CLIENT");
  }
};

const getClientItems = async (req: Request, res: Response) => {
  try {
    const data = await getClients();
    res.send({ data });
  } catch (error) {
    handleHttp(res, "ERROR_GET_CLIENTS");
  }
};

const createClientItem = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const data = await createClient(body);
    res.send({ data });
  } catch (error) {
    handleHttp(res, "ERROR_CREATE_CLIENT");
  }
};

const updateClientItem = async (req: Request, res: Response) => {
  try {
    const updatedId = parseInt(req.params.id);
    const { body } = req;
    const data = await updateClient(updatedId, body);
    res.send({ data });
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_CLIENT");
  }
};

const deleteClientItem = async (req: Request, res: Response) => {
  try {
    const { id } = matchedData(req);
    await deleteClient(parseInt(id));
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
  getClientItem,
  getClientItems,
  createClientItem,
  updateClientItem,
  deleteClientItem,
};
