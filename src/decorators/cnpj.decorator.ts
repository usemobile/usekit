import {registerDecorator, ValidationOptions, ValidationArguments} from "class-validator";
import { CnpjValidator } from "../validators";

export default function IsCnpj(validationOptions?: ValidationOptions) {
   return function (object: Object, propertyName: string) {
        registerDecorator({
            name: "isCnpj",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                  return new CnpjValidator().isValid(value);
                }
            }
        });
   };
}
