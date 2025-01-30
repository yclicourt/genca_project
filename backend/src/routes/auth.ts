import { Router } from "express";

import { loginCtrlEmployee, registerCtrlEmployee } from "../controllers/auth";
import {
  validatorLoginEmployee,
  validatorRegisterEmployee,
} from "../validators/employee";
const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    EmployeeDTO:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: the auto-generated id of employee
 *        name:
 *          type: string
 *          description: the description of the name
 *        lastname:
 *          type: string
 *          description: the description of the lastname
 *        email:
 *          type: string
 *          description: the email of the employee
 *        password:
 *          type: string
 *          description: the password of the employee
 *      required:
 *        - name
 *        - email
 *        - password
 *    EmployeeNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: a message for the not found employee
 *      example:
 *        msg: Employee was not found
 *
 *
 */
/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Auth endpoints
 */

/**
 * @swagger
 * /api/v1/auth/register:
 *  post:
 *    summary: Create a new employee
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/EmployeeDTO'
 *    responses:
 *      200:
 *        description: the employee succesfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/EmployeeDTO'
 *      500:
 *        description: some server error
 */

router.post("/register", validatorRegisterEmployee, registerCtrlEmployee);

/**
 * @swagger
 * components:
 *  schemas:
 *    EmployeeDTO:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          description: the email of the employee
 *        password:
 *          type: string
 *          description: the password of the employee
 *      required:
 *        - email
 *        - password
 *    EmployeeNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: a message for the not found employee
 *      example:
 *        msg: Employee was not found
 *
 *
 */

/**
 * @swagger
 * /api/v1/auth/login:
 *  post:
 *    summary: Login a employee
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/EmployeeDTO'
 *    responses:
 *      200:
 *        description: the employee login succesfully 
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/EmployeeDTO'
 *      500:
 *        description: some server error
 */
router.post("/login", validatorLoginEmployee, loginCtrlEmployee);

export { router };
