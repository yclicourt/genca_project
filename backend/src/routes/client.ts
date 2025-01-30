import express from "express";

import {
  validatorCreateClient,
  validatorGetClient,
} from "../validators/client";
import {
  createClientItem,
  deleteClientItem,
  getClientItem,
  getClientItems,
  updateClientItem,
} from "../controllers/client";
const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    ClientDTO:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: the auto-generated id of client
 *        client_name:
 *          type: string
 *          description: the description of the client name
 *        address:
 *          type: string
 *          description: the description of the client
 *        client_ci:
 *          type: integer
 *          description: the description of client ci
 *        frecueny:
 *          type: boolean
 *          description: the description of frecuency
 *        ocupation:
 *          type: string
 *          description: the description of the ocupation
 *        genre:
 *          type: string
 *          enum: [male,female]
 *          description: the description of genre
 *        order:
 *          type: string
 *          description: the description of the order
 *      required:
 *        - address
 *        - client_name
 *        - client_ci
 *        - frecueny
 *        - ocupation
 *        - order
 *    ClientNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: a message for the not found client
 *      example:
 *        msg: Client was not found
 *
 *  parameters:
 *    categoryId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: integer
 *      description: the client id
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
 *  name: Client
 *  description: Client endpoints
 */
/**
 * @swagger
 * /api/v1/client:
 *  get:
 *    summary: Return a Client List
 *    tags: [Client]
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      200:
 *        description: the list of clients
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schemas/ClientDTO'
 *
 */
router.get("/", getClientItems);
/**
 * @swagger
 * /api/v1/client/{id}:
 *  get:
 *    summary: Return a Client by id
 *    tags: [Client]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: clientId
 *        name: id
 *        $ref: '#/components/parameters/clientId'
 *    responses:
 *      200:
 *        name:
 *        description: the client was found
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schemas/ClientDTO'
 *      404:
 *        description: the client was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ClientNotFound'
 *
 *
 */
router.get("/:id", validatorGetClient, getClientItem);

/**
 * @swagger
 * /api/v1/client:
 *  post:
 *    summary: Create a new client
 *    tags: [Client]
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ClientDTO'
 *    responses:
 *      200:
 *        description: the client succesfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CategoryDTO'
 *      500:
 *        description: some server error
 */
router.post("/", validatorCreateClient, createClientItem);
/**
 * @swagger
 * /api/v1/client/{id}:
 *  put:
 *    summary: Update a Client by id
 *    tags: [Client]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: clientId
 *        name: id
 *        $ref: '#/components/parameters/clientId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ClientDTO'
 *    responses:
 *      200:
 *        description: the update client
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#components/schemas/ClientDTO'
 *      404:
 *        description: the client was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ClientNotFound'
 *
 *
 */
router.put("/:id", validatorCreateClient, validatorGetClient, updateClientItem);
/**
 * @swagger
 * /api/v1/client/{id}:
 *  delete:
 *    summary: Delete a Client by id
 *    tags: [Client]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: clientId
 *        name: id
 *        $ref: '#/components/parameters/clientId'
 *    responses:
 *      200:
 *        description: the client was eliminated succesfully
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schemas/ClientDTO'
 *      404:
 *        description: the client was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ClientNotFound'
 *
 *
 */
router.delete("/:id", validatorGetClient, deleteClientItem);

export { router };
