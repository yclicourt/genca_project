import { Request, Response } from "express";
import {
  getOrganization,
  getOrganizations,
  createOrganization,
  updateOrganization,
  deleteOrganization,
} from "../services/organization";
import { handleHttp } from "../utils/error.handle";

const getOrganizationItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await getOrganization(parseInt(id));
    data == null
      ? res
          .status(403)
          .json({ message: `There is not record with that organization` })
      : res.send({ data });
  } catch (error: any) {
    console.log(error);
    error?.code == "ERR_HTTP_HEADERS_SENT"
      ? res.status(404).json({ message: "Organization not found" })
      : handleHttp(res, "ERROR_GET_ORGANIZATION");
  }
};

const getOrganizationItems = async (req: Request, res: Response) => {
  try {
    const data = await getOrganizations();
    res.send({ data });
  } catch (error) {
    handleHttp(res, "ERROR_GET_ORGANIZATIONS");
  }
};

const createOrganizationItem = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const data = await createOrganization(body);
    res.send({ data });
  } catch (error) {
    handleHttp(res, "ERROR_CREATE_ORGANIZATION");
  }
};

const updateOrganizationItem = async (req: Request, res: Response) => {
  try {
    const updatedId = parseInt(req.params.id);
    const { body } = req;
    const data = await updateOrganization(updatedId, body);
    res.send({ data });
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_ORGANIZATION");
  }
};

const deleteOrganizationItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteOrganization(parseInt(id));
    res.status(200).json({
      message: `Has been eliminated succefully that organization`,
    });
  } catch (error: any) {
    error?.code == "P2025"
      ? res
          .status(404)
          .json({ message: `There is not record with that organization` })
      : handleHttp(res, "ERROR_DELETE_ORGANIZATION");
  }
};

export {
  getOrganizationItem,
  getOrganizationItems,
  createOrganizationItem,
  updateOrganizationItem,
  deleteOrganizationItem,
};
