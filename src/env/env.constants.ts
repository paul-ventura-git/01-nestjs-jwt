/* eslint-disable prettier/prettier */
import * as Joi from "joi";

export const ENV_VALIDATION_SCHEMA = Joi.object({
    SECRET_KEY: Joi.required(),
    DATASOURCE_TYPE: Joi.required(),
    DATASOURCE_HOST: Joi.required(),
    DATASOURCE_PORT: Joi.number().required(),
    DATASOURCE_USERNAME: Joi.required(),
    DATASOURCE_PASSWORD: Joi.required(),
    DATASOURCE_DATABASE: Joi.required(),
});