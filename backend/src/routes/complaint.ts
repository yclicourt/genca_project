import express from "express";
import {
  createComplaintItem,
  deleteComplaintItem,
  getComplaintByClientItem,
  getComplaintItem,
  getComplaintItems,
  updateComplaintItem,
} from "../controllers/complaint";
import {
  validatorGetComplaint,
  validatorCreateComplaint,
} from "../validators/complaint";
const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    ComplaintDTO:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: the auto-generated id of complaint
 *        address:
 *          type: string
 *          description: the description of the address
 *        clientId:
 *          type: integer
 *          description: the reference of the client
 *        organizationId:
 *          type: integer
 *          description: the reference of the organization
 *        employeeId:
 *          type: integer
 *          description: the reference of the emnployee
 *        date:
 *          type: string
 *          formate: date
 *          description: the date of complaint
 *      required:
 *        - address
 *        - clientId
 *        - organizationId
 *        - employeeId
 *        - date
 *    ComplaintNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: a message for the not found complaint
 *      example:
 *        msg: Complaint was not found
 *
 *  parameters:
 *    complaintId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: integer
 *      description: Complaint id 
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
 *  name: Complaint
 *  description: Complaint endpoints
 */
/**
 * @swagger
 * /api/v1/complaint:
 *  get:
 *    summary: Return a Complaint List
 *    tags: [Complaint]
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      200:
 *        description: the list of complaint
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schemas/ComplaintDTO'
 *
 */
router.get("/", getComplaintItems);
/**
 * @swagger
 * /api/v1/complaint/{id}:
 *  get:
 *    summary: Return a Complaint by id
 *    tags: [Complaint]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: id
 *        name: id
 *        $ref: '#/components/parameters/complaintId'
 *    responses:
 *      200:
 *        description: the complaint was found
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schemas/ComplaintDTO'
 *      404:
 *        description: the complaint was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ComplaintNotFound'
 *
 *
 */
router.get("/:id",validatorGetComplaint, getComplaintItem);
/**
 * @swagger
 * /api/v1/complaint/{id}/client:
 *  get:
 *    summary: Return a Complaint by a client
 *    tags: [Complaint]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: id
 *        name: id
 *        $ref: '#/components/parameters/complaintId'
 *    responses:
 *      200:
 *        description: the complaint was found
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schemas/ComplaintDTO'
 *      404:
 *        description: the complaint was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ComplaintNotFound'
 *
 *
 */
router.get("/:id/client/", getComplaintByClientItem);

/**
 * @swagger
 * /api/v1/complaint:
 *  post:
 *    summary: Create a new complaint
 *    tags: [Complaint]
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ComplaintDTO'
 *    responses:
 *      200:
 *        description: the complaint succesfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ComplaintDTO'
 *      500:
 *        description: some server error
 */
router.post("/",validatorCreateComplaint, createComplaintItem);
/**
 * @swagger
 * /api/v1/complaint/{id}:
 *  put:
 *    summary: Return a Complaint by id
 *    tags: [Complaint]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: id
 *        name: id
 *        $ref: '#/components/parameters/complaintId'
 *    responses:
 *      200:
 *        description: the complaint was found
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schemas/ComplaintDTO'
 *      404:
 *        description: the complaint was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ComplaintNotFound'
 *
 *
 */
router.put("/:id",validatorGetComplaint, updateComplaintItem);
/**
 * @swagger
 * /api/v1/complaint/{id}:
 *  delete:
 *    summary: Return a Complaint by id
 *    tags: [Complaint]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: id
 *        name: id
 *        $ref: '#/components/parameters/complaintId'
 *    responses:
 *      200:
 *        description: the complaint was found
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schemas/ComplaintDTO'
 *      404:
 *        description: the complaint was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ComplaintNotFound'
 *
 *
 */
router.delete("/:id",validatorGetComplaint, deleteComplaintItem);

export { router };
