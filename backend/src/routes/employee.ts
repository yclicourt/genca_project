import express from "express";
import {
  validatorRegisterEmployee,
  validatorGetEmployee,
} from "../validators/employee";
import {
  createEmployeeItem,
  deleteEmployeeItem,
  getEmployeeItem,
  getEmployeeItems,
  updateEmployeeItem,
} from "../controllers/employee";
const router = express.Router();

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
 *        email:
 *          type: string
 *          description: the description of the email
 *        lastname:
 *          type: string
 *          description: the description of the lastname
 *        name:
 *          type: string
 *          description: the description of name
 *        password:
 *          type: string
 *          description: the description of password
 *        category:
 *          type: string
 *          enum: [directive,employee]
 *          description: the description of the category
 *        role:
 *          type: string
 *          enum: [user,admin]
 *          description: the description of role
 *        order:
 *          type: string
 *          description: the description of the order
 *      required:
 *        - name
 *        - lastname
 *        - email
 *        - password
 *    employeeNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: a message for the not found employee
 *      example:
 *        msg: employee was not found
 *
 *  parameters:
 *    employeeId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: integer
 *      description: the employee id
 *
 */

/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *
 */

/**
 * @swagger
 * tags:
 *  name: Employee
 *  description: Employee endpoints
 */
/**
 * @swagger
 * /api/v1/employee:
 *  get:
 *    summary: Return a Employee List
 *    tags: [Employee]
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      200:
 *        description: the list of employees
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schemas/EmployeeDTO'
 *
 */
router.get("/", getEmployeeItems);
/**
 * @swagger
 * /api/v1/employee/{id}:
 *  get:
 *    summary: Return a employee by id
 *    tags: [Employee]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: id
 *        name: id
 *        $ref: '#/components/parameters/employeeId'
 *    responses:
 *      200:
 *        description: the employee was found
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schemas/EmployeeDTO'
 *      404:
 *        description: the employee was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/EmployeeNotFound'
 *
 *
 */
router.get("/:id",  validatorGetEmployee, getEmployeeItem);
router.post("/", validatorRegisterEmployee, createEmployeeItem);
/**
 * @swagger
 * /api/v1/employee/{id}:
 *  put:
 *    summary: Return a employee by id
 *    tags: [Employee]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: id
 *        name: id
 *        $ref: '#/components/parameters/employeeId'
 *    responses:
 *      200:
 *        description: the employee was found
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schemas/EmployeeDTO'
 *      404:
 *        description: the employee was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/EmployeeNotFound'
 *
 *
 */
router.put(
  "/:id",
  validatorRegisterEmployee,
  updateEmployeeItem
);
/**
 * @swagger
 * /api/v1/employee/{id}:
 *  delete:
 *    summary: Return a employee by id
 *    tags: [Employee]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: id
 *        name: id
 *        $ref: '#/components/parameters/employeeId'
 *    responses:
 *      200:
 *        description: the employee was found
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schemas/EmployeeDTO'
 *      404:
 *        description: the employee was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/EmployeeNotFound'
 *
 *
 */
router.delete("/:id",  deleteEmployeeItem);

export { router };
