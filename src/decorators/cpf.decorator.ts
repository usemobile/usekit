import {registerDecorator, ValidationOptions, ValidationArguments} from "class-validator";
import { CpfValidator } from "../validators";

export default function IsCpf(validationOptions?: ValidationOptions) {
   return function (object: Object, propertyName: string) {
        registerDecorator({
            name: "isCpf",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                  return new CpfValidator().isValid(value);
                }
            }
        });
   };
}
