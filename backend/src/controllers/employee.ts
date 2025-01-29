import { Request, Response } from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
} from "../services/employee";
import { handleHttp } from "../utils/error.handle";

const getEmployeeItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await getEmployee(parseInt(id));
    data == null
      ? res
          .status(403)
          .json({ message: `There is not record with that employee` })
      : res.send({ data });
  } catch (error: any) {
    error?.code == "ERR_HTTP_HEADERS_SENT"
      ? res.status(404).json({ message: "Employee not found" })
      : handleHttp(res, "ERROR_GET_EMPLOYEE");
  }
};

const getEmployeeItems = async (req: Request, res: Response) => {
  try {
    const data = await getEmployees();
    res.send({ data });
  } catch (error) {
    handleHttp(res, "ERROR_GET_EMPLOYEES");
  }
};

const createEmployeeItem = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const data = await createEmployee(body);
    res.send({ data });
  } catch (error) {
    handleHttp(res, "ERROR_CREATE_EMPLOYEE");
  }
};

const updateEmployeeItem = async (req: Request, res: Response) => {
  try {
    const updatedId = parseInt(req.params.id);
    const { body } = req;
    const data = await updateEmployee(updatedId, body);
    res.send({ data });
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_EMPLOYEE");
  }
};

const deleteEmployeeItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteEmployee(parseInt(id));
    res.status(200).json({
      message: `Has been eliminated succefully that employee`,
    });
  } catch (error: any) {
    error?.code == "P2025"
      ? res
          .status(404)
          .json({ message: `There is not record with that employee` })
      : handleHttp(res, "ERROR_DELETE_EMPLOYEE");
  }
};

export {
  getEmployeeItem,
  getEmployeeItems,
  createEmployeeItem,
  updateEmployeeItem,
  deleteEmployeeItem,
};
